import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSearchResults } from "../redux/reducers/fetchSearchResults";
import ArtistCard from "./artistCard";
import SongCard from "./songCard";

const SearchResults = () => {
    const { songName } = useParams();
    const dispatch = useDispatch();
    const searchResultState = useSelector((state) => state.searchResults);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();
        dispatch(
            fetchSearchResults({
                searchTerm: songName,
                cancelToken: cancelToken.token,
            })
        );
        return () => {
            console.log("cancelling request");
            cancelToken.cancel();
        };
    }, [dispatch, songName]);

    useEffect(() => {
        if (searchResultState.status === "loading") {
            setIsLoading(true);
        } else if (searchResultState.status === "succeeded") {
            setIsLoading(false);
        } else if (searchResultState.status === "failed") {
            if (searchResultState.error === "canceled") {
                console.log("request cancelled");
            } else {
                setIsLoading(false);
                setError(searchResultState.error);
            }
        }
    }, [searchResultState.status, searchResultState.error]);

    return (
        <>
            {console.log(searchResultState)}
            {isLoading && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            {error && <p>{error}</p>}
            {!isLoading && !error && searchResultState.searchResult && (
                <>
                    <h3>Artists</h3>
                    <Row xs={1} sm={2} lg={4}>
                        {searchResultState.searchResult.artists.hits
                            .slice(0, 4)
                            .map((item) => (
                                <ArtistCard
                                    key={item.artist.adamid}
                                    item={item}
                                />
                            ))}
                    </Row>
                    <h3>Songs</h3>
                    <Row xs={1} sm={2} md={3} lg={5}>
                        {searchResultState.searchResult.tracks.hits.map(
                            (item, index) => (
                                <SongCard key={index} track={item.track} />
                            )
                        )}
                    </Row>
                </>
            )}
        </>
    );
};

export default SearchResults;
