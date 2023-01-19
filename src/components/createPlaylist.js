import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const CreatePlaylist = ({ show, onHide, onAddNewPlayList }) => {
    const [playlistName, setPlaylistName] = useState("");
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header className="bg-dark text-white border-secondary">
                <Modal.Title>Create new Playlist</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-white  border-secondary">
                <div className="form-group">
                    <label className="mb-2">Playlist Name</label>
                    <input
                        type="text"
                        className="form-control bg-dark text-white"
                        placeholder="Playlist Name"
                        value={playlistName}
                        onChange={(e) => {
                            setPlaylistName(e.target.value);
                        }}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer className="bg-dark text-white border-secondary">
                <button className="btn btn-secondary" onClick={onHide}>
                    Close
                </button>
                <button
                    className="btn btn-primary"
                    onClick={(e) => {
                        e.preventDefault();
                        onAddNewPlayList(playlistName);
                        setPlaylistName("");
                        onHide();
                    }}
                >
                    Create
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreatePlaylist;
