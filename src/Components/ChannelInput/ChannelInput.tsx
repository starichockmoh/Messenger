import React, {useState} from "react";
import {Button, Input} from "antd";
import {ChannelInputSearch, MenuButton, MenuButtonIcon, SearchBlock} from "./ChannelInput.styled"
import {MenuUnfoldOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {AppAC} from "../../Redux/Reducers/AppReducer";
import { CustomNavLink } from "../Menu/Menu.styled";

export type SearchStatusType = 'Focus' | null
export const ChannelInput:React.FC = () => {
    const [SearchStatus, SetSearchStatus] = useState<SearchStatusType>(null)
    return <SearchBlock>
        <CustomNavLink to={'/menu'}>
            <MenuButton icon={<MenuButtonIcon/>} type={'link'}/>
        </CustomNavLink>
        <ChannelInputSearch allowClear={SearchStatus === 'Focus'} SearchStatus = {SearchStatus}
                            placeholder={'Search'} onFocus ={() => SetSearchStatus('Focus')}
                             onBlur={() => SetSearchStatus(null)}/>
    </SearchBlock>
}