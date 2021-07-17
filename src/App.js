import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Popup from "./components/Popupimage/Popup";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
    const [data, setData] = useState("");
    const [popup, setPopup] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        let input = e.target.value;
        if (input === "") return;
        setSearchInput(input);
        let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=5f2b1a283ccd6817ecc41a0647ea5250&text=${input}&format=json&nojsoncallback=1`;
        fetchData(url);
    };
    const imageClick = () => {};

    const fetchData = async (url) => {
        let res = await fetch(url);
        let data = await res.json();
        setData(data.photos.photo);
        console.log(data.photos.photo);
    };

    useEffect(() => {
        (async () => {
            let url = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=5f2b1a283ccd6817ecc41a0647ea5250&format=json&nojsoncallback=1";
            await fetchData(url);
        })();
        console.log("effect");
    }, []);
    return (
        <>
            {popup ? <Popup /> : ""}
            <Navbar handleChange={handleChange} searchInput={searchInput} />
            {data.length ? <Main data={data} imageClick={imageClick} /> : <h3>{"Loading..."}</h3>}
        </>
    );
}

export default App;
