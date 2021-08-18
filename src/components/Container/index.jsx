import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.main`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-column-gap: 24px;

padding: 24px;



`;




function Container () {
    return (
        <StyledContainer>
        <div> Top Music</div>
        <div> Playlist</div>
        <div> Player</div>
        </StyledContainer>)
    
}

export default Container;