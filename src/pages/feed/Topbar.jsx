import React from "react";
import { Input, Button } from "reactstrap";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import {
    bg_secondary,
    main_primary,
    neutral_secondary,
    text_primary,
    text_secondary,
} from "styles/palette";

const StyledTopbarContainer = styled.div`
    background-color: ${bg_secondary};
    padding: 1.5rem;
    border-radius: 6px;
`;

const StyledWelcome = styled.h2`
    font-weight: bold;
    margin: 0;
`;

const StyledSearchInput = styled(Input)`
    width: 300px;
    outline: ${main_primary};
    border: ${main_primary};
    color: ${text_secondary};
    padding: 0 0.5rem;
    background-color: ${neutral_secondary};

    &:focus {
        background-color: ${text_secondary};
        color: ${text_primary};
    }
`;

function Topbar() {
    return (
        <StyledTopbarContainer className="d-flex justify-content-between w-100">
            <StyledWelcome>Welcome back, Muneeb Naveed!</StyledWelcome>
            <div className="d-flex">
                <StyledSearchInput type="text" placeholder="Looking for something specific?" />
                <Button color="primary" className="px-3">
                    <FaSearch />
                </Button>
            </div>
        </StyledTopbarContainer>
    );
}

export default Topbar;
