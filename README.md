# Xfinite Mix

A modern music streaming web app (Spotify/Koel-style) powered by the Navidrome API.

## Features

- Responsive dark UI (TailwindCSS)
- Login via Navidrome API
- Browse artists, albums, tracks, playlists
- Full-featured audio player (queue, seek, volume)
- Playlist management
- Easy configuration via `.env`

## Getting Started

1. Clone this repo
2. Copy `.env.example` to `.env` and set your Navidrome endpoint
3. Install dependencies

    ```bash
    npm install
    ```

4. Run development server

    ```bash
    npm run dev
    ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Customize

- Edit `src/pages/LibraryPage.jsx` to add library browsing
- Extend `src/components/PlayerBar.jsx` for audio controls
- Add authentication logic in `src/pages/LoginPage.jsx`

## License

MIT