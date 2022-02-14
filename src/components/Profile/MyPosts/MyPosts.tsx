import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return <div>
        My posts
        <div>
           <input/>
            <button>Add post</button>
        </div>
        <Post message={'Hi!'} likesCount={5}/>
        <Post message={'Hello!'} likesCount={31}/>
    </div>
}