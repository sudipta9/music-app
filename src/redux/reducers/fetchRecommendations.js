import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecommendations = createAsyncThunk(
    "recommendations/fetchRecommendations",
    async (key, thunkAPI) => {
        const response = await axios.get(
            `https://${process.env.REACT_APP_RAPIDAPI_HOST}/songs/list-recommendations`,
            {
                params: {
                    key: key,
                    locale: "en-US",
                },
                headers: {
                    "X-RapidAPI-Key": process.env.REACT_APP_RAPIAPI_KEY,
                    "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
                },
            }
        );
        return response.data;
    }
);

const initialState = {
    tracks: [],
    status: "idle",
    error: null,
};

const recommendationsSlice = createSlice({
    name: "recommendations",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchRecommendations.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchRecommendations.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.tracks = action.payload.tracks;
            })
            .addCase(fetchRecommendations.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default recommendationsSlice.reducer;
