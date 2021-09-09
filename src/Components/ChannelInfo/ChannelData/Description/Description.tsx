import React from "react";
import {
    ChannelLink,
    Chapter,
    DescIcon,
    DescIconBlock,
    DescriptionBlock, DescriptionContent,
    DescriptionContentBlock, NotificationBlock, NotificationIcon, NotificationIconBlock
} from "./Description.styled"
import {ExclamationCircleOutlined} from "@ant-design/icons";
import { Switch } from "antd";
import { LineHr } from "../../../Common/CommonElements.styled";

type PropsType = {
    isChannel: boolean
    UserInfo?: {
        Mobile: string
        Bio: string
        UserName: string
    }
    ChannelInfo?: {
        Link: string
        Description: string
    }
}

export const Description: React.FC<PropsType> = ({isChannel, ChannelInfo, UserInfo}) => {
    return <DescriptionBlock>
        <DescIconBlock>
            <DescIcon/>
        </DescIconBlock>
        <DescriptionContentBlock>
            {ChannelInfo? <Channel ChannelInfo={ChannelInfo}/>: UserInfo? <User UserInfo={UserInfo}/> : null}
            <LineHr/>
        </DescriptionContentBlock>
        <NotificationIconBlock>
            <NotificationIcon/>
        </NotificationIconBlock>
        <NotificationBlock>
                Notifications
                <Switch size="small"/>
        </NotificationBlock>

    </DescriptionBlock>
}


type ChannelPropsType = {
    ChannelInfo: {
        Link: string
        Description: string
    }
}
const Channel: React.FC<ChannelPropsType> = ({ChannelInfo}) => {
    return <>
        <ChannelLink>
            {ChannelInfo.Link}
        </ChannelLink>
        <Chapter>
            Link
        </Chapter>
        <DescriptionContent>
            {ChannelInfo.Description}
        </DescriptionContent>
        <Chapter>
            Description
        </Chapter>
    </>
}

type UserPropsType = {
    UserInfo: {
        Mobile: string
        Bio: string
        UserName: string
    }
}
const User: React.FC<UserPropsType> = ({UserInfo}) => {
    return <>
        <DescriptionContent>
            {UserInfo.Mobile}
        </DescriptionContent>
        <Chapter>
            Mobile
        </Chapter>
        <DescriptionContent>
            {UserInfo.Bio}
        </DescriptionContent>
        <Chapter>
            Bio
        </Chapter>
        <DescriptionContent>
            {UserInfo.UserName}
        </DescriptionContent>
        <Chapter>
            Username
        </Chapter>
    </>
}