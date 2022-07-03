import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wheel } from 'react-custom-roulette';

const data = [
  { option: '0' },
  { option: '1' },
  { option: '2' },
  { option: '3' },
  { option: '4' },
  { option: '5' },
]

const WheelRoulette = (
  setModalOpen,
  setMustSpinOption,
  mustSpinOption,
  prizeNumber,
  setSelectedData, 
) => {
  const [mustSpin, setMustSpin] = useState(false);
  useEffect(() => {
    mustSpinOption? setMustSpin(true) : setMustSpin(false);
  },[mustSpinOption]);

  console.log(prizeNumber);
  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#5500FF", "#ffffff"]}
        textColors={["#ffffff", "#5500FF"]}
        onStopSpinning={() => {
          setMustSpinOption(false);
          setModalOpen(true);
          setSelectedData(data[prizeNumber].option);
        }}
      />
    </>
  )
}

WheelRoulette.propTypes = {
  handleSpinClick: PropTypes.func.isRequired,
  setModalOpen: PropTypes.func.isRequired,
  setSelectedData: PropTypes.func,
  setMustSpin: PropTypes.bool,
  setMustSpinOption: PropTypes.func.isRequired,
  mustSpinOption: PropTypes.bool.isRequired,
  prizeNumber: PropTypes.number,
  open: PropTypes.bool,
};

WheelRoulette.defaultProps = {
  setSelectedData: () => {},
  prizeNumber: 0,
  open: false,
  setMustSpin: false,
};

export default WheelRoulette;
