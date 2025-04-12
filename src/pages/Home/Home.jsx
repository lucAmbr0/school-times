import UpcomingEventsBox from "../../components/Boxes/UpcomingEventsBox/UpcomingEventsBox";
import UserClassBox from "../../components/Boxes/UserClassBox/UserClassBox";
import HorizontalLine from "../../components/Separator/HorizontalLine";
import SmallChip from "../../components/Boxes/SmallChip/SmallChip";
import styles from "./Home.module.css";
import SmallMateClassBox from "../../components/Boxes/SmallMateClassBox/SmallMateClassBox";
import { useData } from "../../scripts/useData";

function Home() {
  const [data] = useData();

  const widgets = data.settings.widgets || {
    matesTimetables: true,
    upcomingEvents: true,
    coffeeKey: true,
    homework: true,
  };

  const day = (new Date().getDay() + 6) % 7;
  const hour = new Date().getHours() - 7;

  const openLink = (url) => {
    window.open(url, "_blank");
  }
  
  const element = (
    <>
      <h1 className={styles.title}>
        Welcome, {data.user.name ? data.user.name : "Guest"}
        {data.user.className !== "you" && data.user.className
          ? " - " + data.user.className
          : ""}
      </h1>
      <UserClassBox day={day} hour={hour} showProgress={true} />
      <HorizontalLine
        length={"85%"}
        height={"1px"}
        margin={"20px auto"}
        color={"var(--palette-300)"}
        alpha={1}
      />
      <div className={styles.smallBoxesContainer}>
        {widgets.matesTimetables ? <SmallMateClassBox /> : ""}
        {widgets.upcomingEvents ? <UpcomingEventsBox /> : ""}
        {widgets.coffeeKey ? (
          <SmallChip
            text={"Coffee key"}
            iconName={"local_cafe"}
            type={"euro"}
            value={0}
          />
        ) : (
          ""
        )}
        {widgets.homework ? (
          <SmallChip text={"Homework"} iconName={"lists"} type={"progress"} />
        ) : (
          ""
        )}
        {widgets.link1.visible ? <SmallChip
          text={data.settings.widgets.link1.label}
          iconName={"arrow_outward"}
          type={"link"}
          value={widgets.link1.url}
          onClick={() => openLink(widgets.link1.url)}
          /> : ""}
        {widgets.link2.visible ? <SmallChip
          text={data.settings.widgets.link2.label}
          iconName={"arrow_outward"}
          type={"link"}
          value={widgets.link2.url}
          onClick={() => openLink(widgets.link2.url)}
        /> : ""}
      </div>
    </>
  );

  return element;
}

export default Home;
