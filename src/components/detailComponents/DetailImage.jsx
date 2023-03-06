import React from "react";

const DetailImage = (props) => {
    return (
        <div
            style={{
                background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${props.image})`,
                backgroundSize: "cover",
                height: "440px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center"
            }}
        >
            <div className="banner-content">
                <h1>{props.name}</h1>
            </div>
        </div>
    );
};

export default DetailImage;
