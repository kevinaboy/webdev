import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const bounceAnimation = keyframes`${bounce}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;


function Animation(props) {
  return (
    <>
      <BouncyDiv>
        <h4 class="welcome">Welcome!</h4>
      </BouncyDiv>
    </>
  );
}

export default Animation;