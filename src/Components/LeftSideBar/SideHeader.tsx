import React from "react";
import {HeadersName, SettingsHeader, SettingsLink} from "./SideHeader.styled"
import {ArrowLeftOutlined} from "@ant-design/icons"
import { NavLink } from "react-router-dom";

export const SideHeader: React.FC<{header: string}> = ({header}) => {
    return <SettingsHeader>
            <SettingsLink to={'/'}>
                <ArrowLeftOutlined/> Menu
            </SettingsLink>
            <HeadersName> {header} </HeadersName>
        </SettingsHeader>

}