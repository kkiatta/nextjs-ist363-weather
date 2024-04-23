import classnames from "classnames/bind"

import styles from "./Temp.module.scss"

const cx = classnames.bind(styles)

const Temp = ({amount, size}) => {
        const tempClasses = cx({
            temp: true,
            [`size--${size}`] : size
        })
    const roundedTemp = Math.round(amount);
    return <span className={tempClasses}>{roundedTemp} &deg; C</span>;
};
export default Temp;