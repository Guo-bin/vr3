import React, { memo } from "react";
import Info from "./Info";
import LanguageGuide from "./LanguageGuide";
import Intro from "./Intro";
import Attractions from "./Attractions";
import { AudioPlayer } from "components/AudioPlayer";
import ChangeLanguage from "./ChangeLanguage";
import Thumbnail from "./Thumbnail";
import styles from "./index.module.scss";
const Nav = ({ setOpenItem, openItem, language, setLanguage }) => {
  const clickItemHandler = (e) => {
    const clickItemName = e.target.id;
    if (openItem !== clickItemName) {
      setOpenItem(clickItemName);
    } else {
      const audio = document.querySelector("audio");
      if (audio) {
        audio.pause();
      }
      setOpenItem(null);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navItem} onClick={clickItemHandler}>
        <Thumbnail />
        <Info setOpenItem={setOpenItem} language={language} />
        <LanguageGuide setOpenItem={setOpenItem} language={language} />
        <Intro setOpenItem={setOpenItem} language={language} />
        <Attractions setOpenItem={setOpenItem} language={language} />
        <ChangeLanguage
          setOpenItem={setOpenItem}
          openItem={openItem}
          setLanguage={setLanguage}
          language={language}
        />
      </div>
      <div className={styles.languagePlayer}>
        <AudioPlayer setOpenItem={setOpenItem} openItem={openItem} />
      </div>
    </nav>
  );
};
const NavComponent = memo(Nav);
export default NavComponent;
