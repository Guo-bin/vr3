import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";

import close from "public/images/icon/close.svg";
import Play from "components/AudioPlayer/Play";
import Pause from "components/AudioPlayer/Pause";

const AudioPlayer = ({ setOpenItem, openItem }) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  useEffect(() => {
    setIsPlaying(false);
  }, [openItem]);
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };
  const closeHandler = () => {
    audioPlayer.current.pause();
    setOpenItem(null);
  };
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  return (
    <div
      className={styles.audioPlayer}
      style={{ display: openItem == "LanguageGuide" ? "flex" : "none" }}>
      <audio
        ref={audioPlayer}
        src='https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3'
        preload='metadata'></audio>

      <button onClick={togglePlayPause} className={styles.playPause}>
        {isPlaying ? <Pause /> : <Play className={styles.play} />}
      </button>

      {/* current time */}

      {/* progress bar */}
      <div className={styles.barContainer}>
        <div className={styles.currentTime}>{calculateTime(currentTime)}</div>
        <input
          type='range'
          className={styles.progressBar}
          defaultValue='0'
          ref={progressBar}
          onChange={changeRange}
        />
        <div className={styles.duration}>
          {isNaN(duration) && "00:00"}
          {!isNaN(duration) && calculateTime(duration)}
        </div>
      </div>
      <img
        className={styles.close}
        src={close.src}
        alt=''
        onClick={closeHandler}
      />
      {/* duration */}
    </div>
  );
};

export { AudioPlayer };
