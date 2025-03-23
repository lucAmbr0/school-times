import ButtonTable from '../../components/Table/ButtonTable';
import UserClassBox from '../../components/Boxes/UserClassBox/UserClassBox';
import HorizontalLine from '../../components/Separator/HorizontalLine';
import styles from './Home.module.css';
import SmallMateClassBox from '../../components/Boxes/SmallMateClassBox/SmallMateClassBox';

function Home() {

  const element = (
    <>
    <h1 className={styles.title}>Welcome, Guest - 0Z</h1>
    <UserClassBox room='Room 25' subject='History' teacher='Mr. Idontknow' />
    <HorizontalLine length={"85%"} height={"1px"} margin={"20px auto"} color={"var(--palette-300)"} alpha={1} />
    <SmallMateClassBox className={"4IB"} room={"Room 30"} subject={"History"} teacher={"Mrs. Idontknow"} />
  </>
  )
  
  return ( element );
}

export default Home;
