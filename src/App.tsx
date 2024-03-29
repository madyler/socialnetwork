import React from 'react';
import {Route, Routes} from "react-router-dom"
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {StateType} from "./redux/state";

type PropsType = {
    state: StateType
}

export const App: React.FC<PropsType> = ({state}) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile'} element={<Profile posts={state.posts}/>}/>
                    <Route path={'/dialogs/*'} element={
                        <Dialogs dialogs={state.dialogs}
                                 messages={state.messages}/>}
                    />
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>
        </div>

    )
}
