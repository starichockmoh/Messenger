import React, {useEffect, useState} from "react";
import {} from "./LeftSideBar.styled"
import {BrowserRouter, Route, Switch, useHistory} from "react-router-dom";
import {Menu} from "../Menu/Menu";
import {SettingsPage} from "../Settings/SettingsPage/SettingsPage";
import {CSSTransition} from "react-transition-group";
import "./AnimationSideBar.css"
import { Calls } from "../Calls/Calls";
import {Contacts} from "../Contacts/Contacts";
import {EditProfile} from "../EditProfile/EditProfile";

export const LeftSideBar: React.FC = () => {
    const history = useHistory()
    const path = history.location.pathname
    const [CurrentPage, SetCurrentPage] = useState('')
    useEffect(() => {
        let page = path.split('/')[1]
        SetCurrentPage(page)
    }, [path])
    return <>
        <CSSTransition unmountOnExit in={CurrentPage==="settings"} classNames={'sideBar'} timeout={300}>
            <SettingsPage/>
        </CSSTransition>
        <CSSTransition unmountOnExit in={CurrentPage==="menu"} classNames={'sideBar'} timeout={300}>
            <Menu/>
        </CSSTransition>
        <CSSTransition unmountOnExit in={CurrentPage==="calls"} classNames={'sideBar'} timeout={300}>
            <Calls/>
        </CSSTransition>
        <CSSTransition unmountOnExit in={CurrentPage==="contacts"} classNames={'sideBar'} timeout={300}>
            <Contacts/>
        </CSSTransition>
        <CSSTransition unmountOnExit in={CurrentPage==="edit_profile"} classNames={'sideBar'} timeout={300}>
            <EditProfile/>
        </CSSTransition>
    </>


}