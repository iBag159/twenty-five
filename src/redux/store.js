import { configureStore } from "@reduxjs/toolkit";
import { TimerReducer } from "./reducers";

export default configureStore({
  reducer: TimerReducer
});