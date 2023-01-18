import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import PlaylistItem from "./playlistItem";

const AddSongToPlaylistModal = ({
    show,
    onHide,
    showCreatePlaylist,
    playlist,
    onAddSongToPlaylist,
}) => {
    const [selectedPlaylist, setSelectedPlaylist] = useState("");
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header className="bg-dark text-white border-secondary">
                <Modal.Title>Add Song to Playlist</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white  border-secondary">
                <div className="form-group">
                    {playlist.map((item, index) => {
                        return (
                            <PlaylistItem
                                playlistId={index}
                                playlistName={item.name}
                                setValue={setSelectedPlaylist}
                                key={index}
                            />
                        );
                    })}
                </div>
            </Modal.Body>
            <Modal.Footer className="bg-dark text-white border-secondary">
                <button
                    className="btn btn-danger"
                    onClick={() => {
                        onHide();
                        showCreatePlaylist();
                    }}
                >
                    Create Playlist
                </button>
                <button className="btn btn-secondary" onClick={onHide}>
                    Close
                </button>
                <button
                    className="btn btn-primary"
                    onClick={(e) => {
                        e.preventDefault();
                        onAddSongToPlaylist(selectedPlaylist);
                        onHide();
                    }}
                >
                    Add
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddSongToPlaylistModal;
