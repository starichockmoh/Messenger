import styled from "styled-components";
import {EyeOutlined} from "@ant-design/icons";


export const ChannelPost = styled("div")`
  width: 30vw;
  background-color: white;
  max-height: 100vh;
  overflow: hidden;
  margin-left: 18px;
  margin-top: 6px;
  margin-bottom: 6px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
`

export const PostFooter = styled("div")`
    text-align: right;
  color: #CDC5BF;
`
export const ViewsIcon = styled(EyeOutlined)`
    font-size: 15px;
  color: gray;
`