import React from "react";


function NavBar ({ score, topScore }) {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li>Stranger Clicks!</li>
                    <li>Click an Image to Begin</li>
                    <li>Score: {score} | Top Score: {topScore}</li>
                </ul>
            </nav>            
        </div>
    )
    
}


export default NavBar;