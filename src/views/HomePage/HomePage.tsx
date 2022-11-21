import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => <div className={styles.homePageContainer}>
    <Link to="/businesses/GXvPAor1ifNfpF0U5PTG0w" title='First business'>First business</Link>
    <Link to="/businesses/ohGSnJtMIC5nPfYRi_HTAg"  title='Second business'>Second business</Link>
</div>;

export default HomePage;