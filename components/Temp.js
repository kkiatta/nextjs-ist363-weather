import classnames from "classnames/bind"

import styles from "./Temp.module.scss"

const cx = classnames.bind(styles)

const Temp = ({amount, size, unit }) => {
        const tempClasses = cx({
            temp: true,
            [`size--${size}`] : size
        });
    const formattedTemp = unit === "imperial" ? (amount*9/5) + (32) : amount;
    const roundedTemp = Math.round(formattedTemp);
    const tempSymbol = unit === "imperial" ? "F" : "C";
    return (
        <>
          <span className={tempClasses}>{roundedTemp}&deg;{tempSymbol}</span>
        </>
      );
    };

export default Temp;