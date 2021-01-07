import React from "react";
import styled from "styled-components";
import { bg_secondary, main_primary, text_primary, neutral_secondary, breakpointLg } from "styles";
import Logo from "assets/logo.png";

const StyledNavbar = styled.div`
    width: ${(props) => props.width};
    background-color: ${bg_secondary};

    transition: width 300ms ease;

    gap: 2rem;
    @media only screen and (max-width: ${breakpointLg}) {
        width: ${(props) => props.minWidth};
    }
`;

const StyledLogo = styled.img`
    border-radius: 100%;
    display: inline-block;
    margin: 2rem auto 0 auto;
`;

const StyledMenu = styled.ul`
    list-style-type: none;
`;

const StyledMenuItem = styled.li`
    color: #55585b;
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: capitalize;
    width: 100%;
    padding: 1rem 2rem;

    transition: all 300ms ease, border 200ms ease;
    cursor: pointer;
    border-left: 5px solid transparent;

    &.active {
        background-color: ${neutral_secondary};
        color: ${text_primary};
        border-left-color: ${main_primary};
    }

    &:hover {
        background-color: ${neutral_secondary};
        color: ${text_primary};
        border-left-color: ${main_primary};
    }
`;

function Navbar(props) {
    return (
        <StyledNavbar
            width="200px"
            minWidth="100px"
            className="d-flex flex-column h-100"
            {...props}
        >
            <StyledLogo width="86px" src={Logo} />
            <StyledMenu className="d-flex flex-column w-100">
                <StyledMenuItem className="active">Feed</StyledMenuItem>
                <StyledMenuItem>Profile</StyledMenuItem>
                <StyledMenuItem>Settings</StyledMenuItem>
            </StyledMenu>
        </StyledNavbar>
    );
}

export default Navbar;
