import React from "react";
import { NavbarComponent } from "./NavbarComponent";

const PageComponent = (NavbarComponent) => {
    return (
        <div>
            <NavbarComponent />
            <>&lt;</>
        </div>
    );
};

export default PageComponent;