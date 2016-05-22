import React from "react";
import { Link } from "react-router";
import style from "./style.less";

const MainAppBar = () => (

	<nav className="uk-navbar uk-margin-large-bottom">
		<Link to="/" className="uk-navbar-brand uk-hidden-small">Brand</Link>
        <ul className="uk-navbar-nav uk-hidden-small">
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/signin">Sign In</Link>
            </li>
        </ul>
        <a href="#offcanvas" className="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>
        <div className="uk-navbar-brand uk-navbar-center uk-visible-small">Brand</div>
    </nav>
);

export default MainAppBar;
