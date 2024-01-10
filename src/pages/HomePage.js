import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Button from "../components/Button";

const HomePage = (props) => {
    return (
        <div className="home-page">
            <div className="home-page-content">
                <h1>Teknolojik Yemekler</h1>
                <p>KOD ACIKTIRIR <br></br> PIZZA, DOYURUR</p>
                <Button />
            </div>
        </div>
    )
}

export default HomePage;