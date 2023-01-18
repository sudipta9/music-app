import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PopularResults from "./components/popularResults";
import SearchResults from "./components/searchResults";
import DefaultLayout from "./layouts/defaultLayout";
import Favorites from "./pages/favorites";
import Playlists from "./pages/playlists";
import Home from "./pages/home";
import Search from "./pages/search";
import { fetchPlaylist } from "./redux/reducers/playlist";
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPlaylist());
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="" element={<Home />} />
                <Route path="search" element={<Search />}>
                    <Route path="" element={<PopularResults />} />
                    <Route path=":songName" element={<SearchResults />} />
                </Route>
                <Route path="favorites" element={<Favorites />} />
                <Route path="playlists" element={<Playlists />} />
                <Route path="*" element={<div>404</div>} />
            </Route>
        </Routes>
    );
};

export default App;
