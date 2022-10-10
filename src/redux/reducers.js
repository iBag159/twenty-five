import * as actions from "./actions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  break: 5,
  seasson: 25
}

export const TimerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    ...actions
  }
});

export const { decrementBreak, incrementBreak, decrementSeasson, incrementSeasson } = TimerSlice.actions

export default TimerSlice.reducer;