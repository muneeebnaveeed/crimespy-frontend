import React from "react";
import styled from "styled-components";
import {
    bg_secondary,
    main_primary,
    neutral_primary,
    neutral_secondary,
    text_primary,
} from "styles/palette";
import { FaComments, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import Comment from "./Comment";
import { truncateString } from "helpers";

const StyledPost = styled.div`
    background-color: ${bg_secondary};
    width: 100%;
    margin-bottom: 2rem;
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 1.5rem;
`;

const StyledPostHeader = styled.div`
    display: flex;
    gap: 0.75rem;
    padding: 0 1.5rem;
`;

const StyledPostHeaderImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

const StyledPostHeaderColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const StyledPostHeaderTitle = styled.div`
    margin: 0;
    padding: 0;
    font-size: 0.75rem;
`;

const StyledPostContent = styled.p`
    margin: 0;
    padding: 0 1.5rem;
    color: ${neutral_primary};
`;

const StyledPostImageContainer = styled.div`
    margin: 0;
    margin-top: 0.25rem;
    padding: 0;
    width: 100%;
    height: 200px;
    overflow: hidden;
`;

const StyledPostImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const StyledButtonsContainer = styled.ul`
    list-style-type: none;
    width: 100%;
    display: flex;
    margin: 0;
`;

const StyledButton = styled.li`
    color: #55585b;
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    text-transform: capitalize;
    width: 100%;
    padding: 1rem 2rem;

    transition: all 300ms ease, border 200ms ease;
    cursor: pointer;
    border-bottom: 5px solid transparent;

    &.active {
        background-color: ${neutral_secondary};
        color: ${text_primary};
        border-bottom-color: ${main_primary};
    }

    &:hover {
        color: ${text_primary};
        background-color: ${neutral_secondary};
        border-bottom-color: ${main_primary};
    }
`;

function Post() {
    return (
        <StyledPost>
            <StyledPostHeader>
                <StyledPostHeaderImage src="https://via.placeholder.com/200x200" />
                <StyledPostHeaderColumn>
                    <StyledPostHeaderTitle>
                        <strong>Muneeb Naveed</strong>
                    </StyledPostHeaderTitle>
                    <StyledPostHeaderTitle>just a few mins ago</StyledPostHeaderTitle>
                </StyledPostHeaderColumn>
            </StyledPostHeader>
            <StyledPostContent>
                {truncateString(
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nemo sed maiores, et magnam earum perferendis, cupiditate exercitationem perspiciatis accusantium, quam ratione ex dolores! Sit fugiat est at autem tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sunt culpa iusto cumque praesentium, ipsum nostrum optio ea accusamus dolor eaque alias magnam nihil voluptates quo laudantium odio corporis ut!",
                    250
                )}
            </StyledPostContent>
            <div>
                <StyledPostImageContainer>
                    <StyledPostImage src="https://via.placeholder.com/1600x800" />
                </StyledPostImageContainer>
                <StyledButtonsContainer>
                    <StyledButton>
                        <FaThumbsUp /> Like
                    </StyledButton>
                    <StyledButton>
                        <FaThumbsDown /> Dislike
                    </StyledButton>
                    <StyledButton>
                        <FaComments /> Comment
                    </StyledButton>
                </StyledButtonsContainer>
                <div className="w-100">
                    <Comment />
                    <Comment />
                </div>
            </div>
        </StyledPost>
    );
}

export default Post;
