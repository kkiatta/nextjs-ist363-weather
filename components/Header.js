import Container from"../components/Container.js";
import Row from "./Row.js"

import styles from './Header.module.scss';

const Header = () => {
    return <header className={styles.header}>
        <Container>
            <Row justifyContent="center" alignItems="center">
            <p>Logo</p>
            <p>Nav</p>
            <p>Nav</p>
            <p>Nav</p>
            <p>Nav</p>
            <p>Nav</p>
            </Row>
            </Container>
        </header>
};
export default Header;