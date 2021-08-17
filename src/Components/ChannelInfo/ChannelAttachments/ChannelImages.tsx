import React from "react";
import {} from "./ChannelImages.styled"
import {Button} from "antd";
import {ChannelInfoBlock} from "../ChannelInfo.styled";
import {ChannelInfoPageType} from "../../../Redux/Reducers/ChannelInfoReducer";

type PropsType = {
    ChangePage: (page: ChannelInfoPageType) => void
}

export const ChannelImages: React.FC<PropsType> = ({ChangePage}) => {
    return <ChannelInfoBlock>

        <div style={{backgroundColor: 'blue'}}>
            <Button onClick={() => ChangePage("INFO")}>Back</Button>
            Images
        </div>
    </ChannelInfoBlock>
}