const colors = [
    {
        name: "red",
        value: "#ff0000",
    }
];

const ColorPicker = () => {
    return (
    <div style={{
        backgroudColor: colors[0].value,
    }}>
        Color picker
    </div>
    );
};
export default ColorPicker;