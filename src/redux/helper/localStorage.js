import localforage from "localforage";

export const getRecommendations = async () => {
    var recommendations = await localforage
        .getItem("recommendations")
        .then((value) => {
            return value;
        });
    return recommendations;
};

export const setRecommendations = (recommendations) => {
    localforage.setItem("recommendations", recommendations);
};

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

export const getPlaylist = async () => {
    const playlist = await localforage.getItem("playlists");
    return playlist;
};

export const createPlaylist = async (playlist) => {
    const playlists = await getPlaylist();
    if (!playlists) {
        const newPlaylist = {
            playlists: [
                {
                    id: playlist.replace(/\s+/g, "-").toLowerCase(),
                    name: playlist,
                    songs: [],
                },
            ],
        };
        localforage.setItem("playlists", newPlaylist);
        return newPlaylist;
    }
    if (playlists) {
        // check playlist already exists
        const index = playlists.playlists.findIndex(
            (item) => item.name === playlist
        );
        if (index === -1) {
            playlists.playlists.push({
                id: playlist.replace(/\s+/g, "-").toLowerCase(),
                name: playlist,
                songs: [],
            });
        }
        localforage.setItem("playlists", playlists);
    }
    return playlists;
};

export const addSong = async (playlist, song) => {
    const playlists = await getPlaylist();
    const index = playlists.playlists.findIndex(
        (item) => item.name === playlist
    );
    playlists.playlists[index].songs.push(song);
    localforage.setItem("playlists", playlists);
    return playlists;
};
