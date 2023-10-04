import React from 'react';
import {Circles} from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <SpinnerWrapper>
      <Circles
        // type="Circles"
        color="#df3b01"
        height={80}
        width={80}
        timeout={3000}
      />
    </SpinnerWrapper>
  );
};

export default Loader;