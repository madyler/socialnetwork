import React from "react";
import s from "../Dialogs.module.css";

type MessagePropsType = {
    id: number
    message: string
}
export const Message: React.FC<MessagePropsType> = ({id, message}) => {
    return (
        <div className={s.message}>
            {message}
        </div>
    )
}