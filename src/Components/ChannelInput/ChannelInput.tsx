import React, {useState} from "react";
import {ChannelInputSearch, MenuButton, MenuButtonIcon, SearchBlock} from "./ChannelInput.styled"
import {CustomNavLink} from "../Common/CommonElements.styled";


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