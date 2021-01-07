import Filler from "components/Filler";
import React from "react";
import styled from "styled-components";
import Post from "./Post";

const StyledPosts = styled.div`
    width: calc(100% - 400px - 2rem);
    height: 100%;
`;

function Posts() {
    return (
        <StyledPosts>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Filler width="100%" height="0.1px" />
        </StyledPosts>
    );
}

export default Posts;
