import React, { useEffect, useState } from "react";
import moment from "moment";
import styles from "./index.module.scss";
import momentDurationFormatSetup from "moment-duration-format";

export default function Bar(props) {
  const { duration, curTime, onTimeUpdate } = props;
  const curPercentage = (curTime / duration) * 100;

  useEffect(() => {}, [duration]);
  function formatDuration(duration) {
    return moment
      .duration(duration, "seconds")
      .format("mm:ss", { trim: false });
  }

  function calcClickedTime(e) {
    e.preventDefault();
    const clickPositionInPage = e.pageX;
    const bar = document.getElementById("bar_progress");
    bar.setPointerCapture(e.pointerId);
    const barStart = bar.getBoundingClientRect().left;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    if (clickPositionInBar > barWidth) {
      return timePerPixel * barWidth;
    } else if (clickPositionInBar < 0) {
      return 0;
    }
    return timePerPixel * clickPositionInBar;
  }

  function handleTimeDrag(e) {
    onTimeUpdate(calcClickedTime(e));
    const updateTimeOnMove = (eMove) => {
      onTimeUpdate(calcClickedTime(eMove));
    };
    document.addEventListener("pointermove", updateTimeOnMove);
    document.addEventListener("pointerup", () => {
      document.removeEventListener("pointermove", updateTimeOnMove);
    });
  }

  return (
    <div className={styles.bar}>
      <span className={styles.bar__time_current}>
        {formatDuration(curTime)}
      </span>
      <div
        className={styles.bar__progress}
        id='bar_progress'
        style={{
          background: `linear-gradient(to right, #2E8AB7 ${curPercentage}%, #EEEEEE 0)`,
        }}
        onPointerDown={(e) => handleTimeDrag(e)}>
        <span
          className={styles.bar__progress__knob}
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
      <span className={styles.bar__time_end}>{formatDuration(duration)}</span>
    </div>
  );
}
