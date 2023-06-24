export const selectItems = state => state.user.items;
export const selectError = state => state.user.error;
export const selectLoading = state => state.user.isLoading;
export const selectFollowedUser = state => state.follow.followedUsers;
export const selectPage = state => state.user.page;
export const selectPerPage = state => state.user.perPage;
