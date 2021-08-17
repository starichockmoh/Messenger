import React from "react";
import {CloseOutlined} from "@ant-design/icons";
import {
    CallsIcon,
    ChannelIcon,
    CloseButton,
    ContactsIcon, CustomNavLink,
    GroupIcon,
    IconBlock,
    MenuAvatar,
    MenuBlock,
    MenuContent,
    MenuFooter,
    MenuHeader,
    MenuInfo,
    MenuItem,
    SettingsIcon
} from "./Menu.styled"
import {Button} from "antd";
import seva from "./../../Assets/photo_2017-11-03_18-44-32.jpg"
import {useDispatch} from "react-redux";
import {AppAC} from "../../Redux/Reducers/AppReducer";
import "../LeftSideBar/AnimationSideBar.css"
import {NavLink} from "react-router-dom";

export const Menu: React.FC = () => {
    return <MenuBlock>
        <CloseButton>
            <CustomNavLink to={'/'}>
                <Button type={"link"} danger icon={<CloseOutlined/>}/>
            </CustomNavLink>

        </CloseButton>
        <MenuHeader>
            <MenuAvatar src={seva}/>
            <MenuInfo>
                <div>
                    Сева Борисян
                </div>
                <div>
                    +7 989 564 45 25
                </div>
            </MenuInfo>
        </MenuHeader>
        <MenuContent>
            <MenuItem>
                <IconBlock>
                    <GroupIcon/>
                </IconBlock>
                <CustomNavLink to={'/settings'}>
                    New Group
                </CustomNavLink>
            </MenuItem>
            <MenuItem>
                <IconBlock>
                    <ChannelIcon/>
                </IconBlock>
                <CustomNavLink to={'/settings'}>
                    New Channel
                </CustomNavLink>
            </MenuItem>
            <MenuItem>
                <IconBlock>
                    <ContactsIcon/>
                </IconBlock>
                <CustomNavLink to={'/contacts'}>
                    Contacts
                </CustomNavLink>
            </MenuItem>
            <MenuItem>
                <IconBlock>
                    <CallsIcon/>
                </IconBlock>
                <CustomNavLink to={'/calls'}>
                    Calls
                </CustomNavLink>
            </MenuItem>
            <MenuItem>
                <IconBlock>
                    <SettingsIcon/>
                </IconBlock>
                <CustomNavLink to={'/settings'}>
                    Settings
                </CustomNavLink>

            </MenuItem>
        </MenuContent>
        <MenuFooter>
            <div>
                Telegram Desktop
            </div>
            <div>
                Version: 1331:dsc33
            </div>
        </MenuFooter>

    </MenuBlock>
}