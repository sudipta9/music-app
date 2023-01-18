import localforage from "localforage";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendations } from "../redux/reducers/fetchRecommendations";
import SongCard from "./songCard";

const PopularResults = () => {
    const dispatch = useDispatch();
    const recommendationsState = useSelector((state) => {
        return state.recommendations;
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(fetchRecommendations(484129036));
    }, [dispatch]);

    useEffect(() => {
        if (recommendationsState.status === "loading") {
            setLoading(true);
        }
        if (recommendationsState.status === "succeeded") {
            setLoading(false);
        }
    }, [recommendationsState.status]);
    return (
        <>
            <h3>Popular Results</h3>
            {loading && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <Row xs={1} sm={2} md={3} lg={6}>
                {recommendationsState.tracks.slice(0, 18).map((track) => {
                    return <SongCard track={track} key={track.key} />;
                })}
            </Row>
        </>
    );
};

export default PopularResults;
