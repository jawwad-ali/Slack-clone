import React from 'react'
import styled from "styled-components"

function Message({ userName, userImage, timestamp, message }) {
    console.log(message)
    return (
        <div>
            <MessageContainer>
                <img src={userImage} alt="useriamge" />
                <MessageInfo>
                    <h4>
                        {userName} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                    </h4>
                    <p>{message}</p>
                </MessageInfo>
            </MessageContainer>
        </div>
    )
}

export default Message
const MessageContainer = styled.div`
    display:flex;
    align-items:center;
    padding:20px;
    
    > img{
        height:50px;
        border-radius:8px;
    }
`
const MessageInfo = styled.div`
    padding-left:10px;
    > h4 > span {
        color:gray;
        font-weight:300;
        margin-left:4px;
        font-size:10px;
    }
`
