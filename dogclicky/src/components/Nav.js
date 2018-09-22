import React from "react";

const Nav = props => {
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Dog Memory</a>
            <ul className="nav navbar-nav">
                <li className="nav-item">
                <div>Score: {props.score}</div>
                </li>
                <li className="nav-item">
                <div>High Score: {props.highscore}</div>
                </li>
            </ul>
        </nav>
    )
};


export default Nav;