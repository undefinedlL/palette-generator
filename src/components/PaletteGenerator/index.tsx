import { useState } from "react";
import ColorInput from "../ColorInput";
import Palette from "../Palette";
import { generatePalette } from "../../utils/paletteGenerator";
import { ColorType, PalettesType } from "../../types";
import { initialColorState, initialPalettesState } from "../../utils/variables";

const PaletteGenerator = () => {
    const [selectedColor, setSelectedColor] = useState<ColorType>(initialColorState);
    const [palettes, setPalettes]           = useState<PalettesType>(initialPalettesState);

    const handleSelectedColorChange = ( color: ColorType ) => {
        setSelectedColor( color );
    };

    const handleGeneratePalettesClick = () => {
        const newPalettes: PalettesType = generatePalette( selectedColor );
        setPalettes( newPalettes );
    };

    return (
        <>
            <div>
                <ColorInput
                    setSelectedColor={handleSelectedColorChange}
                    selectedColor={selectedColor}
                />
                <button
                    className="generate-button"
                    onClick={handleGeneratePalettesClick}
                    type="button"
                >
                    Generate
                </button>
            </div>
            <div className="palette-container">
                <Palette mode="dark" generatedColors={palettes.dark} />
                <Palette mode="light" generatedColors={palettes.light} />
            </div>
        </>
    );
};

export default PaletteGenerator;
