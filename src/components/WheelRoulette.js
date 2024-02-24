import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wheel } from 'react-custom-roulette';

const data = [
  { option: '엽서 2장' },
  { option: '엽서 3장' },
  { option: '스티커 1장' },
  { option: '스티커 2장' },
  { option: '포스터 1장' },
  { option: '책갈피 1개' },
  { option: '스티커 1장' },
  { option: '엽서 2장'},
  { option: '책갈피 2개' },
]

const WheelRoulette = ({
  setModalOpen,
  setMustSpinOption,
  mustSpinOption,
  prizeNumber,
  setSelectedData,
}) => {
  const [mustSpin, setMustSpin] = useState(false);
  useEffect(() => {
    mustSpinOption? setMustSpin(true) : setMustSpin(false);
  },[mustSpinOption]);

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#FF6C6C", "#FFFFFF"]}
        textColors={["#ffffff", "#980000"]}
        outerBorderColor="#FFE45F"
        outerBorderWidth="10"
        radiusLineColor="#FFE45F"
        spinDuration="0.35"
        fontSize="20"
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
