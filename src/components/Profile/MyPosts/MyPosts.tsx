import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

let posts = [
    {id: 1, message: 'React', likesCount: 5},
    {id: 2, message: 'Redux', likesCount: 6},
    {id: 3, message: 'HTML', likesCount: 12},
    {id: 4, message: 'CSS', likesCount: 2},
    {id: 5, message: 'Angular', likesCount: 14},
    {id: 6, message: 'JS', likesCount: 14},
]

export const MyPosts = () => {
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