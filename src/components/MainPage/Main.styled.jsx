import styled from 'styled-components';
import imgMain from 'images/Main.jpg';
export const MainSection = styled.main``;
export const MainContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 904px;
  padding: 164px 60px 163px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(${imgMain});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const WrapperText = styled.div`
  text-align: center;
  max-width: 380px;
  margin-bottom: 32px;
`;
export const MainText = styled.h1`
  font-size: 40px;
  line-height: 1;

  color: #ffffff;
  margin-bottom: 21px;
`;
export const SecondaryText = styled.p`
  font-size: 16px;
  line-height: 1.62;
  color: #ffffff;
`;
export const MainButton = styled.button`
  font-size: 16px;
  line-height: 1.62;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
  background: #f4e041;
  border-radius: 80px;
  padding-top: 4px;
  padding-bottom: 4px;
  min-width: 100px;
  :hover {
    background: #ffe302;
  }
`;
