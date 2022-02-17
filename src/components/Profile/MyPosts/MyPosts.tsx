import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'
import {PostType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostType>
}

export const MyPosts: React.FC<PropsType> = ({posts}) => {
    return <div className={s.myPosts}>
        My posts
        <div>
           <input/>
            <button>Add post</button>
        </div>
        {posts.map(p=>
            <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
        )}
    </div>
}