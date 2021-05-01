import React from 'react';
import "./Logo.css"
import { Link } from "react-router-dom";

const Logo = () => {
    return(
        <Link className="logo" to="/">
            <h1>Eastside Wedding Videography</h1>
        </Link>
    )
}

export default Logo