import { PalettePropsType } from "../../types";
import ColorBlock from "../ColorBlock";

const Palette = ( props: PalettePropsType ) => {
    const generatedColors: Array<string> = props.generatedColors;

    const bg         = props.mode === "dark" ? "bg-black" : "bg-white";
    const foreground = props.mode === "dark" ? "text-white" : "text-black";

    return (
        <div className={`${bg} ${foreground} palette`}>
            <h1 className="palette-text">{props.mode} mode</h1>
            <div className="generated-colors-block">
                {generatedColors.map((color, index) => (
                    
                    <ColorBlock 
                      key={index} 
                      color={color} 
                      mode={props.mode} 
                    />
                    
                ))}
            </div>
        </div>
    );
};

export default Palette;
