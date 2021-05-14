import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'

const StyledTitle = styled.h1`
    font: 'Helvetica';
    text-align: center;
`
const StyledP = styled.p `
    font: 'Times New Roman';
    text-align:center;
`
const StyledH3 = styled.h3 `
    font: 'Monaco';
    text-align: 'center';
`


const TitleSection = (props) => {
    return (
        <div>
            <StyledTitle>So, something you need to know 🌌 </StyledTitle>
                <StyledP>NASA does this very cool thing (besides going to space). They randomly put out one of the hundreds of awesome pics they have from their multiple space missions. This is also exposed through an API! So here it is NASA's daily pic. In the wise words of Ali G:</StyledP>
                    <StyledH3 className = 'tagline'>{props.tagline}</StyledH3>
        </div>
    )
}

export default TitleSection;