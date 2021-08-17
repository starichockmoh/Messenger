import React from "react";
import consta from "./../../Assets/1337.jpg"
import {ChannelInfoBlock} from "./ChannelInfo.styled"
import {Description} from "./ChannelData/Description/Description";
import {ChannelOptions} from "./ChannelData/Options/ChannelOptions";
import {DialogOptions} from "./ChannelData/Options/DialigOptions";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/Store";
import {ChannelInfoAC, ChannelInfoPageType} from "../../Redux/Reducers/ChannelInfoReducer";
import {Button} from "antd";
import {ChannelData} from "./ChannelData/ChannelData";
import {ChannelImages} from "./ChannelAttachments/ChannelImages";


export const ChannelInfo: React.FC = () => {
    const CurrentPage = useSelector((state: AppStateType) => state.ChannelInfo.CurrentPage)
    const dispatch = useDispatch()
    const ChangePage = (page: ChannelInfoPageType) => {
        dispatch(ChannelInfoAC.SetPage(page))
    }
    if (CurrentPage === 'INFO') return <ChannelData ChangePage={ChangePage}/>
    return <ChannelImages ChangePage={ChangePage}/>


}
