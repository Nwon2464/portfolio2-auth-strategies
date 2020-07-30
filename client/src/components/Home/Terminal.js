import React from "react";

const Terminal = ({ userData, selected }) => {
    const selectedData = selected === "All" ? userData : userData[selected];
    const jsonCode = JSON.stringify(selectedData, null, 4);

    return (
        <div className="window">
            <div className="title-bar">
                <div className="buttons">
                    <div className="fakeButtons fakeClose" />
                    <div className="fakeButtons fakeMinimize" />
                    <div className="fakeButtons fakeZoom" />
                </div>
                <p>
                    Terminal
                </p>
            </div>
            <div className="content">
                <pre>{jsonCode}</pre>
            </div>
        </div>
    );
};

export default Terminal;