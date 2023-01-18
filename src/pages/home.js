import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import SongCard from "../components/songCard";
import { fetchRecommendations } from "../redux/reducers/fetchRecommendations";

const StyledHome = styled(Container)`
    height: 100vh;
    overflow-y: scroll;
`;

const Home = () => {
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
        <StyledHome className="p-3">
            <h2>Popular Songs</h2>
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
        </StyledHome>
    );
};

export default Home;
