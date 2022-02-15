import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return <div>
        <div>
            <img alt={''} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9friRKd1PmIlBg95rJAdsHZYTbGZ7zb0Iw&usqp=CAU'}/>
        </div>
        <div className={s.description}>
            Avatar + Description
        </div>
    </div>
}

