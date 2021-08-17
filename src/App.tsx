import React, {StrictMode} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import store, {AppStateType} from "./Redux/Store";
import {BrowserRouter, withRouter} from "react-router-dom";
import {Layout} from "./Components/Layout/Layout";
import {Menu} from "./Components/Menu/Menu";
import {SettingsPage} from "./Components/Settings/SettingsPage/SettingsPage"
import {CSSTransition} from "react-transition-group";
import "./Components/LeftSideBar/AnimationSideBar.css"
import {LeftSideBar} from "./Components/LeftSideBar/LeftSideBar";


const App = () => {
    return <>
        <LeftSideBar/>
        <Layout/>
    </>
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