import fs from 'fs';
import path from 'path';
import sharp, { Sharp } from 'sharp';
import opentype from 'opentype.js';
interface SvgOptions {
  bgColor: string;
  text: string;
  textColor: string;
}

/**
 * Create an svg with a given color and text.
 * @param color The hex color of the svg.
 * @param text The text for the logo.
 * @returns The generated logo svg.
 */
export async function createSvg({ bgColor, text, textColor }: SvgOptions) {
  const font = await opentype.load(path.join(__dirname, '../', 'fonts', 'Montserrat-Bold.ttf'));
  const fontPath = font.getPath(text, 4, 22, 14);
  fontPath.fill = textColor;

  return [
    `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">`,
    `<rect width="100%" height="100%" rx="3" fill="${bgColor}" />`,
    fontPath.toSVG(2),
    '</svg>',
  ].join('');
};

/**
 * Create a sharp from an svg.
 * @param svg The svg to load the buffer from.
 * @returns The sharp for the svg.
 */
export async function createSharpFromSvg(svg: string) {
  return sharp(Buffer.from(svg));
}

/**
 * Save a sharp as a png file.
 * @param filepath The path to save the sharp to.
 */
export function saveSharpToFile(sharp: Sharp, filepath: string) {
  sharp.png().toFile(filepath);
}

/**
 * Save an svg to an svg file.
 * @param svg The svg text.
 */
export function saveSvgToFile(svg: string, filepath: string) {
  fs.writeFile(filepath, svg, (err) => { 
    if (err) throw new Error(err?.message);
  });
}
