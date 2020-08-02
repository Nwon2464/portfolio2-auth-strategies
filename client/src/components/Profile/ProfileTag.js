import React from "react";

const ProfileTag = ({ verifyData, onClick, selected }) => {
  const allData = ["All", ...verifyData];
  return (
    <React.Fragment>
      {allData.map((data, index) => {
        return (
          <div
            key={index}
            onClick={(e) => {
              onClick(data);
            }}
            title={data}
          >
            <button
              className="AllButton"
              style={{
                cursor: "pointer",
                padding: 15,
                margin: "10px 0",
                fontSize: 20,
              }}
            >
              {data}
            </button>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ProfileTag;
