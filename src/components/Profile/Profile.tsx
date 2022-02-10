import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return <div className={s.content}>
        <div>
            <img alt={''} src={'https://smapse.ru/storage/2018/03/academy-img-1.jpg'}/>
        </div>
        <div>
            Avatar + Description
        </div>
       <MyPosts/>
    </div>
}

