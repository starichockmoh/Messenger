import styled from "styled-components";
import {Button, Input} from "antd";
import {SearchStatusType} from "./ChannelInput";
import {MenuUnfoldOutlined} from "@ant-design/icons";

type PropsType = {
    SearchStatus: SearchStatusType
}

export const ChannelInputSearch = styled(Input)`
  background-color: ${(props: PropsType) => props.SearchStatus === 'Focus' ? 'white' : '#DCDCDC'};
  height: 28px;
`

export const SearchBlock = styled('div')`
  display: grid;
  grid-template-columns: 1fr 5.5fr;
  padding: 5px;
`
export const MenuButton = styled(Button)`
`
export const MenuButtonIcon = styled(MenuUnfoldOutlined)`
  color: gray
`