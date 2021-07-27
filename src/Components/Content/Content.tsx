import React from "react";
import {ContentWrapper} from "./Content.styled"
import {Post} from "./ContentItem/Post/Post";


export const ContentBlock: React.FC = () => {
    return <ContentWrapper>
        <Post/>
        <Post/>
    </ContentWrapper>
}