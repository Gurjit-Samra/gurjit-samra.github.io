import React from "react";
import NavbarComponent  from "./NavbarComponent";
import "../styles/main.css";




const BasicPage = (props) => {
    return (
        <>
        <NavbarComponent />
        <div className={props.className}>
            {props.children}
        </div>
        </>
        
    );
};

export default BasicPage;