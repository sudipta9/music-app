import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/sidebar";
// import { fetchPlayList } from "../redux/reducers/playlist";
const StyledDefaultLayout = styled.div`
    overflow-x: hidden;
`;
const DefaultLayout = () => {
    // const dispatch = useDispatch();
    // const playlistState = useSelector((state) => state.playlist);

    // useEffect(() => {
    //     console.log("playlistState", playlistState);
    // }, [playlistState]);
    return (
        <StyledDefaultLayout className="d-flex bg-dark text-white justify-content-start">
            {/* hide sidebar on small screens */}
            <Sidebar />
            <Outlet />
        </StyledDefaultLayout>
    );
};

export default DefaultLayout;
