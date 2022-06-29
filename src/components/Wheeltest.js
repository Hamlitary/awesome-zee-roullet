import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { Modal } from "@material-ui/core";

const data = [
  { option: '0' },
  { option: '1' },
  { option: '2' },
  { option: '3' },
  { option: '4' },
  { option: '5' },
]

const Wheeltest = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  };

  return (
    <>
      <div>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={["#5500FF", "#ffffff"]}
          textColors={["#ffffff", "#5500FF"]}
          onStopSpinning={() => {
            setMustSpin(false);
            handleOpen();
          }}
        />
        <button onClick={handleSpinClick}>SPIN</button>
      </div>
      <Modal open={open} onClose={handleClose} className="Ccelebnodal">
        <div className="Cceleb">
          <h5>당첨을 축하합니다!</h5>
          <p>{data[prizeNumber].option}</p>
        </div>
      </Modal>
    </>
  )
}

export default Wheeltest;
