import styled from "styled-components";
import {SearchOutlined} from "@ant-design/icons";
import {Avatar} from "antd";


export const ContactsBlock = styled("div")`
  position: absolute;
  z-index: 10;
  width: 20vw;
  height: 100vh;
  background-color: white;
`
export const SearchBlock = styled("div")`
  display: grid;
  grid-template-columns: 1fr 8fr;
  position: sticky;
  height: 5vh;
  top: 0;
  z-index: 3;
`

export const Contacts = styled("div")`
  height: 82vh;
  overflow-y: scroll;
`

export const Contact = styled("div")`
  display: grid;
  grid-template-columns: 1fr 5fr;
  margin-top: 3%;
  margin-bottom: 3%;
  margin-left: 5%;
`
export const ContactAvatar = styled(Avatar)`
  width: 4px;
  height: 40px;
`
//icons
export const SearchIcon = styled(SearchOutlined)`
  font-size: 20px;
  color: gray;
  margin-top: 15%;
`
