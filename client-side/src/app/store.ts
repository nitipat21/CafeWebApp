import { combineReducers, configureStore } from "@reduxjs/toolkit";
import frontEndSliceReducer from "./frontEndSlice";

const rootReducer = combineReducers({frontEndSliceReducer});

const store = configureStore({
    reducer: rootReducer 
});

export default store;

export type RootState = ReturnType<typeof store.getState>;




