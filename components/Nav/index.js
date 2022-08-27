import React, { memo } from "react";
import Instruction from "./Instruction";
import LanguageGuide from "./LanguageGuide";
import ViewInstruction from "./ViewInstruction";
import ViewGuide from "./ViewGuide";
import LanguagePlayer from "components/LanguagePlayer";
import ChangeLanguage from "./ChangeLanguage";
import Thumbnail from "./Thumbnail";
import styles from "./index.module.scss";
const Nav = ({ setOpenItem, openItem }) => {
  const clickItemHandler = (e) => {
    const clickItemName = e.target.id;
    if (openItem !== clickItemName) {
      setOpenItem(clickItemName);
    } else {
      setOpenItem(null);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navItem} onClick={clickItemHandler}>
        <Thumbnail />
        <Instruction setOpenItem={setOpenItem} />
        <LanguageGuide setOpenItem={setOpenItem} />
        <ViewInstruction setOpenItem={setOpenItem} />
        <ViewGuide setOpenItem={setOpenItem} />
        <ChangeLanguage setOpenItem={setOpenItem} openItem={openItem} />
      </div>
      <div className={styles.languagePlayer}>
        {/* <Player /> */}
        {openItem == "LanguageGuide" && (
          <LanguagePlayer setOpenItem={setOpenItem} />
        )}
        {/* <audio src='./song.mp3' id='audio' controls></audio> */}
      </div>
    </nav>
  );
};
const NavComponent = memo(Nav);
export default NavComponent;
