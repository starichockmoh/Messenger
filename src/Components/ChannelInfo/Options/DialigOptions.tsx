import React from "react";
import {IconBlock, OptionContent, OptionsBlock, OptionsIcon} from "./Options.styled"


export const DialogOptions: React.FC = () => {
    return <OptionsBlock>
        <OptionContent>
            <IconBlock>
                <OptionsIcon/>
            </IconBlock>
            <div>
                Share with contact
            </div>
        </OptionContent>
        <OptionContent>
            <br/>
            <div>
                Edit contact
            </div>
        </OptionContent>
        <OptionContent>
            <br/>
            <div>
                Delete contact
            </div>
        </OptionContent>
        <OptionContent>
            <br/>
            <div>
                Clear history
            </div>
        </OptionContent>
        <OptionContent>
            <br/>
            <div>
                Delete chat
            </div>
        </OptionContent>
        <OptionContent>
            <br/>
            <div style={{color: 'red', marginTop: 10}}>
                Block User
            </div>
        </OptionContent>
    </OptionsBlock>
}