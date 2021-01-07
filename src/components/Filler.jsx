import React from "react";
import styled from "styled-components";

const StyledFiller = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

function Filler(props) {
    return <StyledFiller {...props} />;
}

export default Filler;
