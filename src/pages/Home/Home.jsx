import ButtonTable from '../../components/Table/ButtonTable';
import styles from './Home.module.css';

function Home() {

  const element = (
    <>
    <h1 className={styles.title}>Welcome, Guest - 0Z</h1>
    <ButtonTable />
  </>
  )
  
  return ( element );
}

export default Home;
