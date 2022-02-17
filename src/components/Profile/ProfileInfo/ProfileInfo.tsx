import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return <div>
        <div className={s.img}>
            <img
                alt={''}
                 src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaZcaJXNKyH5ztE1iXMzemFBJw84Qfi_3ZUg&usqp=CAU'}/>
        </div>
        <div className={s.description}>
            Avatar + Description
        </div>
    </div>
}

