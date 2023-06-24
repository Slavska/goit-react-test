export const selectTweets = state => state.tweets.tweets;
export const selectError = state => state.tweets.error;
export const selectLoading = state => state.tweets.isLoading;
export const selectPage = state => state.tweets.page;
export const selectPerPage = state => state.tweets.perPage;
export const selectFilter = state => state.tweets.filter;

export const selectFollowedState = state => state.follow.followedState;
