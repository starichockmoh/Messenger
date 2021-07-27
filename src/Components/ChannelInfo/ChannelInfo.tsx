import React from "react";
import consta from "./../../Assets/1337.jpg"
import {
    AddInfoBlock, AudioIcon, ChannelInfoBlock,
    FilesIcon,
    IconBlock, ImageIcon,
    InfoTitle,
    InfoTitleAddInfo,
    InfoTitleAvatar,
    InfoTitleAvatarBlock,
    InfoTitleName, LinksIcon, MediaBlock, MediaContent, SpecialLine, VideoIcon, VoiceIcon
} from "./ChannelInfo.styled"
import {Description} from "./Description/Description";
import {ChannelOptions} from "./Options/ChannelOptions";
import {DialogOptions} from "./Options/DialigOptions";


export const ChannelInfo: React.FC = () => {
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
                    <div>
                        5678 photos
                    </div>
                </MediaContent>
                <MediaContent>
                    <IconBlock>
                        <VideoIcon/>
                    </IconBlock>
                    <div>
                        300 videos
                    </div>
                </MediaContent>
                <MediaContent>
                    <IconBlock>
                        <FilesIcon/>
                    </IconBlock>
                    <div>
                        5 files
                    </div>
                </MediaContent>
                <MediaContent>
                    <IconBlock>
                        <AudioIcon/>
                    </IconBlock>
                    <div>
                        20 audio files
                    </div>
                </MediaContent>
                <MediaContent>
                    <IconBlock>
                        <LinksIcon/>
                    </IconBlock>
                    <div>
                        600 shared links
                    </div>
                </MediaContent>
                <MediaContent>
                    <IconBlock>
                        <VoiceIcon/>
                    </IconBlock>
                    <div>
                        3 voice messages
                    </div>
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
