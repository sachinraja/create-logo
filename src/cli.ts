import arg from 'arg';
import { createSharpFromSvg, createSvg, saveSharpToFile, saveSvgToFile } from '.';

function parseArgumentsIntoOptions(rawArgs: any) {
  const args = arg(
    {
      '--help': Boolean,
      '--bgColor': String,
      '--textColor': String,
      '--outFile': String,
      '--png': Boolean,
    },
    {
      argv: rawArgs.slice(2),
    },
  )

  return {
    help: args['--help'] || false,
    text: args['_'][0],
    bgColor: args['--bgColor'] || '#000',
    textColor: args['--textColor'] || '#FFF',
    outFile: args['--outFile'],
    png: args['--png'] || false,
  }
}

export async function cli(args: any) {
  const options = parseArgumentsIntoOptions(args);
  if (options.help) return console.log('usage: create-logo <text> [--help] [--bgColor <background color>] [--textColor <text color>] [outFile <path>] [--png]')
  if (!options.text) return console.error('Text must be specified.');

  const svg = await createSvg(options);

  if (!options.outFile) return console.log(svg);

  if (!options.png) return saveSvgToFile(svg, options.outFile);
  return saveSharpToFile((await createSharpFromSvg(svg)), options.outFile);
}