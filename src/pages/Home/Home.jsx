import { Head, HomeContainer, StyledLink } from './Home.Styled';

export const Home = () => {
  return (
    <>
      <Head>Welcome</Head>
      <HomeContainer>
        <StyledLink to="tweets">Tweets</StyledLink>
      </HomeContainer>
    </>
  );
};
