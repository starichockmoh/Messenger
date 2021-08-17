import React from "react";
import {
    AddInfoBlock, AudioIcon, FilesIcon, IconBlock, ImageIcon,
    InfoTitle,
    InfoTitleAddInfo,
    InfoTitleAvatar,
    InfoTitleAvatarBlock,
    InfoTitleName, LinksIcon, MediaBlock, MediaContent, MediaContentLink, VideoIcon, VoiceIcon
} from "./ChannelData.styled";
import consta from "../../../Assets/1337.jpg";
import {Description} from "./Description/Description";
import {ChannelOptions} from "./Options/ChannelOptions";
import {ChannelInfoAC, ChannelInfoPageType} from "../../../Redux/Reducers/ChannelInfoReducer";
import { ChannelInfoBlock } from "../ChannelInfo.styled";
import { SpecialLine } from "../../Common/CommonElements.styled";

type PropsType = {
    ChangePage: (page: ChannelInfoPageType) => void

}

export const ChannelData:React.FC<PropsType> = ({ChangePage}) => {
    let text = 'Канал патриархальных констерваторов\n' +
        '\n' +
        'По всем вопросам:\n' +
        '@shatatel_skrep\n' +
        '(@SvaroGG_WP, @dedrov2000, @ovent18, \n' +
        '@eduardnefascist)\n' +
        '\n' +
        'Рекламный менеджер: \n' +
        '@robertzzapusk\n' +
        '\n' +
        'Чат - t.me/joinchat/VenLIrtIhfrioKBN'

    return <ChannelInfoBlock>
            <InfoTitle>
                <InfoTitleAvatarBlock>
                    <InfoTitleAvatar src={consta}/>
                </InfoTitleAvatarBlock>
                <AddInfoBlock>
                    <InfoTitleName>
                        1337 const
                    </InfoTitleName>
                    <InfoTitleAddInfo>
                        24 000 subscribers
                    </InfoTitleAddInfo>
                </AddInfoBlock>
            </InfoTitle>
            <SpecialLine/>
            <div>
                <Description isChannel={true} ChannelInfo={{Description: text, Link: 't.me/tg13337const'}}/>
                {/*<Description isChannel={false} UserInfo={{UserName: '@ilisseo', Bio: 'yoy', Mobile: '+7-919-78-21-90'}}/>*/}
            </div>
            <SpecialLine/>
            <div>
                <MediaBlock>
                    <MediaContent>
                        <IconBlock>
                            <ImageIcon/>
                        </IconBlock>
                        <MediaContentLink onClick={() => ChangePage("IMAGES")}>
                            5678 photos
                        </MediaContentLink>
                    </MediaContent>
                    <MediaContent>
                        <IconBlock>
                            <VideoIcon/>
                        </IconBlock>
                        <MediaContentLink>
                            300 videos
                        </MediaContentLink>
                    </MediaContent>
                    <MediaContent>
                        <IconBlock>
                            <FilesIcon/>
                        </IconBlock>
                        <MediaContentLink>
                            5 files
                        </MediaContentLink>
                    </MediaContent>
                    <MediaContent>
                        <IconBlock>
                            <AudioIcon/>
                        </IconBlock>
                        <MediaContentLink>
                            20 audio files
                        </MediaContentLink>
                    </MediaContent>
                    <MediaContent>
                        <IconBlock>
                            <LinksIcon/>
                        </IconBlock>
                        <MediaContentLink>
                            600 shared links
                        </MediaContentLink>
                    </MediaContent>
                    <MediaContent>
                        <IconBlock>
                            <VoiceIcon/>
                        </IconBlock>
                        <MediaContentLink>
                            3 voice messages
                        </MediaContentLink>
                    </MediaContent>
                </MediaBlock>
            </div>
            <SpecialLine/>
            <div>
                <ChannelOptions/>
                {/*<DialogOptions/>*/}
            </div>
        </ChannelInfoBlock>
}