import React from 'react'
import styled from 'styled-components';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function Header() {
    return (
        <HeaderContainer>
            
            {/* Header Left */}
            <HeaderLeft>
                <HeaderAvatar 
                    // onClick={} Add On CLick

                />
                <AccessTimeIcon />


            </HeaderLeft>


            {/* Header Search */}
            <HeaderSearch>
                <SearchIcon />
                <input placeholder='Search In Slack' />
            </HeaderSearch>


            {/* Header Right */}
            <HeaderRight>
                <HelpOutlineIcon />

            </HeaderRight>

            
        </HeaderContainer>
    )
}

export default Header;


const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
    

    
`;
const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    /* Adding Design to Material Ui Root Icon */

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }

`;

const HeaderAvatar = styled(Avatar)`

    cursor: pointer;
    :hover {
        opacity: 0.8;
    }

`;

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    text-align: center;
    background-color: #421f44;
    display: flex;
    padding: 0 50px;
    border: 1px solid gray;
    >input{
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`;

const HeaderRight = styled.div `
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;