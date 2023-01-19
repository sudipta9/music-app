import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addSong, createPlaylist, getPlaylist } from "../helper/localStorage";

export const fetchPlaylist = createAsyncThunk(
    "playlist/fetchPlaylist",
    async (args, thunkAPI) => {
        const playlist = await getPlaylist();
        return thunkAPI.fulfillWithValue(playlist || { playlists: [] });
    }
);

export const createNewPlaylist = createAsyncThunk(
    "playlist/createNewPlaylist",
    async (playlist, thunkAPI) => {
        const playlists = await createPlaylist(playlist);
        return thunkAPI.fulfillWithValue(playlists);
    }
);

export const addSongToPlaylist = createAsyncThunk(
    "playlist/addSongToPlaylist",
    async ({ playlist, track }, thunkAPI) => {
        const playlists = await addSong(playlist, track);
        return thunkAPI.fulfillWithValue(playlists);
    }
);

const initialState = {
    playlist: [],
    status: "idle",
    error: null,
};

const playlistSlice = createSlice({
    name: "playlist",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPlaylist.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchPlaylist.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.playlist = action.payload.playlists;
                state.error = null;
            })
            .addCase(fetchPlaylist.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(createNewPlaylist.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(createNewPlaylist.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.playlist = action.payload.playlists;
                state.error = null;
            })
            .addCase(createNewPlaylist.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addSongToPlaylist.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(addSongToPlaylist.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.playlist = action.payload.playlists;
                state.error = null;
            })
            .addCase(addSongToPlaylist.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { getSongsFromPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
