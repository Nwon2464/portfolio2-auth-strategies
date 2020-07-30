const stripe = require("stripe");
const router = require("express").Router();
router.get("/current_user", (req, res) => {
  console.log("????");
  res.send(req.user);
});

router.post("/stripe", (req, res) => {
  console.log(req.body);
});

module.exports = router;
