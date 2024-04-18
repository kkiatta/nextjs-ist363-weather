import styles from "./Col.module.scss";

const Col = ({children}) => {
    return<div className={styles.row}>{children}</div>
}

export default Col;