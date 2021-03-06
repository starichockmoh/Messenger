import React, {ChangeEvent, useState} from "react";
import {
    AudioIcon,
    DialogInputBlock,
    DialogInputButton,
    DialogTextArea,
    PaperClipIcon, SendIcon,
    SmileIcon
} from "./Dialoginput.styled"
import {ActivateDialogsSaga} from "../../../Redux/Sagas/DialogsSaga";
import {useDispatch} from "react-redux";



export const DialogInput: React.FC<{DialogID: number}> = ({DialogID}) => {
    const dispatch = useDispatch()

    const [InputValue, SetInputValue] = useState('')
    const onInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        SetInputValue(e.target.value)
    }
    const SendMessage = () => {
        dispatch(ActivateDialogsSaga.SendMessage(DialogID, InputValue))
        SetInputValue('')
    }


    return <DialogInputBlock>
        <DialogInputButton type={"link"} icon = {<PaperClipIcon/>}/>
        <DialogTextArea onChange={onInputChange}
                        value={InputValue} bordered={false}
                        autoSize={{maxRows: 1}}
                        placeholder={'Write a message...'}/>
        <DialogInputButton type={"link"} icon = {<SmileIcon/>}/>
        {InputValue
            ? <DialogInputButton onClick={SendMessage} type={"link"} icon = {<SendIcon/>}/>
            : <DialogInputButton type={"link"} icon = {<AudioIcon/>}/>}
    </DialogInputBlock>
}
