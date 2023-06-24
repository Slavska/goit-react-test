import { TweetsList } from 'components/TweetsList/TweetsList';
import { MdArrowBack } from 'react-icons/md';
import { StyledLinkBack } from './Tweets.Styled';

export const Tweets = () => {
  return (
    <>
      <StyledLinkBack to="/">
        <MdArrowBack />
        Back
      </StyledLinkBack>
      <TweetsList />
    </>
  );
};
