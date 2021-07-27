import React, {useState} from "react";
import {
    ChannelAvatar,
    ListItem,
    LastData,
    LastMessage,
    MessagesCount,
    ChannelName,
    LastMessageData,
    Media
} from "./ChannelListItem.styled"
import {Avatar, Badge} from "antd";
import {NotificationOutlined} from "@ant-design/icons";
import { NavLink } from "react-router-dom";

type PropsType = {
    ChannelPhoto: string
    ChannelName: string
    LastMessageData: string
    LastMessage: {
        Media: string | null
        Text: string | null
    }
    MessagesCount: number
    IsChannel: boolean
}

export const ChannelListItem: React.FC<PropsType> = (props) => {
    return <NavLink to='#'>
        <ListItem>
            <ChannelAvatar src={props.ChannelPhoto}/>
            <ChannelName> {props.IsChannel && <NotificationOutlined/>} {props.ChannelName} </ChannelName>
            <LastData>
                <LastMessageData>
                    {props.LastMessageData}
                </LastMessageData>
            </LastData>
            <LastMessage>
                <Media>{props.LastMessage.Media && props.LastMessage.Media + ', '}</Media>
                {props.LastMessage.Text}
            </LastMessage>
            <MessagesCount>
                <Badge style={{backgroundColor: "#CDC5BF"}} showZero count={props.MessagesCount}/>
            </MessagesCount>
        </ListItem>
    </NavLink>

}