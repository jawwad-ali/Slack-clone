import React from 'react'
import styled from "styled-components"

function SideBarOptions({ Icon, title, addChannelOption }) {

    const addChannel = () => { }

    const selectChannel = () => { }

    return (
        <div>
            <SideBarOptionsContainer
                onClick={addChannelOption ? addChannel : selectChannel}>

                {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}

                {Icon ? (
                    <h3>{title}</h3>
                ) : (
                    <SidebarOptionChannel>
                        <span>#</span>{title}
                    </SidebarOptionChannel>
                )}
            </SideBarOptionsContainer>
        </div>
    )
}

export default SideBarOptions

const SideBarOptionsContainer = styled.div`
    display:flex;
    font-size:12px;
    align-items:center;
    padding-left:2px;
    cursor:pointer;

    :hover{
        opacity:0.9;
        background-color:#340e36;
    }
    > h3{
        font-weight:500
    }
    > h3 > span{
        padding:15px;
    }
`

const SidebarOptionChannel = styled.div``
