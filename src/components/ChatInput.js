import React, {  useState } from 'react'
import styled from "styled-components"
import { Button } from "@material-ui/core"
import firebase from "firebase"
import { db } from '../firebase'

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState('')

    // send message func
    const sendMessage = (e) => {
        e.preventDefault()

        if (!channelId) {
            return false
        }

        // pushing msg to db
        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            userName:"Ali Jawwad",
            userImage:"https://www.kindpng.com/picc/m/192-1924261_virat-kohli-hd-transparent-image-free-download-searchpng.png"
        })
        setInput('')
    }

    return (
        <ChatInputContainer>
            <form>
                <input value={input}
                    placeholder={`Message ${channelName}`}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius:20px;

    > form {
        position: relative;
        display:flex;
        justify-content:center;
    }
    > form > input {
        position: fixed;
        bottom:30px;
        width:60%;
        border:1px solid gray;
        border-radius:3px;
        padding:20px;
        outline:none;
    }
    > form > button {
        display:none !important;
    }
`