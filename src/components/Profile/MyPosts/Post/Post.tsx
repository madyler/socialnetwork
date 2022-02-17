import React from "react";
import s from "./Post.module.css";
import {PostType} from "../../../../redux/state";

type PropsType = PostType

export const Post:React.FC<PropsType> = ({message, likesCount}) => {
    return <div className={s.item}>
        <img alt={''}
             src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaC5Tz5C_tD2OAOgXBXMYoF7aedIRy8Co8g&usqp=CAU'}
        />
        {message}
        <div>
            <span>Like </span>{likesCount}
        </div>
    </div>
}