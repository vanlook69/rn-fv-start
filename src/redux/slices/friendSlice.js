import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  friends: [],
};

export const friendSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    followFriend(state, action) {
      state.friends.push(action.payload);
    },
    unfollowFriend(state, action) {
      state.friends = state.friends.filter(
        (friend) => friend !== action.payload
      );
    },
  },
});

export const { followFriend, unfollowFriend } = friendSlice.actions;

export const selectFriend = (state) => state.friends.friends;

//export default friendSlice.reducer;
