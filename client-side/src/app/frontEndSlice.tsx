import { createSlice } from "@reduxjs/toolkit";


export interface frontEndState {
    isShowSidebar: boolean;
};

const initialState: frontEndState = {
    isShowSidebar: false    
};

const frontEndSlice =  createSlice({
    name: 'frontend',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isShowSidebar = !state.isShowSidebar
        },
    }
});

const frontEndSliceReducer = frontEndSlice.reducer;

export const { toggleSidebar } = frontEndSlice.actions;

export default frontEndSliceReducer;