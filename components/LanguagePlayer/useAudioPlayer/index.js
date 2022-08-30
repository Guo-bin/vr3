import { useState, useEffect } from "react";

function useAudioPlayer() {
  const [duration, setDuration] = useState();
  const [curTime, setCurTime] = useState();
  const [playing, setPlaying] = useState();
  const [clickedTime, setClickedTime] = useState(false);

  useEffect(() => {
    const audio = document.getElementById("audio");
    audio.addEventListener("timeupdate", () => {
      setCurTime(audio.currentTime);
    });
    audio.addEventListener("canplaythrough", () => {
      setAudioData();
    });
    audio.addEventListener("ended", () => {
      setPlaying(false);
    });
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    };

    return () => {
      audio.removeEventListener("timeupdate", () => {
        setCurTime(audio.currentTime);
      });
      audio.removeEventListener("canplaythrough", () => {
        setAudioData();
      });
      audio.removeEventListener("ended", () => {
        setPlaying(false);
      });
    };
  }, []);

  useEffect(() => {
    const audio = document.getElementById("audio");

    playing ? audio.play() : audio.pause();
    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setCurTime(audio.currentTime);
      setClickedTime(null);
    }
  }, [playing, clickedTime, curTime]);

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    setDuration,
  };
}

export default useAudioPlayer;
