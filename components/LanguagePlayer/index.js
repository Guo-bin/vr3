import React, { useEffect } from "react";
import useAudioPlayer from "./useAudioPlayer";
import ProgressBar from "./ProgressBar";
import Play from "./Play";
import Pause from "./Pause";
import close from "public/images/icon/close.svg";
import styles from "./index.module.scss";

const LanguagePlayer = ({ setOpenItem }) => {
  const { curTime, duration, playing, setPlaying, setClickedTime } =
    useAudioPlayer();
  // useEffect(() => {
  //   function preventBehavior(e) {
  //     e.preventDefault();
  //   }
  //   document.addEventListener("touchmove", preventBehavior, { passive: false });
  // }, []);
  const closeHandler = () => {
    setOpenItem(null);
  };
  return (
    <div className={styles.languagePlayer}>
      <div className={styles.playButton}>
        {playing ? (
          <Pause
            handleClick={() => {
              setPlaying(false);
            }}
          />
        ) : (
          <Play
            handleClick={() => {
              setPlaying(true);
            }}
          />
        )}
      </div>
      <div className={styles.progress}>
        <ProgressBar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={(time) => setClickedTime(time)}
        />
      </div>
      <img
        className={styles.close}
        src={close.src}
        alt=''
        onClick={closeHandler}
      />
      <audio
        src='https://sf1-scmcdn-tos.pstatp.com/goofy/ee/sce/hera/music/She-Sells-Sea-Shells.mp3'
        id='audio'
        crossOrigin='
        anonymous'
        preload='meta'></audio>
    </div>
  );
};

export default LanguagePlayer;
