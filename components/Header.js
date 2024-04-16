import Container from"../components/Container.js";

import styles from './Header.module.scss';

const Header = () => {
    return <header className={styles.header}>
        <Container>Logo and nav</Container>
        </header>
};
export default Header;