import React from 'react';
import { HomeContainer, HomeButton, NewHomeButton } from './styles';
import { LogoCITi } from '../../assets';
import { Carousel } from '../../components/Carousel';

export const Home = () => {
  return (
    <HomeContainer>
      {/* <HomeImg
        src={LogoCITi}
        alt=''
      />
      <HomeH1>ReactJS Boilerplate</HomeH1>
      <HomeP>Made with &lt; &#x0002F; &gt; and &hearts; by CITi</HomeP> */}
      <Carousel />
      <NewHomeButton>Botão vermelho</NewHomeButton>
      <HomeButton>Botão 1</HomeButton>
      <HomeButton>Botão 2</HomeButton>
      <HomeButton>Botão 3</HomeButton>
    </HomeContainer>
  );
};
