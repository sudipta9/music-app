import localforage from "localforage";

// playlists = {
//     playlists: [
//         {
//             name: "Playlist 1",
//             songs: [
//                 {
//                     id: 1,
//                     name: "Song 1",
//                     artist: "Artist 1",
//                 }
//             ]
//         }
//     ]
// }

export const getRecommendations = () => {
    const recommendations = localforage
        .getItem("recommendations")
        .then((value) => {
            return value;
        });
    return recommendations;
};

export const setRecommendations = (recommendations) => {
    localforage.setItem("recommendations", recommendations);
};

export const getPlaylist = () => {
    const playlist = localforage.getItem("playlists").then((value) => {
        return value;
    });
    return playlist;
};

export const createPlaylist = (playlistName) => {
    const playlist = getPlaylist();
    playlist.then((value) => {
        if (value) {
            value.playlists.push({
                name: playlistName,
                songs: [],
            });
            localforage.setItem("playlists", value);
        } else {
            localforage.setItem("playlists", {
                playlists: [
                    {
                        name: playlistName,
                        songs: [],
                    },
                ],
            });
        }
    });
};

export const addSongToPlaylist = (playlistName, song) => {
    const playlist = getPlaylist();
    playlist.then((value) => {
        value.playlists.forEach((playlist) => {
            if (playlist.name === playlistName) {
                playlist.songs.push(song);
            }
        });
        localforage.setItem("playlists", value);
    });
};
