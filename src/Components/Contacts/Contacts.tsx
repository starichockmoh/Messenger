import React, {ChangeEvent, useState} from "react";
import {ContactsBlock, SearchBlock, SearchIcon} from "./Contacts.styled"
import {SideHeader} from "../LeftSideBar/SideHeader";
import TextArea from "antd/es/input/TextArea";
import {SpecialLine} from "../ChannelInfo/ChannelInfo.styled";
import {LineHr} from "../ChannelInfo/Description/Description.styled";
import {SearchOutlined} from "@ant-design/icons";


export const Contacts: React.FC = () => {
    const [InputValue, SetInputValue] = useState('')
    const onInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        SetInputValue(e.target.value)
    }
    return <ContactsBlock>
        <SideHeader header={'Contacts'}/>
        <SearchBlock>
            <SearchIcon/>
            <TextArea onChange={onInputChange} value={InputValue} bordered={false} autoSize={{maxRows: 1}}
                      placeholder={'Search'}/>
        </SearchBlock>
        <LineHr/>
        {/*<Contacts>*/}
        {/*    вавава*/}
        {/*</Contacts>*/}
    </ContactsBlock>
}