import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type PropsType = {
    posts: PostType[]
}

export const Profile: React.FC<PropsType> = ({posts}) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={posts}/>
    </div>
}

