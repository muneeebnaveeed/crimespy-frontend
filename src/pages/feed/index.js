import React from "react";
import styled from "styled-components";
import Posts from "./Posts";
import Topbar from "./Topbar";
import Trending from "./Trending";
import Headroom from "react-headroom";

const StyledFeedContainer = styled.div`
    height: 100%;
    display: flex;
    gap: 2rem;
    overflow: auto;
    position: relative;
`;

function Feed() {
    return (
        <>
            <Headroom>
                <Topbar />
            </Headroom>
            <StyledFeedContainer>
                <Posts />
                <Trending />
            </StyledFeedContainer>
        </>
    );
}

export default Feed;
