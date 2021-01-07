import React from "react";
import styled from "styled-components";
import { main_primary, neutral_primary, neutral_secondary, text_primary } from "styles/palette";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { truncateString } from "helpers";

const StyledComment = styled.div`
    display: flex;
    padding: 20px;
    padding-top: 0;
    gap: 20px;
`;

const StyledCommentImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 0.75rem;
`;

const StyledCommentContentContainer = styled.div`
    flex: 1;
    border-radius: 10px 0 0 10px;
    background-color: ${neutral_secondary};
    padding: 0.75rem;
    padding-bottom: 0.5rem;

    .button {
        font-weight: bold;
        display: inline;
        opacity: 0.75;
        cursor: pointer;
        color: ${main_primary};
    }
`;

const StyledCommentContent = styled.p`
    color: ${neutral_primary};
    margin: 0;
    margin-bottom: 0.25rem;
`;

const StyledButtonsContainer = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin: 0;
`;

const StyledButton = styled.li`
    flex: 1;
    color: #55585b;
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    text-transform: capitalize;
    width: 100%;
    padding: 0 1rem;

    display: flex;
    align-items: center;

    transition: all 300ms ease, border 200ms ease;
    cursor: pointer;
    border-right: 5px solid transparent;

    &.active {
        background-color: ${neutral_secondary};
        color: ${text_primary};
        border-right-color: ${main_primary};
    }

    &:hover {
        color: ${text_primary};
        background-color: ${neutral_secondary};
        border-right-color: ${main_primary};
    }
`;

function Comment(props) {
    return (
        <StyledComment {...props}>
            <StyledCommentImage src="https://via.placeholder.com/200x200" />
            <div className="d-flex">
                <StyledCommentContentContainer>
                    <StyledCommentContent>
                        {truncateString(
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nemo sed maiores, et magnam earum perferendis, cupiditate exercitationem perspiciatis accusantium, quam ratione ex dolores! Sit fugiat est at autem tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sunt culpa iusto cumque praesentium, ipsum nostrum optio ea accusamus dolor eaque alias magnam nihil voluptates quo laudantium odio corporis ut!",
                            250
                        )}
                    </StyledCommentContent>
                    <StyledCommentContent className="button">MENTION</StyledCommentContent>
                </StyledCommentContentContainer>
                <StyledButtonsContainer>
                    <StyledButton>
                        <FaThumbsUp />
                    </StyledButton>
                    <StyledButton>
                        <FaThumbsDown />
                    </StyledButton>
                </StyledButtonsContainer>
            </div>
        </StyledComment>
    );
}

export default Comment;
