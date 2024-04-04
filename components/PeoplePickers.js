import { useState } from "react";

import ButtonUI from "./ButtonUI";
import Image from "next/image";

import styles from "./PeoplePicker.module.scss"

const PeoplePicker = ({ people }) => {

    const [activePersonIndex, setActivePersonIndex] = useState(0);

    return (
        <section>
        <div>
            <h2>Team</h2>
            <div className={styles.card__container}>
                <ButtonUI 
                    className={styles.card__arrow__left}
                    icon={"faAngleLeft"} 
                    clickHandler={() => {
                    const newIndex = 
                    activePersonIndex <=0 
                    ? people.length - 1 
                    : activePersonIndex - 1;
                    setActivePersonIndex(newIndex);
                }}
                />
                <ButtonUI 
                    className={styles.card__arrow__right}
                    icon={"faAngleRight"}
                    clickHandler={() => {
                    const newIndex = 
                    activePersonIndex  >= people.length -1
                    ? 0 
                    : activePersonIndex + 1;
                    setActivePersonIndex(newIndex);
                }}/>
                <div className={styles.card}>
                    <Image 
                     src={`/headshots/${people[activePersonIndex].slug}.jpg`}
                     alt={`${people[activePersonIndex].name.first}${" "}
                     ${people[activePersonIndex].name.last}`}
                     width={200}
                     height={200}
                     className={styles.card__headshot}
                    />
                    <h3 className={styles.card__name}>
                        {people[activePersonIndex].name.first}{" "}
                        {people[activePersonIndex].name.last}
                    </h3>
                    <h4 className={styles.card__job}>
                        {people[activePersonIndex].jobTitle}
                        <br/>
                        {people[activePersonIndex].company}
                    </h4>
                    Company
                    <br/>
                </div>
            </div>
            </div>
        </section>
    );
};
// const PeoplePicker = () => {

//     const [activePersonIndex, setActivePersonIndex] = useState(0);

//     return(
//         <div className={StyleSheet.peoplepicker}>
//             <article>
//                 <Image
//                     src={`/images/${people[activePersonIndex].slug}.jpg`}
//                     alt={people[activePersonIndex].name}
//                     width={200}
//                     height={200}
//                 />
//                 <h3>Name: {people[activePersonIndex].name}</h3>
//                 <p>Age: {people[activePersonIndex].age}</p>
//             </article>
//             <Button
//                 label="Next person"
//                 clickHandler={()=>{
//                     const newIndex = activePersonIndex >= people.length - 1?0 : activePersonIndex + 1;
//                     setActivePersonIndex(newIndex);
//                 }}
//             />
//         </div>
//     );
// }
export default PeoplePicker;