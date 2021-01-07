import { truncateString } from "helpers";
import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import { bg_secondary, main_primary, neutral_secondary, text_primary } from "styles/palette";

const StyledTrending = styled.div`
    width: ${(props) => props.width};
    height: calc(100% - 86px - 6rem);
    border-radius: 6px;
    background-color: ${bg_secondary};
    padding-bottom: 1.5rem;
    position: fixed;
    right: calc(2rem + 0.25rem);
    top: calc(86px + 4rem);
`;

const StyledCrimes = styled.ul`
    list-style-type: none;
`;

const StyledCrime = styled.li`
    color: #55585b;
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: capitalize;
    width: 100%;
    padding: 1rem 2rem;

    transition: all 300ms ease, border 200ms ease;
    cursor: pointer;
    border-right: 5px solid transparent;

    &.active {
        background-color: ${neutral_secondary};
        color: ${text_primary};
        border-right-color: ${main_primary};
    }

    &:hover {
        background-color: ${neutral_secondary};
        color: ${text_primary};
        border-right-color: ${main_primary};
    }
`;

const StyledButton = styled(Button)`
    width: calc(100% - 3rem);
    margin: 0 1.5rem;
`;

function Trending() {
    return (
        <StyledTrending width="400px" className="d-flex flex-column justify-content-between">
            <div className="d-flex flex-column">
                <h2 className="m-4">Trending Crimes!</h2>
                <StyledCrimes>
                    <StyledCrime>
                        {truncateString("Robbery at Michigan White House", 45)}
                    </StyledCrime>
                    <StyledCrime>
                        {truncateString(
                            "Philanthropist charged with murder in deadly hit-and-run crash",
                            45
                        )}
                    </StyledCrime>
                    <StyledCrime>
                        {truncateString(
                            "Hunter charged with homicide in death of teen shot while watching the sunset with his girlfriend",
                            45
                        )}
                    </StyledCrime>
                </StyledCrimes>
            </div>
            <StyledButton size="lg" color="primary">
                Explore More
            </StyledButton>
        </StyledTrending>
    );
}

export default Trending;
