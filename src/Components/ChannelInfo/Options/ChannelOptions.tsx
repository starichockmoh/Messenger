import React from "react";
import {IconBlock, OptionContent, OptionsBlock, OptionsIcon} from "./Options.styled"
import {Button} from "antd";


export const ChannelOptions: React.FC = () => {
    return <OptionsBlock>
        <OptionContent>
            <IconBlock>
                <OptionsIcon/>
            </IconBlock>
            <div>
                Leave channel
            </div>
        </OptionContent>
        <OptionContent>
            <br/>
            <div style={{color: 'red'}}>
                Report
            </div>
        </OptionContent>
    </OptionsBlock>
}

