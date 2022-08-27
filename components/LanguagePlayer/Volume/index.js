import React, { useState } from "react";
import volumeSVG from "public/images/icon/volume.svg";
import styles from "./index.module.scss";
const Volume = ({ volume, onVolumeUpdate, setVolumeXX }) => {
  const [isShowVolume, setIsShowVolume] = useState(false);

  //max volume is 1;
  const volumePercentage = volume * 100;
  const calClickVolume = (e) => {
    e.preventDefault();
    const clickPositionInPage = e.pageY;
    const bar = document.getElementById("volumeBar");
    bar.setPointerCapture(e.pointerId);
    const barStart = bar.getBoundingClientRect().bottom;
    const barHeight = bar.offsetHeight;
    const clickPositionInBar = barStart - clickPositionInPage;
    const volumePerPixel = 1 / barHeight;

    if (volumePerPixel * clickPositionInBar > 1) {
      return 1;
    } else if (volumePerPixel * clickPositionInBar < 0) {
      return 0;
    }
    return volumePerPixel * clickPositionInBar;
  };

  const handleVolumeDrag = (e) => {
    e.stopPropagation();
    onVolumeUpdate(calClickVolume(e));
    const updateVolumeMove = (eMove) => {
      onVolumeUpdate(calClickVolume(eMove));
    };
    document.addEventListener("pointermove", updateVolumeMove);
    document.addEventListener("pointerup", () => {
      document.removeEventListener("pointermove", updateVolumeMove);
    });
  };

  return (
    <div className={styles.volume}>
      {isShowVolume && (
        <div className={styles.volumeBarContainer}>
          <div
            className={styles.volumeBar}
            id='volumeBar'
            style={{
              background: `linear-gradient(to top, #2E8AB7 ${volumePercentage}%, #EEEEEE 0)`,
            }}
            onPointerDown={(e) => handleVolumeDrag(e)}>
            <span
              className={styles.barKnob}
              style={{ bottom: `${volumePercentage - 2}%` }}
            />
          </div>
        </div>
      )}

      <img
        className={styles.img}
        src={volumeSVG.src}
        alt=''
        onClick={() => {
          setIsShowVolume(!isShowVolume);
          setVolumeXX();
        }}
      />
    </div>
  );
};

export default Volume;
