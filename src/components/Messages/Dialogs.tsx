import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type PropsType = {}
export const Dialogs: React.FC<PropsType> = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div>
                    <NavLink to={'/dialogs/1'} className={n=>n.isActive?s.active:s.dialog}>Alex</NavLink>
                </div>
                <div>
                    <NavLink to={'/dialogs/2'} className={n=>n.isActive?s.active:s.dialog}>Iren</NavLink>
                </div>
                <div>
                    <NavLink to={'/dialogs/3'} className={n=>n.isActive?s.active:s.dialog}>Dory</NavLink>
                </div>
                <div>
                    <NavLink to={'/dialogs/4'} className={n=>n.isActive?s.active:s.dialog}>Mike</NavLink>
                </div>
                <div>
                    <NavLink to={'/dialogs/5'} className={n=>n.isActive?s.active:s.dialog}>Igor</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hello!
                </div>
                <div className={s.message}>
                    Hi.
                </div>
                <div className={s.message}>
                    How are you?
                </div>
                <div className={s.message}>
                    I'm fine!
                </div>
            </div>
        </div>
    )
};