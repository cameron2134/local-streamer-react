import React from "react";
import {Link} from "react-router-dom";


function Navbar() {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <Link to="/">

            <span class="navbar-brand">
            <img src="http://placehold.it/50x50" width="30" height="30" class="d-inline-block align-top" alt="" />
            Streamer
            </span>
            </Link>

            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    );
}

export default Navbar;