import React from "react";
import {
    AdInfo_Name, AdInfo_Online, AdvancedIcon,
    Avatar_UserAvatar, ChatIcon, EditIcon, FAQIcon, FoldersIcon, NotificationsIcon, SecurityIcon,
    Settings, SettingsItem,
    UserBlock,
    UserBlock_AdInfo,
    UserBlock_Avatar
} from "./SettingsPage.styled"
import seva from "./../../../Assets/photo_2017-11-03_18-44-32.jpg"
import {SideHeader} from "../../LeftSideBar/SideHeader";
import {Upload} from "antd";
import { CustomNavLink } from "../../Menu/Menu.styled";
import { SpecialLine } from "../../Common/CommonElements.styled";

export const SettingsPage: React.FC = () => {
    return <Settings>
        <SideHeader header={'Settings'}/>
        <UserBlock>
            <UserBlock_Avatar>
                <Avatar_UserAvatar src={seva}/>
            </UserBlock_Avatar>
            <UserBlock_AdInfo>
                <AdInfo_Name>
                    Сева Борисян
                </AdInfo_Name>
                <AdInfo_Online>
                    online
                </AdInfo_Online>
            </UserBlock_AdInfo>
        </UserBlock>
        <SpecialLine/>
        <div>
            <SettingsItem>
                <EditIcon/>
                <CustomNavLink to={'/edit_profile'}>
                    Edit profile
                </CustomNavLink>
            </SettingsItem>
            <SettingsItem>
                <NotificationsIcon/>
                <div>
                    Notifications
                </div>
            </SettingsItem>
            <SettingsItem>
                <SecurityIcon/>
                <div>
                    Security
                </div>
            </SettingsItem>
            <SettingsItem>
                <ChatIcon/>
                <div>
                    Chats
                </div>
            </SettingsItem>
            <SettingsItem>
                <FoldersIcon/>
                <div>
                    Folders
                </div>
            </SettingsItem>
            <SettingsItem>
                <AdvancedIcon/>
                <div>
                    Advanced
                </div>
            </SettingsItem>
        </div>
        <SpecialLine/>
        <div>
            <SettingsItem>
                <FAQIcon/>
                <div>
                    FAQ
                </div>
            </SettingsItem>
            <SettingsItem>
                <div/>
                <div style={{color: "#08c"}}>
                    Ask a Question
                </div>
            </SettingsItem>
        </div>
    </Settings>
}