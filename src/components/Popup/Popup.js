import React from "react";
import "./Popup.css";

const Popup = ({ closePopup, image }) => {
    return (
        <div className="popup--back">
            <div className="popup--content">
                <div className="popup--close" onClick={closePopup}>
                    x
                </div>
                <div className="img--container">
                    <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} className="img-thumbnail" alt={image.title} />
                </div>
            </div>
        </div>
    );
};

export default Popup;
