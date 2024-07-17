import { HSLType } from "../types";

export function hexToHSL( hexColor: string ): HSLType {

    hexColor               = hexColor.slice( 1 );
    let rgb: Array<number> = fromHexToRGB( hexColor );
    rgb                    = rgb.map( el => el / 255 );

    const cMax             = getMaxOfRGB( rgb );
    const cMin             = getMinOfRGB( rgb );
    const delta            = getDelta( cMax, cMin );

    const hue              = getHue( rgb, cMax, delta );
    const lightness        = getLightness( cMax, cMin );
    const saturation       = getSaturation( lightness, delta );
    
    return {
        hue:        hue, 
        saturation: saturation * 100, 
        lightness:  lightness * 100
    };
}

export function hslToHex( hslColor: HSLType ) {
    const [r, g, b] = hslToRgb( hslColor );
    return rgbToHex( r, g, b );
}

// for hex - hsl
//--------------

function fromHexToRGB( hexColor: string ): Array<number> {
    const hexPartsRGB = [ 
        hexColor.slice( 0, 2 ), 
        hexColor.slice( 2, 4 ), 
        hexColor.slice( 4, 6 ) ];

    return hexPartsRGB.map( color => parseInt( color, 16 ) );
}

function getHue( rgb: Array<number>, cmax: number, delta: number ) {
    if ( delta === 0 ) {
        return 0; 
    }

    let hue;
    switch ( cmax ) {
        case rgb[0]:
            hue = 60 * (((rgb[1] - rgb[2]) / delta) % 6);
            break;
        case rgb[1]:
            hue = 60 * (((rgb[2] - rgb[0]) / delta) + 2);
            break;
        case rgb[2]:
            hue = 60 * (((rgb[0] - rgb[1]) / delta) + 4);
            break;
        default:
            hue = 0;
            break;
    }

    if ( hue < 0 ) {
        hue += 360;
    }

    return hue;
}

function getSaturation( lightness: number, delta: number ) {
    if ( delta == 0 ) {
        return 0;
    } else {
        return delta / ( 1 - Math.abs( 2 * lightness - 1 ));
    }
}

const getLightness = ( cmax: number, cmin: number )  => ( cmax + cmin ) / 2 ;

const getMaxOfRGB  = ( rgb: Array<number> )          => Math.max( rgb[0], rgb[1], rgb[2] );

const getMinOfRGB  = ( rgb: Array<number> )          => Math.min( rgb[0], rgb[1], rgb[2] );

const getDelta     = ( cmax:number, cmin: number )   => cmax - cmin;

// for hsl - hex 
//--------------

function hslToRgb(hslColor: HSLType) {

    let hue        = hslColor.hue
    let saturation = hslColor.saturation /= 100;
    let lightness  = hslColor.lightness  /= 100;

    let chroma   = (1 - Math.abs( 2 * lightness - 1 )) * saturation;
    let x        = chroma * (1 - Math.abs( ( hue / 60 ) % 2 - 1) );
    let minValue = lightness - chroma / 2;

    let r = 0, g = 0, b = 0;

    if ( 0 <= hue && hue < 60 ) {
        r = chroma; g = x; b = 0;
    } else if ( 60 <= hue && hue < 120 ) {
        r = x; g = chroma; b = 0;
    } else if ( 120 <= hue && hue < 180 ) {
        r = 0; g = chroma; b = x;
    } else if ( 180 <= hue && hue < 240 ) {
        r = 0; g = x; b = chroma;
    } else if ( 240 <= hue && hue < 300 ) {
        r = x; g = 0; b = chroma;
    } else if ( 300 <= hue && hue < 360 ) {
        r = chroma; g = 0; b = x;
    }

    r = Math.round( ( r + minValue ) * 255 );
    g = Math.round( ( g + minValue ) * 255 );
    b = Math.round( ( b + minValue ) * 255 );

    return [r, g, b];
}

function rgbToHex( r: number, g: number, b: number ) {
    return "#" +  (( 1 << 24 ) + ( r << 16 ) + ( g << 8 ) + b ).toString( 16 ).slice( 1 ).toUpperCase();
}