import { createSlice } from "@reduxjs/toolkit";
import { getPlaylist } from "../helper/localStorage";

const persistedState = getPlaylist();

const initialState = {
    playlist: persistedState ? persistedState : [],
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        addNewPlaylist: (state, action) => {
            state.playlist.push(action.payload);
        },
    },
});

export const { addNewPlaylist } = playlistSlice.actions;

export default playlistSlice.reducer;
