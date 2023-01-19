This is simple music player UI built with ReactJS. It uses the [shazam API](https://rapidapi.com/apidojo/api/shazam) to fetch the music data.

The features include:

- Search for music and artist
- Play music (redirect to the music source)
- Create playlist
- Add music to playlist
- Remove music from playlist
- Play music from playlist
- add music to favorite
- remove music from favorite
- play music from favorite

# Demo

## home

![Home](demo/home.png)

## create new playlist

![create new playlist](demo/create-playlist.png)

## add music to playlist

![add music to playlist](demo/add-to-playlist.png)

# search

![Search](demo/search.png)

# playlist

![Playlist](demo/playlists.png)

# favorite

![Favorite](demo/favorites.png)

# Install dependencies
```bash
yarn install
```

# add env variables

```
REACT_APP_RAPIAPI_KEY=<your key>
REACT_APP_RAPIDAPI_HOST=<your host>
```

# to run the app in development mode

```Bash
yarn start
```

# to build the app

```
yarn add -g serve
yarn build
serve -s build
```