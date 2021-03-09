import React from 'react'
import styled from "styled-components"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from "@material-ui/icons/Create"

function SideBar() {
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
            </SideBarContainer>
        </>
    )
}

export default SideBar

const SideBarContainer = styled.div`
    background-color:var(--slack-color);
    color:white;
    flex:0.3;
    height:100vh;
    border-top:1px solid #49274b;
    max-width:260px;
    margin-top:60px;
`
const SideBarHeader = styled.div`
    display: flex;
    border-bottom:1px solid #49274b;
    padding:13px;

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
`