import ButtonTable from '../../components/Table/ButtonTable';
import UserClassBox from '../../components/Boxes/UserClassBox/UserClassBox';
import HorizontalLine from '../../components/Separator/HorizontalLine';
import styles from './Home.module.css';
import SmallMateClassBox from '../../components/Boxes/SmallMateClassBox/SmallMateClassBox';

function Home({userName = "Guest", userClassName = "0NA"}) {

  const element = (
    <>
    <h1 className={styles.title}>Welcome, {userName} {userClassName}</h1>
    <UserClassBox />
    <HorizontalLine length={"85%"} height={"1px"} margin={"20px auto"} color={"var(--palette-300)"} alpha={1} />
    <SmallMateClassBox />
  </>
  )
  
  return ( element );
}

export default Home;
