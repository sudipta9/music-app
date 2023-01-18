import React from "react";
import { Form } from "react-bootstrap";

const PlaylistItem = ({ playlistName, playlistId, setValue }) => {
    return (
        <Form.Check className="py-2">
            <Form.Check.Input
                type="radio"
                name="playlist"
                id={playlistId}
                value={playlistName}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <Form.Check.Label
                htmlFor={playlistId}
                style={{
                    color: "#fff",
                    cursor: "pointer",
                }}
            >
                {playlistName}
            </Form.Check.Label>
        </Form.Check>
    );
};

export default PlaylistItem;
