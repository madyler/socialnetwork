import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return <div>
        My posts
        <div>
           <input/>
            <button>Add post</button>
        </div>
        <Post/>
        <Post/>
        <Post/>
    </div>
}