import React from 'react'
import styled from "styled-components"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from "@material-ui/icons/Create"
import SideBarOptions from "./SideBarOptions"
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import AppsIcon from "@material-ui/icons/Apps"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import { db } from '../firebase'
import { useCollection } from "react-firebase-hooks/firestore"

function SideBar() {
    const [channels] = useCollection(db.collection("rooms"))

    return (
        <>
            <SideBarContainer>
                <SideBarHeader>
                    <SideBarInfo>
                        <h2>Slack Clone</h2>
                        <h3>
                            <FiberManualRecordIcon />
                            Ali Jawwad
                        </h3>
                    </SideBarInfo>
                    <CreateIcon />
                </SideBarHeader>

                <SideBarOptions Icon={InsertCommentIcon} title="Threads" />
                <SideBarOptions Icon={InboxIcon} title="Mentions & Threads" />
                <SideBarOptions Icon={DraftsIcon} title="Saved Items" />
                <SideBarOptions Icon={BookmarkBorderIcon} title="Channel Browser" />
                <SideBarOptions Icon={PeopleAltIcon} title="People & user groups" />
                <SideBarOptions Icon={AppsIcon} title="Apps" />
                <SideBarOptions Icon={FileCopyIcon} title="File Browser" />
                <SideBarOptions Icon={ExpandLessIcon} title="Show less" />

                <hr />
                <SideBarOptions Icon={ExpandMoreIcon} title="Channels" />
                <hr />
                <SideBarOptions Icon={AddIcon} addChannelOption title="Add Channel" />
                {
                    channels?.docs.map(doc => (
                        <SideBarOptions
                            key={doc.id}
                            id={doc.id}
                            title={doc.data().name}
                        />
                    ))
                }
            </SideBarContainer>

        </>
    )
}

export default SideBar

const SideBarContainer = styled.div`
    background-color:var(--slack-color);
    color:white;
    height: 100vh;
    flex:0.3;
    border-top:1px solid #49274b;
    max-width:260px;
    margin-top:60px;

    > hr{
        margin-top:10px;
        margin-bottom:10px;
        border:1px solid #49274b;
    }
`
const SideBarHeader = styled.div`
    display: flex;
    border-bottom:1px solid #49274b;
    padding:13px;
    margin-top:60px;

    > .MuiSvgIcon-root {
        padding:8px;
        color:#49274b;
        font-size:18px;
        background-color:white;
        border-radius:999px;
    }
`

const SideBarInfo = styled.div`
    flex:1;
    > h2{
        font-size:15px;
        font-weight:900;
        margin-bottom:5px;
    }
    > h3{
        display: flex;
        font-size:13px;
        font-weight:400;
        align-items:center;
    }
    > h3 > .MuiSvgIcon-root{
        font-size:14px;
        margin-top:1px;
        margin-right:2px;
        color:green;
    }
`