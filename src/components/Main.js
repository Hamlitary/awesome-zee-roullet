import React, { useState } from 'react';
import styled from '@emotion/styled';
import WheelRoulette from './WheelRoulette';
import { Modal } from "@material-ui/core";

const WheelContainer = styled.div`
  width: 2000px;
  height: 1200px;
  display: grid;
  grid-template-rows: 450px 100px;
  justify-items: center;
  background-color: #FFB4B4;
`;

const ClickButton = styled.button`
  width: 252px;
  height: 50px;
  cursor: pointer;
  z-index: 5;
  background-color: red;
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
  
  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

    return (
    <WheelContainer>
      <WheelRoulette
        setModalOpen={setModalOpen}
        setMustSpinOption={setMustSpinOption}
        mustSpinOption={mustSpinOption}
        prizeNumber={prizeNumber}
        setSelectedData={setSelectedData}
      />
      <ClickButton onClick={handleSpinClick} >SPIN</ClickButton>
      
      <Modal open={modalOpen} onClose={handleClose} className="Ccelebnodal">
        <div className="Cceleb">
          <h5>당첨을 축하합니다!</h5>
          <p>`${selectedData}`</p>
        </div>
      </Modal>
    </WheelContainer>
    );
}

export default Main;
