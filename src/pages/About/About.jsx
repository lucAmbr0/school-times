import PageHeader from "../../components/PageHeader/PageHeader";
import packageJson from "../../../package.json";
import HorizontalLine from "../../components/Separator/HorizontalLine";
import { umamiTrack } from "../../scripts/umamiTrack";
import ExternalLink from "../../components/ExternalLink/ExternalLink";
import { useData } from "../../scripts/useData";
import useVibration from "../../scripts/useVibration";
import styles from "./About.module.css";

function About({ onBack }) {
  const vibrate = useVibration();
  const [data, setData] = useData();

  const handleBack = () => {
    vibrate(5);
    document.querySelector("#aboutPage").classList.add(styles.exitAnimation);
    document.querySelector("#pageHeader").classList.add(styles.exitAnimation);
    setTimeout(() => {
      onBack();
    }, 300);
  };

  const handleClickDonationImg = () => {
    vibrate(5);
    umamiTrack("donation-about-clicked");
    window.open("https://bit.ly/3Y4FFO1", "_blank");
  };

  const handleSignatureClick = () => {
    vibrate(5);
    umamiTrack("signature-about-clicked");
    window.open("https://github.com/lucAmbr0")
  }

  const element = (
    <>
      <PageHeader handleBack={handleBack} />
      <div id="aboutPage" className={styles.container}>
        <h1 className={styles.title}>About</h1>
        <div className={styles.grid}>
          <label className={styles.label} htmlFor="versionInAbout">
            App version
          </label>
          <p className={styles.label} id="versionInAbout">
            v{packageJson.version}
          </p>
          <button
            onClick={handleClickDonationImg}
            className={styles.donationBtn}
          >
            <img
              src="https://storage.ko-fi.com/cdn/generated/fhfuc7slzawvi/2025-04-12_rest-a79d5e1b01cc7b09aa44f99e0e6f2d06-w2eypt8y.jpg"
              alt="Donate campaign image"
            />
          </button>
          <ExternalLink
            name={"Tutorials"}
            displayUrl={"https://github.com/lucAmbr0/school-times#zap-usage"}
          />
          <ExternalLink
            name={"Contribute"}
            displayUrl={
              "Help me integrate ClasseViva API into this app to help italian students"
            }
            url={
              "https://github.com/lucAmbr0/school-times/tree/main#fire-contribution"
            }
          />
        </div>
        <HorizontalLine
          margin={"20px auto"}
          length={"calc(100% - 40px)"}
          alpha={1}
          color={"var(--palette-300)"}
        />
        <h3 className={styles.sectionTitle}>Repository links</h3>
        <div className={styles.linksContainer}>
          <ExternalLink
            name={"GitHub Repository"}
            displayUrl={"https://github.com/lucAmbr0/school-times/"}
          />
          <ExternalLink
            name={"Changelog"}
            displayUrl={
              "https://github.com/lucAmbr0/school-times/commits/main/"
            }
          />
          <ExternalLink
            name={"Download source code"}
            displayUrl={
              "https://github.com/lucAmbr0/school-times/archive/refs/heads/main.zip"
            }
          />
          <ExternalLink
            name={"License GPL-3.0"}
            displayUrl={
              "https://github.com/lucAmbr0/school-times/blob/master/LICENSE"
            }
          />
        </div>
        <h3 className={styles.sectionTitle}>Send feedback</h3>
        <div className={styles.linksContainer}>
          {/* <ExternalLink
            name={"Email me"}
            displayUrl={"./"}
          /> */}
          <ExternalLink
            name={"Feature request"}
            displayUrl={"https://forms.gle/nns5LJANJ6MCBNdz9"}
            url={"https://bit.ly/3G7uAFI"}
          />
          <ExternalLink
            name={"Bug report"}
            displayUrl={"https://forms.gle/RDRTPP1KYAmF7RJJ9"}
            url={"https://bit.ly/42lYo8Q"}
          />
          <ExternalLink
            name={"Rate this app"}
            displayUrl={"https://forms.gle/ZV4ooh5oatUTB2AB9"}
            url={"https://bit.ly/4jahSVt"}
          />
        </div>
          <p onClick={handleSignatureClick} className={styles.footerSignature}>Made by lucAmbr0
          <img
            src="data:image/png;base64,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"
            width={"18px"}
            alt="Italian flag"
          />
          </p>
      </div>
    </>
  );

  return element;
}

export default About;
