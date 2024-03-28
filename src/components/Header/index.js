import styles from './Header.module.css'
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header className={styles.header}>
            <Link to="/" className={styles.header_title}>
                <span>Netflix Clone</span>
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li>
                        <Link to="/" className={styles.link}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="Watch"  className={styles.link}>
                            Assistir
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;