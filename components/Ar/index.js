import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import "aframe-extras";
import useWindowSize from "utils/windowSize";
import styles from "./index.module.scss";
const Ar = () => {
  const sceneRef = useRef(null);
  const [isOrientationChange, setIsOrientationChange] = useState();
  // const windowSize = useWindowSize();
  useEffect(() => {
    const sceneEl = sceneRef.current;
    if (sceneEl) {
      const arSystem = sceneEl.systems["mindar-image-system"];
      sceneEl.addEventListener("renderstart", () => {
        arSystem.start(); // start AR
      });
    }
    return () => {
      arSystem.stop();
    };
  }, [sceneRef.current]);

  return (
    <>
      <div className={styles.container}>
        <a-scene
          ref={sceneRef}
          mindar-image='imageTargetSrc: /mind/targets.mind; autoStart: false; uiLoading: no; uiError: no; uiScanning: no;'
          color-space='sRGB'
          embedded
          renderer='colorManagement: true, physicallyCorrectLights'
          vr-mode-ui='enabled: false'
          device-orientation-permission-ui='enabled: false'>
          <a-assets>
            <a-asset-item id='avatarModel' src='/glb/women.glb'></a-asset-item>
          </a-assets>
          <a-camera position='0 0 0' look-controls='enabled: false'></a-camera>
          <a-entity mindar-image-target='targetIndex: 0'>
            <a-gltf-model
              rotation='0 0 0 '
              position='0 0 0.1'
              scale='0.005 0.005 0.005'
              src='#avatarModel'
              animation-mixer='clip:Bip001|Take 001|BaseLayer'></a-gltf-model>
          </a-entity>
          <a-entity
            light='color: #fff; intensity: 2'
            position='0 0 2'
            type='directional'></a-entity>
        </a-scene>
      </div>
    </>
  );
};
export default Ar;
