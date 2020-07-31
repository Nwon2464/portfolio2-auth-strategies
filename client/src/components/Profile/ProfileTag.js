import React from "react";

const ProfileTag = ({ verifyData, onClick, selected }) => {
  const allData = ["All", ...verifyData];
  const renderContent = () => {
    allData.map((data, index) => {
      const extraClass = data === selected ? "selected" : "";
      return (
        <div
          key={index}
          onClick={(e) => {
            console.log(e.target.value);
            onClick(data);
          }}
          title={data}
        >
          <p>{data}</p>
          <div>asdfasfasdf</div>
        </div>
      );
    });
  };
  return (
    <>
      {/* {renderContent()} */}
      {allData.map((data, index) => {
        const extraClass = data === selected ? "selected" : "";
        return (
          <div
            key={index}
            onClick={(e) => {
              console.log(e.target);
              onClick(data);
            }}
            title={data}
          >
            <button className="AllButton" style={{ padding: 15, margin: "10px 0", fontSize: 20 }}>
              {data}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ProfileTag;
