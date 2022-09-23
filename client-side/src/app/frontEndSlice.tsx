import { createSlice } from "@reduxjs/toolkit";
import hero1 from '../assets/backgrounds/hero1.jpg'
import hero2 from '../assets/backgrounds/hero2.jpg'
import hero3 from '../assets/backgrounds/hero3.jpg'

const heroContentList = [
    {
        image: hero1,
        header: "Amazing Taste & Beatiful Place Testing Experience",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta natus molestiae a sequi numquam ducimus!"
    },
    {
        image: hero2,
        header: "Amazing Coffee Testing Experience",
        content: "Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada"
    },
    {
        image: hero3,
        header: "Creamy And Hot Ready To Serve",
        content: "Tellus orci ac auctor augue mauris augue neque gravida in. Risus pretium quam vulputate dignissim suspendisse in est"
    }
]

export interface frontEndState {
    isShowSidebar: boolean;
    heroContentList: { image: any; header: string; content: string; }[];
};

const initialState: frontEndState = {
    isShowSidebar: false,
    heroContentList: heroContentList
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