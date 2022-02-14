import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return <nav className={s.nav}>
        <div>
            <NavLink to={'/profile'} className={n=>n.isActive?s.active:s.item}>Profile</NavLink>
        </div>
        <div>
            <NavLink to={'/dialogs'} className={n=>n.isActive?s.active:s.item}>Message</NavLink>
        </div>
        <div>
            <NavLink to={'/news'} className={n=>n.isActive?s.active:s.item}>News</NavLink>
        </div>
        <div>
            <NavLink to={'/music'} className={n=>n.isActive?s.active:s.item}>Music</NavLink>
        </div>
        <div>
            <NavLink to={'/settings'} className={n=>n.isActive?s.active:s.item}>Settings</NavLink>
        </div>
    </nav>
}