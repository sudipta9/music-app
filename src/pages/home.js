import localforage from "localforage";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import SongCard from "../components/songCard";
import { fetchRecommendations } from "../redux/reducers/fetchRecommendations";
import { fetchPlayList } from "../redux/reducers/playlist";

const StyledHome = styled(Container)`
    height: 100vh;
    overflow-y: scroll;
`;

const Home = () => {
    const dispatch = useDispatch();
    const recommendationsState = useSelector((state) => {
        return state.recommendations.tracks;
    });
    const [recommendations, setRecommendations] =
        useState(recommendationsState);

    useEffect(() => {
        const fetchRecommendationsData = async () => {
            const storedRecommendations = await localforage.getItem(
                "recommendations"
            );
            if (storedRecommendations) {
                setRecommendations(storedRecommendations);
            } else {
                dispatch(fetchRecommendations(86954223));
                setRecommendations(recommendationsState);
                await localforage.setItem(
                    "recommendations",
                    recommendationsState
                );
            }
        };
        fetchRecommendationsData();
    }, [dispatch, recommendationsState]);

    return (
        <StyledHome className="p-3">
            {console.log(recommendations)}
            <h2>Popular Songs</h2>

            <Row xs={1} sm={2} md={3} lg={6}>
                {recommendations.slice(0, 18).map((track) => {
                    return <SongCard track={track} key={track.key} />;
                })}
            </Row>
        </StyledHome>
    );
};

export default Home;
