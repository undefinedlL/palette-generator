export type HSLType = {
    hue:        number;
    saturation: number;
    lightness:  number;
}
export type PalettePropsType = {
    mode:            'dark' | 'light';
    generatedColors: Array<ColorType>;
}

export type PalettesType = {
    dark:  Array<ColorType>;
    light: Array<ColorType>;
}

export type ColorInputPropsType = {
    setSelectedColor: (color: ColorType) => void;
    selectedColor:    ColorType;
};

export type ColorBlockPropsType = {
    color: ColorType;
    mode:  "dark" | "light";
};

export type ColorType = string;