import { combineReducers } from "@reduxjs/toolkit";
import fetchRecommendationsReducer from "./fetchRecommendations";
import fetchSearchResultsReducer from "./fetchSearchResults";
import playListReducer from "./playlist";

const rootReducer = combineReducers({
    recommendations: fetchRecommendationsReducer,
    searchResults: fetchSearchResultsReducer,
    playlist: playListReducer,
});

export default rootReducer;
