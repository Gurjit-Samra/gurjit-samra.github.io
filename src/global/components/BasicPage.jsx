import React from "react";
import NavbarComponent  from "./NavbarComponent";
import "../styles/main.css";




const BasicPage = (props) => {
    return (
        <div className="basic-page">
            <NavbarComponent />
            <div className={props.className}>
            {props.children}
            </div>
        </div>
        
    );
};

export default BasicPage;