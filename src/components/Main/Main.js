import React from "react";
import "./Main.css";

export default function Main({ data,imageClick }) {
    return (
        <div className="main">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {data.map((image) => {
                    return <Image key={image.id} image={image} imageClick={imageClick}/>;
                })}
            </div>
        </div>
    );
}

const Image = ({ image,imageClick }) => {
    return <img OnClick={(image.id)=>imageClick(image.id)} src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} className="img-thumbnail col" alt="P1013523.jpg" />;
};
