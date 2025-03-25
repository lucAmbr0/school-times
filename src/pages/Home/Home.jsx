import UpcomingEventsBox from "../../components/Boxes/UpcomingEventsBox/UpcomingEventsBox";
import UserClassBox from "../../components/Boxes/UserClassBox/UserClassBox";
import HorizontalLine from "../../components/Separator/HorizontalLine";
import SmallChip from "../../components/Boxes/SmallChip/SmallChip";
import styles from "./Home.module.css";
import SmallMateClassBox from "../../components/Boxes/SmallMateClassBox/SmallMateClassBox";
import { useData } from "../../scripts/useData";

function Home() {
  const [data, setData] = useData();

  const element = (
    <>
      <h1 className={styles.title}>
        Welcome, {data.user.name ? data.user.name : "Guest"} - {data.user.className}
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
        <SmallChip text={"School site"} iconName={"arrow_outward"} type={"link"} value={"./"} />
        <SmallChip text={"Classroom"} iconName={"arrow_outward"} type={"link"} value={"./"} />
      </div>
    </>
  );

  return element;
}

export default Home;
