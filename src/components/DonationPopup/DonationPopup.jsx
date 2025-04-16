import Overlay from "../Overlay/Overlay";
import Button from "../Button/Button";
import styles from "./DonationPopup.module.css";
import { useState } from "react";
import { umamiTrack } from "../../scripts/umamiTrack";

function DonationPopup({ closeAction }) {
  const handleClose = () => {
    document
      .querySelector("#donationPopup")
      .classList.add(styles.animationClose);
    setTimeout(() => {
      closeAction();
    }, 200);
  };

  const openDonationPage = () => {
    window.open("https://bit.ly/3Y4FFO1", "_blank");
  };

  const choice = (isPositive) => {
    switch (isPositive) {
      case true:
        umamiTrack("donationPopup", { choice: "Yes" });
        openDonationPage();
        break;
      case false:
        umamiTrack("donationPopup", { choice: "No" });
        break;
      default:
        break;
    }
    handleClose();
  };

const [secondImageLoaded, setSecondImageLoaded] = useState(false);

const handleSecondImageLoad = () => {
    setSecondImageLoaded(true);
};

const element = (
    <>
        <Overlay blur="10px" color="rgba(0,0,0, 0.2)" zIndex={110} />
        <div id="donationPopup" className={styles.container}>
            <h2 className={styles.title}>
                {!secondImageLoaded && (
                    <img
                        className={styles.donateImg}
                        src="https://storage.ko-fi.com/cdn/brandasset/v2/kofi_symbol.png"
                        alt="Donate campaign placeholder"
                    />
                )}
                <img
                    className={styles.donateImg}
                    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjIyMWt3bHl5NWdwczl1a2tueGt2Y2l4NjV2MGZyZTdmN2UzcHlwZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vul9XSAk6iZZ60659C/giphy.webp"
                    alt="Donate campaign image"
                    onLoad={handleSecondImageLoad}
                    style={{ display: secondImageLoaded ? "block" : "none" }}
                />
                <span>Enjoying the app?</span>
            </h2>
            <h4 className={styles.subtitle}>
                If it's been helpful to you, consider supporting it with a small donation ☕
            </h4>
            <div className={styles.choicesContainer}>
                <Button
                    variant="outlined"
                    text="No"
                    iconName="close"
                    onClick={() => choice(false)}
                />
                <Button
                    text="Yes"
                    iconName="volunteer_activism"
                    onClick={() => choice(true)}
                />
            </div>
        </div>
    </>
);

  return element;
}

export default DonationPopup;
