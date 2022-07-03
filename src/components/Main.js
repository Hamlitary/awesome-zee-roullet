import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";
import WheelRoulette from './WheelRoulette';
import { Modal } from "@material-ui/core";
import { ReactComponent as TempImg } from "../assets/svg/temp.svg";

const MainContainer = styled.div`
  width: 2000px;
  height: 1200px;
  display: grid;
  grid-template-rows: 300px 470px 100px;
  justify-items: center;
  background-color: #FFB4B4;
`;

const HeaderContainer = styled.div`

`;

const NoticeArea = styled.div`
> animate-charcter
{
   text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
      font-size: 190px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
`;

const RotateImg = styled(TempImg)`
  width: 150px;
  height: 150px;
  animation: rotate_image 6s linear infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_image{
      100% {
          transform: rotate(360deg);
      }
  }
`;

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const ClickButton = styled.button`
  width: 252px;
  height: 50px;
  cursor: pointer;
  z-index: 5;
  background-color: #FF6C6C;
  border-radius: 6px;
  border: 6px dotted;
  border-color: white;

  animation: ${BounceAnimation} 0.5s linear infinite;
`;

const ModalArea = styled(Modal)`
  width: 2000px;
  height: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalDialog = styled.div`
  width: 400px;
  height: 250px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  const [mustSpinOption, setMustSpinOption] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState('');

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * 6);
    setPrizeNumber(newPrizeNumber);
    setMustSpinOption(true);
    console.log(prizeNumber);
    console.log(mustSpinOption);
  };
  
  const handleClose = () => {
    setModalOpen(false);
  };

    return (
    <MainContainer>
      <HeaderContainer>
        <NoticeArea>asdfasdf</NoticeArea>
        <RotateImg />
      </HeaderContainer>
      <WheelRoulette
        setModalOpen={setModalOpen}
        setMustSpinOption={setMustSpinOption}
        mustSpinOption={mustSpinOption}
        prizeNumber={prizeNumber}
        setSelectedData={setSelectedData}
      />
      <ClickButton onClick={handleSpinClick} >SPIN</ClickButton>
      
      <ModalArea open={modalOpen} onClose={handleClose} className="ModalArea">
        <ModalDialog>
          <h5>당첨을 축하합니다!</h5>
          <p>{selectedData}</p>
        </ModalDialog>
      </ModalArea>
    </MainContainer>
    );
}

export default Main;
