import classnames from "classnames/bind";
import styles from "./Tabs.module.scss";

const cx = classnames.bind(styles); //return a function

const Tabs = ({ activeIndex, clickHandler, items }) => {
    return <ul className={styles.tabs}>
    {items?.map((item, index) => { //item = first iteration, index is the next item
        const itemClasses = cx({
            tabs__item: true,
            active: index === activeIndex,
        });
      return (
      <li 
      key={index} 
      className={itemClasses}
      onClick={()=>{ //feed index of the li from clickingS
        clickHandler(index);
      }}
      >
        {item}
        </li>
    );
    })}
    </ul>
};
export default Tabs;