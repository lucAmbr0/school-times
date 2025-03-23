import UpcomingEventsBox from "../../components/Boxes/UpcomingEventsBox/UpcomingEventsBox";
import UserClassBox from "../../components/Boxes/UserClassBox/UserClassBox";
import HorizontalLine from "../../components/Separator/HorizontalLine";
import SmallChip from "../../components/Boxes/SmallChip/SmallChip";
import styles from "./Home.module.css";
import SmallMateClassBox from "../../components/Boxes/SmallMateClassBox/SmallMateClassBox";

function Home({ userName = "Guest", userClassName = "0NA" }) {
  const element = (
    <>
      <h1 className={styles.title}>
        Welcome, {userName} - {userClassName}
      </h1>
      <UserClassBox />
      <HorizontalLine
        length={"85%"}
        height={"1px"}
        margin={"20px auto"}
        color={"var(--palette-300)"}
        alpha={1}
      />
      <div className={styles.smallBoxesContainer}>
        <SmallMateClassBox />
        <UpcomingEventsBox />
        <SmallChip text={"Card balance"} iconName={"account_balance_wallet"} type={"euro"} />
        <SmallChip text={"Homework"} iconName={"lists"} type={"progress"} />
        <SmallChip text={"School site"} iconName={"arrow_outward"} type={"link"} />
        <SmallChip text={"Classroom"} iconName={"arrow_outward"} type={"link"} />
      </div>
    </>
  );

  return element;
}

export default Home;
