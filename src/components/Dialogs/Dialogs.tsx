import React from "react";
import s from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export type PropsType = {}
export const Dialogs: React.FC<PropsType> = () => {
    let dialogs = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Piter'},
        {id: 3, name: 'Mike'},
        {id: 4, name: 'Lera'},
        {id: 5, name: 'Sofia'},
        {id: 6, name: 'Oleg'},
        {id: 7, name: 'Sergey'},
        {id: 8, name: 'Alina'},
        {id: 9, name: 'Oksana'},
        {id: 10, name: 'Igor'},
        {id: 11, name: 'Vlad'},
    ]
    let messages = [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'Hi.'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: "I'm fine!"},
    ]

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

