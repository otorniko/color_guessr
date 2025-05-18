import type { RGBDecimals } from "../types";

export const isValidHex = (hex: string):boolean => {
    const hexRGBRegex = /^#?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/;
    return hexRGBRegex.test(hex);
}

export const isHexAndDecEqual = (hex: string, decimalRGB: RGBDecimals):boolean => {
    const hexRGBRegex = /^#?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/i;
    const match = hexRGBRegex.exec(hex);
    
    if(!match) {
        return false;
    }

    const redHex = match[1];
    const greenHex = match[2];
    const blueHex = match[3];

    const decimalRedFromHex = parseInt(redHex, 16);
    const decimalGreenFromHex = parseInt(greenHex, 16);
    const decimalBlueFromHex = parseInt(blueHex, 16);

    return (
        decimalRedFromHex == decimalRGB.Red &&
        decimalGreenFromHex == decimalRGB.Green &&
        decimalBlueFromHex == decimalRGB.Blue
    )
}