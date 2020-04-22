import {NavLink} from "react-router-dom";
import React from "react";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink> <br/>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink> <br/>
        <NavLink to="/help" activeClassName="is-active">Get Help</NavLink>
    </header>
);

export default Header;