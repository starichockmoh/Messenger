import React, {ChangeEvent, useState} from "react";
import {
    AddContactBlock, AddContactButton,
    Contact,
    ContactAvatar,
    ContactsBlock,
    ContactsList,
    ContactsUserName, LastData,
    SearchBlock,
    SearchIcon
} from "./Contacts.styled"
import {SideHeader} from "../LeftSideBar/SideHeader";
import TextArea from "antd/es/input/TextArea";
import photo from "./../../Assets/photo_2017-11-03_18-44-32.jpg"
import photo1 from "./../../Assets/amds.jpg"
import photo2 from "./../../Assets/maska.jpg"
import photo3 from "./../../Assets/putin.jpeg"
import photo4 from "./../../Assets/krest.jpg"

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
        <ContactsList>
            <Contact>
                <ContactAvatar src={photo}/>
                <div>
                    <ContactsUserName>
                        Vladislav
                    </ContactsUserName>
                    <LastData>
                        last seen 7 hours ago
                    </LastData>
                </div>

            </Contact>
            <Contact>
                <ContactAvatar src={photo1}/>
                <div>
                    <ContactsUserName>
                        Kalim
                    </ContactsUserName>
                    <LastData>
                        last seen 21.09.12
                    </LastData>
                </div>

            </Contact>
            <Contact>
                <ContactAvatar src={photo2}/>
                <div>
                    <ContactsUserName>
                        Kissa
                    </ContactsUserName>
                    <LastData>
                        last seen 3 hours ago
                    </LastData>
                </div>

            </Contact>
            <Contact>
                <ContactAvatar src={photo3}/>
                <div>
                    <ContactsUserName>
                        Vasik
                    </ContactsUserName>
                    <LastData>
                        online
                    </LastData>
                </div>
            </Contact>
            <Contact>
                <ContactAvatar src={photo4}/>
                <div>
                    <ContactsUserName>
                        Юран
                    </ContactsUserName>
                    <LastData>
                        last seen recently
                    </LastData>
                </div>
            </Contact>
            <Contact>
                <ContactAvatar src={photo1}/>
                <div>
                    <ContactsUserName>
                        Kalim
                    </ContactsUserName>
                    <LastData>
                        last seen 21.09.12
                    </LastData>
                </div>

            </Contact>
            <Contact>
                <ContactAvatar src={photo2}/>
                <div>
                    <ContactsUserName>
                        Kissa
                    </ContactsUserName>
                    <LastData>
                        last seen 3 hours ago
                    </LastData>
                </div>

            </Contact>
            <Contact>
                <ContactAvatar src={photo3}/>
                <div>
                    <ContactsUserName>
                        Vasik
                    </ContactsUserName>
                    <LastData>
                        online
                    </LastData>
                </div>
            </Contact>
            <Contact>
                <ContactAvatar src={photo4}/>
                <div>
                    <ContactsUserName>
                        Юран
                    </ContactsUserName>
                    <LastData>
                        last seen recently
                    </LastData>
                </div>
            </Contact>
            <Contact>
                <ContactAvatar src={photo1}/>
                <div>
                    <ContactsUserName>
                        Kalim
                    </ContactsUserName>
                    <LastData>
                        last seen 21.09.12
                    </LastData>
                </div>

            </Contact>
            <Contact>
                <ContactAvatar src={photo2}/>
                <div>
                    <ContactsUserName>
                        Kissa
                    </ContactsUserName>
                    <LastData>
                        last seen 3 hours ago
                    </LastData>
                </div>

            </Contact>
            <Contact>
                <ContactAvatar src={photo3}/>
                <div>
                    <ContactsUserName>
                        Vasik
                    </ContactsUserName>
                    <LastData>
                        online
                    </LastData>
                </div>
            </Contact>
            <Contact>
                <ContactAvatar src={photo4}/>
                <div>
                    <ContactsUserName>
                        Юран
                    </ContactsUserName>
                    <LastData>
                        last seen recently
                    </LastData>
                </div>
            </Contact>
        </ContactsList>
        <AddContactBlock>
            <AddContactButton type={"link"}>
                ADD CONTACT
            </AddContactButton>

        </AddContactBlock>
    </ContactsBlock>
}