import React from "react";
import "./Main.css";

export default function Main({ data, imageClick }) {
    return (
        <div className="main">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {data.map((image) => {
                    return (
                        <div
                            key={image.id}
                            onClick={() => {
                                imageClick(image.id);
                            }}
                            className="col image-container"
                        >
                            <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} className="img-thumbnail" alt={image.title} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
