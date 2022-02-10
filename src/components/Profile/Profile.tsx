import React from "react";
import s from './Profile.module.css'

export const Profile = () => {
    return <div className={s.content}>
        <div>
            <img alt={''} src={'https://smapse.ru/storage/2018/03/academy-img-1.jpg'}/>
        </div>
        <div>
            Avatar + Description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.item}>
                post 1
            </div>
            <div className={s.item}>
                post 2
            </div>
        </div>
    </div>
}