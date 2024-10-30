import React, { useState, useRef } from 'react';
import '../styles/MusicPlayer.css';
import albumCover from '../images/albumCover.jpg';
import audio from '../media/audio_player.mp3';

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player">
            <audio ref={audioRef} src={audio} loop />
            <div className={`disk ${isPlaying ? 'spin' : ''}`}>
                <div className="album-cover">
                    <img src={albumCover} alt="Album Cover" />
                </div>
            </div>
            <button onClick={handlePlayPause}>
                {isPlaying ? '||' : '▷'}
            </button>
        </div>
    );
};

export default MusicPlayer;