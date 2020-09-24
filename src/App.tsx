import React, { useState } from "react";
import "./App.css";
import videos from "./assets/videos";

function App() {
  const [currentSong, setCurrentSong] = useState(videos.songs[0]);
  return (
    <div className="App">
      <h4>Selamat Datang Semua</h4>
      <video key={currentSong.video} width="400" controls autoPlay={true}>
        <source src={currentSong.video} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <hr />
      {videos.songs.map((song, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              console.log("SONG", song);
              setCurrentSong(song);
            }}
          >
            {song.title}
          </button>
        );
      })}
    </div>
  );
}

export default App;
