import ButtonTable from '../../components/Table/ButtonTable';
import UserClassBox from '../../components/Boxes/UserClassBox/UserClassBox';
import styles from './Home.module.css';

function Home() {

  const element = (
    <>
    <h1 className={styles.title}>Welcome, Guest - 0Z</h1>
    <UserClassBox room='Room 25' subject='History' teacher='Mr. Idontknow' />
    <ButtonTable />
  </>
  )
  
  return ( element );
}

export default Home;
