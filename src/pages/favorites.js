import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledFavorites = styled(Container)`
    max-height: 100vh;
    overflow-y: scroll;
`;

const StyledSingleSong = styled(Col)`
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #1e1e1e;
    }
    img {
        max-height: 60px;
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
    .title {
        /* font-size: 1.2rem; */
        font-weight: 800;
        max-width: calc(100vw - 200px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .subtitle {
        color: #a0a0a0;
        font-weight: 400;
        max-width: calc(100vw - 200px);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .play-button {
        font-size: 1.5rem;
        .circle {
            width: 2.7rem;
            height: 2.7rem;
            border-radius: 50%;
            background-color: #32e932;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            svg {
                margin-left: 0.2rem;
            }
        }
    }
`;

const Favorites = () => {
    const playlist = useSelector((state) => state.playlist);
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        const index = playlist.playlist.findIndex(
            (item) => item.id === "favorites"
        );
        setSongs(playlist.playlist[index].songs);
    }, [playlist]);
    return (
        <StyledFavorites className="p-3">
            <h2>Favorites</h2>
            <Row xs={1} className="px-2">
                {songs.map((song) => {
                    return (
                        <StyledSingleSong
                            key={song.key}
                            className="py-2 border border-secondary rounded mb-2"
                        >
                            <Container className="d-flex justify-content-between align-items-center p-0">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={
                                            song.images.coverart ||
                                            "https://www.shazam.com/resources/fac9bdbb3a97872257eaeda00b7ec6d5e5540903/nocoverart.jpg"
                                        }
                                        alt=""
                                        className="img-fluid rounded"
                                    />
                                    <div className="ms-md-5 song-info">
                                        <h6 className="title">{song.title}</h6>
                                        <p className="subtitle m-0">
                                            {song.subtitle}
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="play-button"
                                    onClick={() => {
                                        window.open(song.url, "_blank");
                                    }}
                                >
                                    <div className="circle">
                                        <FontAwesomeIcon
                                            icon={faPlay}
                                            color="#000"
                                        />
                                    </div>
                                </div>
                            </Container>
                        </StyledSingleSong>
                    );
                })}
            </Row>
        </StyledFavorites>
    );
};

export default Favorites;
