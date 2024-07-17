import { HSLType } from "../types";
import { hexToHSL, hslToHex } from "./formatsChanger";

export function generatePalette( color: string ) {

    let baseColorHSL: HSLType         = hexToHSL( color );
    const darkPalette: Array<string>  = generateDarkColors( baseColorHSL );
    const lightPalette: Array<string> = generateLightColors( baseColorHSL );

    return {
        dark:  darkPalette, 
        light: lightPalette
    };

}

function generateDarkColors( baseColor: HSLType ): Array<string> {

    const darkColors: Array<string> = [];
    
    for (let i = 0; i < 5; i++) {   
        let darkColor = hslToHex( {...baseColor, lightness: changeLightness('dark')} )
        darkColors.push( darkColor );
    }

    return darkColors;

} 

function generateLightColors( baseColor: HSLType ): Array<string> {

    const lightColors: Array<string> = [];
    
    for ( let i = 0; i < 5; i++ ) {
        let darkColor = hslToHex( {...baseColor, lightness: changeLightness('light')} )
        lightColors.push( darkColor );
    }

    return lightColors;

} 

function changeLightness( mode: "dark" | "light" ): number {

    if ( mode === "dark" ) {
        let lightness = Math.random() * ( 35 - 0 ) + 0;
        return lightness;
    } else {
        let lightness = Math.random() * ( 100 - 35 ) + 35;
        return lightness;
    }

}