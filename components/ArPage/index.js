import React, { useEffect, useState, memo, useLayoutEffect } from "react";
import Nav from "components/Nav";
import ViewInstructionPage from "components/ViewInstructionPage";
import useWindowSize from "utils/windowSize";
import ViewGuidePage from "components/ViewGuidePage";
import ImageExamplePage from "components/ImageExamplePage";
import Title from "components/Title";
import CameraAuth from "components/CameraAuth";
import InstructionPage from "components/InstructionPage";
import Orientation from "components/Orientation";
import styles from "./index.module.scss";
const ArPage = () => {
  const [openItem, setOpenItem] = useState("ImageExamplePage");
  const [orientation, setOrientation] = useState(null);
  const [CmaIsOpen, setCmaIsOpen] = useState(true);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.height > windowSize.width) {
      setOrientation(true);
    } else {
      setOrientation(false);
    }
    // if (typeof window !== undefined) {
    //   navigator.mediaDevices
    //     .getUserMedia({ video: true })
    //     .then((e) => {
    //       setCmaIsOpen(true);
    //     })
    //     .catch((e) => {
    //       setCmaIsOpen(false);
    //     });
    // }
  }, [windowSize.width]);

  return (
    <>
      {/* {!CmaIsOpen && <CameraAuth />} */}
      {orientation ? (
        <div className={styles.arPage}>
          <Title />
          <Nav setOpenItem={setOpenItem} openItem={openItem} />
          <section>
            {openItem == "ImageExamplePage" && (
              <ImageExamplePage setOpenItem={setOpenItem} />
            )}
            {openItem == "InstructionPage" && (
              <InstructionPage setOpenItem={setOpenItem} />
            )}
            {openItem == "ViewInstructionPage" && (
              <ViewInstructionPage setOpenItem={setOpenItem} />
            )}
            {openItem == "ViewGuidePage" && (
              <ViewGuidePage setOpenItem={setOpenItem} />
            )}
          </section>
        </div>
      ) : (
        <Orientation />
      )}
    </>
  );
};
const ArPageComponent = memo(ArPage);
export default ArPageComponent;
