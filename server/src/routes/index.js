const router = require("express").Router();

const User = require("../models/user");

//Root URL http://localhost:5000/posts
router.get("/", async (req, res, next) => {
  try {
    const response = await User.find();
    res.json(response);
  } catch (error) {
    console.log(error.name, "from get request");
    next(error);
  }
});

//Root URL http://localhost:5000/posts
router.post("/", async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const createdUser = await newUser.save();
    createdUser.validate().catch((error) => {
      assert.ok(error);
      assert.equal(error.errors["title"].message, "Title validation failed");
      assert.equal(error.errors["body"].message, "Email validation failed");
      assert.equal(error.errors["footer"].message, "Email validation failed");
    });

    res.json(createdUser);
  } catch (error) {
    console.log(error.name, "from post request");
    next(error);
  }
});

//Root URL http://localhost:5000/posts
router.post("/update/:id", async (req, res, next) => {
  try {
    await User.findById(req.params.id).then((user) => {
      user.title = req.body.title;
      user.body = req.body.body;
      user.footer = req.body.footer;
      user.save().then(res.send("Post has been updated!"));
    });
  } catch (error) {
    console.log(error.name, "from post update request");
    next(error);
  }
});

//Root URL http://localhost:5000/posts
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id).then(() => {
      res.send("Post has been deleted");
    });
  } catch (error) {
    console.log(error.name, "from delete request");
    next(error);
  }
});

module.exports = router;
