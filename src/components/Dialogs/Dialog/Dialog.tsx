import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialog.module.css";

type DialogPropsType = {
    id: number
    name: string
}
export const Dialog: React.FC<DialogPropsType> = ({id, name}) => {
    return (
        <div>
            <NavLink to={'/dialogs/' + id} className={n => n.isActive ? s.active : s.dialog}>{name}</NavLink>
        </div>
    )
}