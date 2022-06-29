import React, { useState } from 'react';
import styled from '@emotion/styled';
import Wheeltest from './Wheeltest';

const WheelContainer = styled.div`
    width: 1000px;
    background-color: red;
`;

const Main = () => {

    return (
    <WheelContainer>
      <Wheeltest />
    </WheelContainer>
    );
}

export default Main;
