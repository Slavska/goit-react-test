import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

export const tweetSlice = createSlice({
  name: 'tweets',
  initialState: {
    tweets: [],
    isLoading: false,
    error: null,
    page: 1,
    perPage: 3,
    filter: 'show all',
  },
  reducers: {
    nextPage: state => {
      state.page++;
    },
    setFilter: (state, { payload: filter }) => {
      state.filter = filter;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tweets = action.payload;
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

export const { nextPage, setFilter } = tweetSlice.actions;
export const tweetReducer = tweetSlice.reducer;
