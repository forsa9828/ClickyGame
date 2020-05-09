import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav> 
            <ul>
                <li><a href = "/">Clicky Game</a></li>
                <li>Score: {props.score}</li>
                <li>Top Score:{props.topScore}</li>
            </ul>
        </nav>
    )
}

export default Nav;