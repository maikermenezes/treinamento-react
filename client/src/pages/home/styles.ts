import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

export const HomeH1 = styled.h1`
  font-size: 54px;
  color: ${(props) => props.theme.colors.primary};
  margin-top: 40px;
  text-align: center;

  @media (max-width: 720px) {
    font-size: 28px;
  }
`;

export const HomeP = styled.p`
  font-size: 20px;
  margin-top: 24px;
  line-height: 32px;

  @media (max-width: 720px) {
    font-size: 16px;
    margin-top: 0;
  }
`;

export const HomeImg = styled.img`
  width: 25%;
`;

export const HomeButton = styled.button`
  width: 200px;
  height: 60px;
  border: none;
  color: white;
  border-radius: 8px;
  border-style: solid;
  border-color: yellow;
  border-width: 5px;
  font-size: 24px;
  background-color: blue;
`;

export const NewHomeButton = styled(HomeButton)`
  background-color: red;
`;
