import Container from"../components/Container.js";
import Logo from "./Logo"
import Row from "./Row.js"

import styles from './Header.module.scss';

const Header = () => {
    return <header className={styles.header}>
        <Container>
            <Row>
            <Logo/>
            </Row>
            </Container>
        </header>
};
export default Header;