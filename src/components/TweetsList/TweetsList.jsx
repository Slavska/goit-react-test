import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFollowedUser,
  selectItems,
  selectPage,
  selectPerPage,
} from 'redux/selectors';
import { fetchUsers } from 'redux/user/operations';
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
import { toggleFollow } from 'redux/follow/followSlice';
import { nextPage } from 'redux/user/userSlice';

export const TweetsList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectItems);
  const followedUsers = useSelector(selectFollowedUser);
  const page = useSelector(selectPage);
  const perPage = useSelector(selectPerPage);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleToggleFollow = userId => {
    dispatch(toggleFollow(userId));
  };

  const handleLoadMore = () => {
    dispatch(nextPage());
  };
  const visibleUsers = users.slice(0, page * perPage);

  return (
    <>
      <Head>Users</Head>
      <List>
        {visibleUsers.map(({ id, user, tweets, avatar, followers }) => {
          const isFollowing = followedUsers.includes(id);
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
      {users.length > visibleUsers.length && (
        <ButtonLoadMore onClick={handleLoadMore}>Load More</ButtonLoadMore>
      )}
    </>
  );
};
