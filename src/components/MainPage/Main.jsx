import {
  MainSection,
  MainContainer,
  WrapperText,
  MainText,
  SecondaryText,
  MainButton,
} from './Main.styled';

const Main = () => {
  return (
    <MainSection>
      <MainContainer>
        <WrapperText>
          <MainText>Test assignment for front-end developer</MainText>
          <SecondaryText>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </SecondaryText>
        </WrapperText>
        <MainButton>
          <a href="#add"> Sign up</a>
        </MainButton>
      </MainContainer>
    </MainSection>
  );
};

export default Main;
