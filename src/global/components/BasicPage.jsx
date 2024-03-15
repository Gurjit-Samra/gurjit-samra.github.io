import React from "react";
import NavbarComponent  from "./NavbarComponent";
import "../styles/main.css";

const BasicPage = ({ children }) => {
    return (
        <div className="basic-page">
            <NavbarComponent />
        </div>
    );
};

export default BasicPage;