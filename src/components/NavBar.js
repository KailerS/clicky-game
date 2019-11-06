import React, { Component } from "react";


function NavBar ({ currentScore, topScore }) {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li>Stranger Clicks!</li>
                    <li>Click an Image to Begin</li>
                    <li>Score: {currentScore} | Top Score: {topScore}</li>
                </ul>
            </nav>            
        </div>
    )
    
}


export default NavBar;