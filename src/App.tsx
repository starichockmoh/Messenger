import React, {StrictMode, useState} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import store, {AppStateType} from "./Redux/Store";
import {BrowserRouter, withRouter} from "react-router-dom";
import {Layout} from "./Components/Layout/Layout";
import {Menu} from "./Components/Menu/Menu";
import {SettingsPage} from "./Components/Settings/SettingsPage/SettingsPage"
import {CSSTransition} from "react-transition-group";
import "./Components/LeftSideBar/AnimationSideBar.css"
import {LeftSideBar} from "./Components/LeftSideBar/LeftSideBar";
import {Exit} from "./Components/Exit/Exit";
import {LoginPage} from "./Components/Login/LoginPage";


const App = () => {
    const [isAuth, SetAuth] = useState(true)
    if (isAuth) return <>
        <LeftSideBar/>
        <Layout/>
    </>
    else return <LoginPage/>
}
const AppRouter = withRouter(App)
const AppContainer = () => {
    return <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </Provider>
    </StrictMode>
}
export default AppContainer