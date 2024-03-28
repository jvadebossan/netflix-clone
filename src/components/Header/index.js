import styles from './Header.module.css'

function Header() {
    return(
        <header className={styles.header}>
            <span className={styles.header_title}>Header Component</span>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Assistir</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;