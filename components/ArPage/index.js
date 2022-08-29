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
  const [isBtnShow, setBtnIsShow] = useState(false);
  const [orientation, setOrientation] = useState(null);
  const [CmaIsOpen, setCmaIsOpen] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    if (windowSize.height > windowSize.width) {
      setOrientation(true);
    } else {
      setOrientation(false);
    }
  }, [windowSize.width]);
  useEffect(() => {
    if (typeof window !== undefined) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((e) => {
          setCmaIsOpen(true);
        })
        .catch((e) => {
          setCmaIsOpen(false);
        });
    }
  }, []);
  return (
    <>
      {!CmaIsOpen && <CameraAuth />}
      {orientation ? (
        <div className={styles.arPage}>
          {openItem !== "ViewGuidePage" &&
            openItem !== "ViewInstructionPage" && <Title />}

          <Nav setOpenItem={setOpenItem} openItem={openItem} />
          <section>
            {openItem == "ImageExamplePage" && (
              <ImageExamplePage
                setOpenItem={setOpenItem}
                isBtnShow={isBtnShow}
                setBtnIsShow={setBtnIsShow}
              />
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
