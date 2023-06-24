import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
    perPage: 3,
    followedUsers: [],
  },
  reducers: {
    nextPage: state => {
      state.page++;
    },
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
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { nextPage, toggleFollow } = userSlice.actions;
export const userReducer = userSlice.reducer;
