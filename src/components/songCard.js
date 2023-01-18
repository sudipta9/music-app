import { faHeart, faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
const StyledSongCard = styled(Col)`
    padding: 0.5rem;
    .content {
        background-color: #1e1e1e;
        padding: 1.3rem;
        position: relative;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        img {
            margin-bottom: 1rem;
        }
        .title {
            /* font-size: 1.2rem; */
            font-weight: 800;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0;
        }
        .subtitle {
            color: #a0a0a0;
            font-weight: 400;
            white-space: nowrap;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0;
        }
        .sm-btn {
            position: absolute;
            right: 1.9rem;
            color: #000;
            transform: translateY(5px);
            opacity: 0;
            transition: all 0.4s;

            .circle {
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                background-color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &.add-to-playlist-button {
                top: 1.6rem;
            }

            &.add-to-fav-button {
                top: 4rem;
            }
        }

        .play-button {
            position: absolute;
            bottom: 5.5rem;
            right: 1.5rem;
            font-size: 1.5rem;
            transform: translateY(5px);
            opacity: 0;
            transition: all 0.4s;
            .circle {
                width: 2.7rem;
                height: 2.7rem;
                border-radius: 50%;
                background-color: #32e932;
                display: flex;
                justify-content: center;
                align-items: center;
                svg {
                    margin-left: 0.2rem;
                }
            }
        }
        &:hover {
            background-color: #2e2e2e;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
            .sm-btn,
            .play-button {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
`;
const SongCard = ({ track }) => {
    return (
        <StyledSongCard>
            <div className="content rounded">
                <img
                    src={
                        track.images
                            ? track.images.coverart
                            : "https://www.shazam.com/resources/fac9bdbb3a97872257eaeda00b7ec6d5e5540903/nocoverart.jpg"
                    }
                    alt={track.title}
                    className="img-fluid rounded"
                />
                <div className="text">
                    <p className="title">{track.title}</p>
                    <p className="subtitle">{track.subtitle}</p>
                </div>
                <div
                    className="sm-btn add-to-playlist-button"
                    onClick={() => {
                        // setShowAddToPlayListModal(true);
                    }}
                >
                    <div className="circle">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
                {/* Add to playlist modal */}
                {/* ? create playlist modal */}
                <div className="sm-btn add-to-fav-button">
                    <div className="circle">
                        <FontAwesomeIcon icon={faHeart} />
                    </div>
                </div>
                <div
                    className="play-button"
                    onClick={() => {
                        window.open(track.url, "_blank");
                    }}
                >
                    <div className="circle">
                        <FontAwesomeIcon icon={faPlay} color="#000" />
                    </div>
                </div>
            </div>
        </StyledSongCard>
    );
};

export default SongCard;
