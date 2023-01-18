import {
    faHouse,
    faList,
    faSearch,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";
import NavItem from "./navItem";
import SidebarAccountItem from "./sidebarAccountItem";

const StyledSidebar = styled.div`
    min-height: 100vh;
    transition: all 0.2s ease-in-out;
    .logo {
        &-img {
            height: 50px;
            @media screen and (max-width: 768px) {
                height: 40px;
            }
        }
        &-img-text {
            color: #fff;
            font-size: 1.5rem;
            font-weight: 700;
            margin: 0;
            @media screen and (min-width: 768px) {
                display: none;
            }
        }
        h3 {
            color: #fff;
            font-size: 1.5rem;
            @media screen and (max-width: 768px) {
                display: none;
            }
        }
    }
    .nav {
        margin-top: 2rem;
    }
`;

const Sidebar = () => {
    return (
        <StyledSidebar className="border-end border-secondary d-flex flex-column justify-content-between p-2">
            <div className="d-flex flex-column align-items-center mt-3">
                <div className="logo d-flex align-items-center mb-3">
                    {/* <img
                        src="https://picsum.photos/50"
                        alt="logo"
                        className="logo-img"
                    /> */}
                    <p className="logo-img-text">MP</p>
                    <h3>Music Player</h3>
                </div>
                <div className="nav d-flex flex-column">
                    <NavItem href="/" icon={faHouse} title="Home" />
                    <NavItem href="/search" icon={faSearch} title="Search" />
                    <NavItem
                        href="/favorites"
                        icon={faStar}
                        title="Favorites"
                    />
                    <NavItem
                        href="/playlists"
                        icon={faList}
                        title="Playlists"
                    />
                </div>
            </div>
            <SidebarAccountItem />
        </StyledSidebar>
    );
};

export default Sidebar;
