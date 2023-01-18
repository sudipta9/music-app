import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchResults = createAsyncThunk(
    "search/fetchSearchResults",
    async ({ searchTerm, cancelToken }) => {
        if (searchTerm === "") {
            return {};
        }
        const response = await axios.get(
            `https://${process.env.REACT_APP_RAPIDAPI_HOST}/search`,
            {
                params: {
                    term: searchTerm,
                    locale: "en-US",
                    offset: "0",
                    limit: "5",
                },
                headers: {
                    "X-RapidAPI-Key": process.env.REACT_APP_RAPIAPI_KEY,
                    "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
                },
                cancelToken,
            }
        );
        return response.data;
    }
);

const initialState = {
    searchResult: "",
    status: "idle",
    error: null,
};

const searchSlice = createSlice({
    name: "searchResults",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchSearchResults.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.searchResult = action.payload;
                state.error = null;
            })
            .addCase(fetchSearchResults.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default searchSlice.reducer;
