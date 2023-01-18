import localforage from "localforage";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendations } from "../redux/reducers/fetchRecommendations";
import SongCard from "./songCard";

const PopularResults = () => {
    const dispatch = useDispatch();
    const recommendationsState = useSelector((state) => {
        return state.recommendations.tracks;
    });
    const [recommendations, setRecommendations] =
        useState(recommendationsState);

    useEffect(() => {
        if (localforage.getItem("recommendations")) {
            localforage.getItem("recommendations").then((value) => {
                setRecommendations(value);
            });
        } else {
            dispatch(fetchRecommendations(86954223));
            setRecommendations(recommendationsState);
            localforage.setItem("recommendations", recommendationsState);
        }
    }, [dispatch, recommendationsState]);
    return (
        <>
            <h3>Popular Results</h3>
            <Row xs={1} sm={2} md={3} lg={6}>
                {recommendations.slice(0, 18).map((track) => {
                    return <SongCard track={track} key={track.key} />;
                })}
            </Row>
        </>
    );
};

export default PopularResults;
