import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/tweet/operations';
import { nextPage, setFilter } from 'redux/tweet/tweetSlice';
import { toggleFollow } from 'redux/follow/followSlice';
import {
  selectFilter,
  selectFollowedState,
  selectTweets,
  selectPage,
  selectPerPage,
} from 'redux/selectors';
import {
  ButtonFollow,
  ButtonFollowing,
  ButtonLoadMore,
  Card,
  Head,
  Img,
  List,
  Text,
} from './TweetsList.Styled';
import { Select } from '@chakra-ui/react';

export default function TweetsList() {
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweets);
  const followedState = useSelector(selectFollowedState);
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleToggleFollow = userId => {
    dispatch(toggleFollow(userId));
  };

  const handleLoadMore = () => {
    dispatch(nextPage());
  };

  const filterUsers = user => {
    switch (filter) {
      case 'show all':
        return true;
      case 'follow':
        return !followedState.includes(user.id);
      case 'following':
        return followedState.includes(user.id);
      default:
        return false;
    }
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const visibleTweet = tweets
    .filter(filterUsers)
    .slice(0, page * perPage)
    .map(tweet => tweet.id);

  const visibleTweets = visibleTweet.map(id =>
    tweets.find(tweet => tweet.id === id)
  );

  return (
    <>
      <Head>Users</Head>
      <Select
        cursor="pointer"
        m="0 auto 20px auto"
        display="flex"
        width="200px"
        alignItems="center"
        value={filter}
        onChange={handleFilterChange}
      >
        <option value="show all">Show All</option>
        <option value="follow">Follow</option>
        <option value="following">Following</option>
      </Select>

      <List>
        {visibleTweets.map(({ id, user, tweets, avatar, followers }) => {
          const isFollowing = followedState.includes(id);
          const followerCount = isFollowing ? followers + 1 : followers;

          return (
            <Card key={id}>
              <Img alt={user} src={avatar} />
              <Text>{user}</Text>
              <Text>{tweets} tweets</Text>
              <Text>
                {followerCount.toString().replace(/,/g, ' ')} followers
              </Text>
              {isFollowing ? (
                <ButtonFollowing
                  type="submit"
                  onClick={() => handleToggleFollow(id)}
                >
                  Following
                </ButtonFollowing>
              ) : (
                <ButtonFollow
                  type="submit"
                  onClick={() => handleToggleFollow(id)}
                >
                  Follow
                </ButtonFollow>
              )}
            </Card>
          );
        })}
      </List>
      {((filter === 'show all' &&
        tweets.length > 3 &&
        tweets.length > visibleTweets.length) ||
        (filter === 'follow' &&
          tweets.length - followedState.length > 3 &&
          tweets.length - followedState.length > visibleTweets.length) ||
        (filter === 'following' &&
          followedState.length > 3 &&
          followedState.length > visibleTweets.length)) && (
        <ButtonLoadMore onClick={handleLoadMore}>Load More</ButtonLoadMore>
      )}
    </>
  );
}
