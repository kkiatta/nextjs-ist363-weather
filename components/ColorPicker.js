import { useState } from "react";
import Button from "./Button";
import styles from "./ColorPicker";

const colors = [
    {
        name: "red",
        value: "#ff0000"
    },
    {
        name: "Green",
        value: "#00ff00"
    },
    {
        name: "Blue",
        value: "#0000ff"
    }
];

const ColorPicker = () => {

    const [activeColorIndex, setActiveColorIndex] = useState(0);

    return (
        <div className={styles.colorpicker}>
            <div
                className={styles.colorpicker__block}
                styles={{backgroundColor: colors[activeColorIndex].value}}
            >
                <p>Active color: {colors[activeColorIndex].name}</p>
            </div>
            <Button
                label="Change color"
                clickHandler={() => {
                    const newIndex = activeColorIndex >= colors.length - 1 ? 0 : activeColorIndex + 1;
                    setActiveColorIndex(newIndex);
                }}
            />
        </div>
    );
};
export default ColorPicker;