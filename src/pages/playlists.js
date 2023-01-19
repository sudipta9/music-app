import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledPlaylists = styled(Container)`
    max-height: 100vh;
    overflow-y: scroll;
    .card {
        cursor: pointer;

        &-title {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
const Playlists = () => {
    const playlist = useSelector((state) => state.playlist);
    const navigate = useNavigate();

    return (
        <StyledPlaylists className="p-3">
            <h5>All Playlists</h5>
            <Row className="mt-4">
                {playlist.playlist.map((item) => (
                    <Col
                        key={item.id}
                        className="mb-4"
                        md={4}
                        lg={3}
                        sm={12}
                        xs={12}
                    >
                        <Card
                            className="bg-dark border-secondary p-2"
                            onClick={() => {
                                navigate(`/playlists/${item.id}`);
                            }}
                        >
                            <Card.Img
                                variant="top"
                                src={
                                    item.songs.length
                                        ? item.songs[0].images.coverart
                                        : "https://www.shazam.com/resources/fac9bdbb3a97872257eaeda00b7ec6d5e5540903/nocoverart.jpg"
                                }
                                className="img-fluid rounded"
                            />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Playlist
                                </Card.Subtitle>
                                <Card.Text>
                                    {item.songs.length} song(s)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Outlet />
        </StyledPlaylists>
    );
};

export default Playlists;
