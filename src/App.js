import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Popup from "./components/Popup/Popup";

import "./App.css";

function App() {
    const [data, setData] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const [popup, setPopup] = useState(false);
    const [popupImage, setPopImage] = useState("");

    const handleChange = (e) => {
        let input = e.target.value;
        if (input === "") return;
        setSearchInput(input);
        let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5f2b1a283ccd6817ecc41a0647ea5250&text=${input}&format=json&nojsoncallback=1`;
        fetchData(url);
    };
    const imageClick = (imageID) => {
        let image = data.find((elem) => elem.id === imageID);
        setPopImage(image);
        setPopup(true);
    };

    const closePopup = () => {
        setPopup(false);
    };

    const fetchData = async (url) => {
        let res = await fetch(url);
        let data = await res.json();
        setData(data.photos.photo);
    };

    useEffect(() => {
        (async () => {
            let url = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=5f2b1a283ccd6817ecc41a0647ea5250&format=json&nojsoncallback=1";
            await fetchData(url);
        })();
    }, []);
    return (
        <>
            <Navbar handleChange={handleChange} searchInput={searchInput} />
            {data.length ? <Main data={data} imageClick={imageClick} /> : <h3 style={{ textAlign: "center", marginTop: "2rem" }}>{"Loading..."}</h3>}
            {popup ? <Popup closePopup={closePopup} image={popupImage} /> : ""}
        </>
    );
}

export default App;
