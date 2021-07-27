import React from "react";
import {CallAvatar, CallData, CallsBlock, CallsItem, CallUserName, PhoneIcon, VideoIcon} from "./Calls.styled"
import {Avatar} from "antd";
import photo from "./../../Assets/photo_2017-11-03_18-44-32.jpg"
import photo1 from "./../../Assets/amds.jpg"
import photo2 from "./../../Assets/maska.jpg"
import photo3 from "./../../Assets/putin.jpeg"
import photo4 from "./../../Assets/krest.jpg"
import {SideHeader} from "../LeftSideBar/SideHeader";

export const Calls: React.FC = () => {
    return <CallsBlock>
        <SideHeader header={'Calls'}/>
        <CallsItem>
            <CallAvatar src={photo}/>
            <div>
                <CallUserName>
                    SevaBor
                </CallUserName>
                <CallData>
                    june 1 at 10:56
                </CallData>
            </div>
            <PhoneIcon/>
        </CallsItem>
        <CallsItem>
            <CallAvatar src={photo1}/>
            <div>
                <CallUserName>
                    Catik
                </CallUserName>
                <CallData>
                    april at 14:22
                </CallData>
            </div>
            <VideoIcon/>
        </CallsItem>
        <CallsItem>
            <CallAvatar src={photo}/>
            <div>
                <CallUserName>
                    SevaBor
                </CallUserName>
                <CallData>
                    april 1 at 10:00
                </CallData>
            </div>
            <PhoneIcon/>
        </CallsItem>
        <CallsItem>
            <CallAvatar src={photo2}/>
            <div>
                <CallUserName>
                    SevaBor
                </CallUserName>
                <CallData>
                    june 1 at 10:56
                </CallData>
            </div>
            <PhoneIcon/>
        </CallsItem>
        <CallsItem>
            <CallAvatar src={photo3}/>
            <div>
                <CallUserName>
                    Catik
                </CallUserName>
                <CallData>
                    april at 14:22
                </CallData>
            </div>
            <VideoIcon/>
        </CallsItem>
        <CallsItem>
            <CallAvatar src={photo}/>
            <div>
                <CallUserName>
                    SevaBor
                </CallUserName>
                <CallData>
                    april 1 at 10:00
                </CallData>
            </div>
            <PhoneIcon/>
        </CallsItem>
        <CallsItem>
            <CallAvatar src={photo}/>
            <div>
                <CallUserName>
                    SevaBor
                </CallUserName>
                <CallData>
                    june 1 at 10:56
                </CallData>
            </div>
            <PhoneIcon/>
        </CallsItem>
        <CallsItem>
            <CallAvatar src={photo1}/>
            <div>
                <CallUserName>
                    Catik
                </CallUserName>
                <CallData>
                    april at 14:22
                </CallData>
            </div>
            <VideoIcon/>
        </CallsItem>
        <CallsItem>
            <CallAvatar src={photo4}/>
            <div>
                <CallUserName>
                   Isus
                </CallUserName>
                <CallData>
                    april 1 at 10:00
                </CallData>
            </div>
            <VideoIcon/>
        </CallsItem>
        <CallsItem>
            <CallAvatar src={photo}/>
            <div>
                <CallUserName>
                    Artem
                </CallUserName>
                <CallData>
                    june 1 at 10:56
                </CallData>
            </div>
            <PhoneIcon/>
        </CallsItem>
        <CallsItem>
            <CallAvatar src={photo2}/>
            <div>
                <CallUserName>
                    Mahmud
                </CallUserName>
                <CallData>
                    april at 14:22
                </CallData>
            </div>
            <VideoIcon/>
        </CallsItem>
        <CallsItem>
            <CallAvatar src={photo}/>
            <div>
                <CallUserName>
                    Karim
                </CallUserName>
                <CallData>
                    april 1 at 10:00
                </CallData>
            </div>
            <PhoneIcon/>
        </CallsItem>
    </CallsBlock>
}