import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledSearch = styled(Container)`
    height: 100vh;
    overflow-y: scroll;

    .search-input-area {
        position: relative;
        width: 100%;
        max-width: 500px;
        margin-bottom: 1rem;
    }
    .search-icon {
        position: absolute;
        top: 50%;
        right: 2rem;
        transform: translateY(-50%);
        color: #fff;
    }
`;

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const searchQueryRef = React.useRef(null);
    const { songName } = useParams();

    useEffect(() => {
        setSearchQuery(songName || "");
        searchQueryRef.current.focus();
    }, [songName]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery) {
                navigate(`/search/${searchQuery}`);
            } else {
                navigate(`/search`);
            }
        }, 500);
        return () => {
            console.log("clearing timeout");
            clearTimeout(timer);
        };
    }, [searchQuery, navigate]);

    return (
        <StyledSearch className="p-4">
            {/* <h1>Search</h1> */}
            <div className="search-input-area container">
                <input
                    type="text"
                    className="form-control bg-dark text-white rounded-pill"
                    placeholder="Search for a song"
                    ref={searchQueryRef}
                    value={searchQuery}
                    onChange={() =>
                        setSearchQuery(searchQueryRef.current.value)
                    }
                />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            <Outlet />
        </StyledSearch>
    );
};

export default Search;
