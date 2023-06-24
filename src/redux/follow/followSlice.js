import { createSlice } from '@reduxjs/toolkit';

export const followSlice = createSlice({
  name: 'follow',
  initialState: {
    followedState: [],
  },
  reducers: {
    toggleFollow: (state, { payload: userId }) => {
      if (state.followedState.includes(userId)) {
        state.followedState = state.followedState.filter(id => id !== userId);
      } else {
        state.followedState.push(userId);
      }
    },
  },
});

export const { toggleFollow } = followSlice.actions;
