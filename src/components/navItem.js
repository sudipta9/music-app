import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const NavItemStyled = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    /* padding: 0.5rem 0.7rem; */
    padding-right: 7rem;
    margin-bottom: 0.3rem;
    transition: all 0.1s ease-in-out;
    &:hover {
        background-color: #2b3035;
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        padding-right: 16px;
    }
    @media screen and (max-width: 576px) {
        padding: 0.7rem !important;
    }

    span {
        margin-left: 0.5rem;
        @media screen and (max-width: 768px) {
            display: none;
        }
    }
    &.active {
        color: #0d6efd;
        position: relative;
        overflow: hidden;
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0.2rem;
            height: 100%;
            background-color: #0d6efd;
        }
    }
`;

const NavItem = ({ href, icon, title, ...props }) => {
    return (
        <NavItemStyled
            to={href}
            className="d-flex align-items-center py-2 ps-3"
        >
            <FontAwesomeIcon icon={icon} />
            <span>{title}</span>
        </NavItemStyled>
    );
};

export default NavItem;
