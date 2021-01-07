import React from "react";

import styled from "styled-components";
import { breakpointXxl, neutral_secondary } from "styles";

import { Navbar } from "components";

const StyledBody = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #3d434b;
`;

const StyledAppContainer = styled.div`
    width: 100%;
    transition: width 300ms ease-out;

    @media only screen and (min-width: ${breakpointXxl}) {
        justify-content: center;
    }
`;

const StyledContentContainer = styled.div`
    flex: 1;
    background-color: ${neutral_secondary};
    gap: 2rem;
    padding: 2rem;
    padding-bottom: 0;
`;

function VerticalLayout(props) {
    return (
        <StyledBody>
            <StyledAppContainer className="d-flex h-100">
                <Navbar />
                <StyledContentContainer className="d-flex flex-column h-100">
                    {props.children}
                </StyledContentContainer>
            </StyledAppContainer>
        </StyledBody>
    );
}

export default VerticalLayout;
