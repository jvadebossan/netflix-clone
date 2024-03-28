import styles from './Error.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';

function Error({ title, desc }) {
    return (
        <>
            <Header/>
            <Container>
                <h1 className={styles.error_title}>
                    {title}
                </h1>
                <p className={styles.error_desc}>
                    {desc}
                </p>
            </Container>
            <Footer/>
        </>
    );
}

export default Error;