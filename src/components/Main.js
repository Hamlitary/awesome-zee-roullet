import React, { useEffect, useState } from 'react';
import styled, { keyframes } from "styled-components";
import WheelRoulette from './WheelRoulette';
import { Modal } from "@material-ui/core";
import { ReactComponent as TempImg } from "../assets/svg/HappyZee.svg";
import { ReactComponent as DialogImg } from "../assets/svg/Dialog.svg";
import HappyImg from "../assets/png/HappyZee.png";
import clicksound from '../assets/wav/clicked.mp3';
import resultSound from '../assets/wav/result.wav';

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 28vh 47vh 10vh 15vh;
  justify-items: center;
  background: repeating-linear-gradient(90deg, #FFB4B4, #FFB4B4 50px, #FFF 0, #FFF 100px);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: grid;
  overflow: hidden;
  font-family: "Jua";
  font-size: 55px;
  color: #FF6C6C;
  grid-template-rows: 80px 200px;
  justify-items: center;
  -webkit-text-stroke: 2px #FFE45F;
`;

const LeftAgroArea = styled.div`
  width: 25vw;
  height: 70vh;
  z-index: 3;
  min-width: 300px;
  overflow: hidden;
  position: absolute;
  padding-top: 30vh;
  padding-left: 5vw;
  font-family: "Jua";
  font-size: 60px;
  color: #FFE45F;
  -webkit-text-stroke: 2px red;
`;

const RightClickInfoArea = styled.div`
  width: 33vw;
  height: 25vh;
  z-index: 3;
  min-width: 350px;
  overflow: hidden;
  position: absolute;
  padding-top: 75vh;
  padding-left: 62vw;
  font-family: "Jua";
  font-size: 40px;
  color: #FF6C6C;
`;

const RotatingTextAnimation = keyframes`
  from{
    transform:translateX(100%);
  }
  to{
    transform:translateX(0%);
  }
`;

const NoticeArea = styled.div`
  width: 100%;
  white-space: nowrap;
  will-change: transform;
  animation: ${RotatingTextAnimation} 3s linear infinite;
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

const BlinkAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`;

const ClickButton = styled.button`
  width: 250px;
  height: 70px;
  cursor: pointer;
  z-index: 5;
  background-color: #FFE45F;
  border-radius: 6px;
  border: 7px dotted;
  border-color: #FFFFFF;
  font-family: "Jua";
  font-size: 25px;
  animation: ${BlinkAnimation} 1s linear infinite;
`;

const LeftAgroText = styled.div`
  width: 100%;
  white-space: pre-line;
  animation: ${BlinkAnimation} 2s linear infinite;
`;

const ModalArea = styled(Modal)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalDialog = styled.div`
  width: 30vw;
  height: 250px;
  display: flex;
  position:relative;
  justify-content: center;
  align-items: center;
`;

const ModalText = styled.div`
  font-size: 45px;
  position: absolute;
  z-index: 1;
  font-family: "Jua";
  color: #EA6A8F;
  padding-bottom: 30px;
`;

const ModalTextSmall = styled.div`
  font-size: 30px;
  position: absolute;
  z-index: 1;
  font-family: "Jua";
  color: #EA6A8F;
  padding-top: 65px;
`;

const ModalBackImg = styled(DialogImg)`
  width: 400px;
  position: absolute;
`;

const PriceNotice = styled.div`
  width: 400px;
  font-family: "Jua";
  font-size: 30px;
  color: #980000;
  justify-content: center;
  align-items: center;
  text-align: center;
`;


const Main = () => {
  const [mustSpinOption, setMustSpinOption] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState('');

  const openAudio = new Audio(clicksound);
  const closeAudio = new Audio(resultSound);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * 8);
    setPrizeNumber(newPrizeNumber);
    setMustSpinOption(true);
    console.log(prizeNumber);
    console.log(mustSpinOption);
    openAudio.loop = false;
    openAudio.play();
  };
  
  const handleClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (modalOpen){
      closeAudio.loop = false;
      closeAudio.play();
    }
  // eslint-disable-next-line
  },[modalOpen]);

    return (
    <MainContainer>
      <LeftAgroArea>
        <LeftAgroText>오직 뽑기로만!! 만날 수 있는 스티커!! 6종을 뽑아 보세요!!</LeftAgroText>
      </LeftAgroArea>
      <RightClickInfoArea>
        <LeftAgroText>☜ SPIN을 터치해서 뽑기 !</LeftAgroText>
      </RightClickInfoArea>
      <ContentsContainer>
        <HeaderContainer>
          <NoticeArea>★ 행운의 지 뽑기 ! ★</NoticeArea>
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
        <PriceNotice>
          <div>1000원 = 1회</div>
          <div>3000원 = 4회</div>
          <div>5000원 = 7회</div>
        </PriceNotice>
        <ModalArea open={modalOpen} onClose={handleClose} className="ModalArea">
          <>
            <img src={HappyImg} />
            <ModalDialog>
              <ModalText>{selectedData} !!! </ModalText>
              <ModalTextSmall>당첨을 축하합니다 !!</ModalTextSmall>
              <ModalBackImg />
            </ModalDialog>
          </>
        </ModalArea>
      </ContentsContainer>
    </MainContainer>
    );
}

export default Main;
