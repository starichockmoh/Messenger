import React, {useState} from "react";
import {Button, Input} from "antd";
import {ChannelInputSearch, MenuButton, MenuButtonIcon, SearchBlock} from "./ChannelInput.styled"
import {MenuUnfoldOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {AppAC} from "../../Redux/Reducers/AppReducer";

export type SearchStatusType = 'Focus' | null
export const ChannelInput:React.FC = () => {
    const dispatch = useDispatch()
    const AbleMenu = () => {
        dispatch(AppAC.SetMenu(true))
    }
    const [SearchStatus, SetSearchStatus] = useState<SearchStatusType>(null)
    return <SearchBlock>
        <MenuButton onClick={AbleMenu} icon={<MenuButtonIcon/>} type={'link'}/>
        <ChannelInputSearch allowClear={SearchStatus === 'Focus'} SearchStatus = {SearchStatus} placeholder={'Search'} onFocus ={() => SetSearchStatus('Focus')}
                             onBlur={() => SetSearchStatus(null)}/>
    </SearchBlock>
}