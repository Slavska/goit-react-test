import { createSlice } from '@reduxjs/toolkit';

export const followSlice = createSlice({
  name: 'follow',
  initialState: {
    followedUsers: [],
  },
  reducers: {
    toggleFollow: (state, { payload: userId }) => {
      const followedUsersSet = new Set(state.followedUsers);

      if (followedUsersSet.has(userId)) {
        followedUsersSet.delete(userId);
      } else {
        followedUsersSet.add(userId);
      }

      state.followedUsers = Array.from(followedUsersSet);
    },
  },
});

export const { toggleFollow } = followSlice.actions;
