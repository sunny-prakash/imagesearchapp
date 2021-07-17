import React from "react";
import "./Navbar.css";

export default function Navbar({ handleChange, searchInput }) {
    return (
        <div className="searchnav">
            <h1>{"Search Photos"}</h1>
            <form>
                <input value={searchInput} onChange={handleChange} className="search-input" type="text" placeholder="Search Images" />
            </form>
        </div>
    );
}
