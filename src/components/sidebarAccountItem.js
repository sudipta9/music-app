import {
    faArrowRightFromBracket,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledDropdown = styled(Dropdown)`
    .dropdown-toggle {
        outline: none;
        border: none;
        &::after {
            display: none;
        }
        img {
            height: 50px;
            @media screen and (max-width: 768px) {
                height: 40px;
            }
            @media screen and (max-width: 576px) {
                height: 30px;
            }
        }
        span.username {
            font-size: 1.2rem;
            transition: all 0.2s ease-in-out;
            @media screen and (max-width: 768px) {
                display: none;
            }
        }
    }
`;

const SidebarAccountItem = () => {
    return (
        <StyledDropdown className="d-flex align-items-center justify-content-center">
            <Dropdown.Toggle
                variant="transparent"
                className="text-white py-0 px-0 py-md-2 d-flex align-items-center"
            >
                <img
                    src="https://picsum.photos/50"
                    alt=""
                    className="rounded-circle m-0 me-md-2"
                />
                <span className="username">Username</span>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-dark p-md-2">
                <NavLink
                    className="dropdown-item d-flex align-items-center mb-1 rounded"
                    to="/profile"
                >
                    <FontAwesomeIcon icon={faUser} className="me-2" />
                    Profile
                </NavLink>
                <button className="dropdown-item d-flex align-items-center rounded">
                    <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        className="me-2"
                    />
                    Logout
                </button>
            </Dropdown.Menu>
        </StyledDropdown>
    );
};

export default SidebarAccountItem;
