import React, { useState } from "react";
import { ColorInputPropsType } from "../../types";


function ColorInput( props: ColorInputPropsType ) {
    const [selectedColor, setSelectedColor] = useState(props.selectedColor);

    const handleColorChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const newColor = e.target.value;
        setSelectedColor( newColor );
        props.setSelectedColor( newColor );
    };


    return (
        <div className="input">
            <input
                className="input-color"
                type="color"
                value={selectedColor}
                onChange={handleColorChange}
            />
            <input
                className="input-text"
                type="text"
                maxLength={7}
                value={selectedColor}
                onChange={handleColorChange}
            />
        </div>
    );
}

export default ColorInput;
