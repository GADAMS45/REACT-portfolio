import React from "react";

function Header({setCurrentPage}) {
    return (
        <header>
            <h1>Greg Adams' Portfolio</h1>
            <nav>
                <a href="#">
                    <li onClick={() => {
                        setCurrentPage("About")
                    }}>About Me</li>
                </a>
                <a href="#">
                    <li onClick={() => {
                        setCurrentPage("Work")
                    }}>Work</li>
                </a>
                <a href="#">
                    <li onClick={() => {
                        setCurrentPage("Contact")
                    }}>Contact Me</li>
                </a>
                <a href="#">
                    <li onClick={() => {
                        setCurrentPage("Resume")
                    }}>Resume</li>
                </a>
            </nav>
        </header>
    )
}

export default Header;