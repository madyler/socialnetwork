import React from "react";
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/state";

type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

export const Dialogs: React.FC<PropsType> = ({dialogs,
                                                 messages}) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogs.map(d=>
                    <Dialog key={d.id} id={d.id} name={d.name}/>
                )}
            </div>
            <div className={s.messages}>
                {messages.map(m=>
                    <Message key={m.id} id={m.id} message={m.message}/>
                )}
            </div>
        </div>
    )
};

