import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import React from 'react'
import styled from "styled-components"
import ChatInput from './ChatInput'
import { useSelector } from "react-redux"
import { selectRoomId } from '../features/appSlice'
import { useCollection } from "react-firebase-hooks/firestore"
import { useDocument } from "react-firebase-hooks/firestore"
import { db } from '../firebase'
import Message from "./Message"

function Chat() {
    const roomId = useSelector(selectRoomId)

    //roomID 
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    // getting the messages by asceding order from db
    const [roomMessages] = useCollection(
        roomId &&
        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
    )

    return (
        <ChatContainer>
            <>
                <Header>
                    <HeaderLeft>
                        <h4>#{roomDetails?.data().name}</h4>
                        <StarBorderOutlined />
                    </HeaderLeft>

                    <HeaderRight>
                        <p>
                            <InfoOutlined /> Details
                        </p>
                    </HeaderRight>

                </Header>

                <ChatMessages>
                    {
                        roomMessages?.docs.map((doc) => {
                            const { userName, userImage, timestamp, message } = doc.data()
                            return (
                                <Message
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    userName={userName}
                                    userImage={userImage}
                                />
                            )
                        })
                    }
                </ChatMessages>
                <ChatInput
                    channelId={roomId}
                    channelName={roomDetails?.data().name}
                />

            </>
        </ChatContainer>
    )
}

export default Chat

const Header = styled.div`
    display:flex;
    justify-content:space-between;
    padding:20px;
    border-bottom:1px solid lightgray;
`;
const ChatContainer = styled.div`
    flex:0.7;
    flex-grow:1;
    overflow-y:scroll;
    margin-top:60px;
`;

const HeaderLeft = styled.div`
    display:flex;
    align-items:center;

    > h4{
        display:flex;
        text-transform:lowercase;
        margin-right:12px;
    }

    > h4 > .MuiSvgIcon-root{
        margin-left:10px;
        font-size:18px;
    }
`;
const HeaderRight = styled.div`
    > p {
        display:flex;
        align-items:center;
        font-size:14px;
    }
    > p > .MuiSvgIcon-root{
        margin-right:5px !important;
        font-size:16px;
    }
`

const ChatMessages = styled.div``