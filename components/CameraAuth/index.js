import React, { useEffect, useState } from "react";
import phoneCma from "public/images/icon/phoneCma.svg";
import useCheckPhoneType from "./useCheckPhoneType";
import IOS from "./IOS";
import Android from "./Android";
import styles from "./index.module.scss";
const CameraAuth = () => {
  const phoneType = useCheckPhoneType();
  return (
    <div className={styles.cameraAuth}>
      {phoneType == "IOS" && <IOS />}
      {phoneType == "Android" && <Android />}
    </div>
  );
};

export default CameraAuth;
