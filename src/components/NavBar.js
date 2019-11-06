import React, { Component } from "react";


class NavBar extends Component {
    state = {
        currentScore: 0,
        topScore: 0,
        guess: ""
    }


    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul>
                        <li>Stranger Clicks!</li>
                        <li>Click an Image to Begin</li>
                        <li>Score: {this.state.currentScore} | Top Score: {this.state.topScore}</li>
                    </ul>

                </nav>
            
            </div>
        )
    }
}


export default NavBar;