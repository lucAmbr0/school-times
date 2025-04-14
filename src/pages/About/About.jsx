import PageHeader from "../../components/PageHeader/PageHeader";
import packageJson from "../../../package.json";
import HorizontalLine from "../../components/Separator/HorizontalLine";
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
          <ExternalLink
            name={"Tutorials"}
            displayUrl={
              "https://github.com/lucAmbr0/school-times#zap-usage"
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
            displayUrl={
              "https://forms.gle/nns5LJANJ6MCBNdz9"
            }
            url={"https://bit.ly/3G7uAFI"}
          />
          <ExternalLink
            name={"Bug report"}
            displayUrl={
              "https://forms.gle/RDRTPP1KYAmF7RJJ9"
            }
            url={"https://bit.ly/42lYo8Q"}
          />
          <ExternalLink
            name={"Rate this app"}
            displayUrl={
              "https://forms.gle/ZV4ooh5oatUTB2AB9"
            }
            url={"https://bit.ly/4jahSVt"}
          />
        </div>
      </div>
    </>
  );

  return element;
}

export default About;
