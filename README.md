<h1>
  <img src="cl.svg" alt="create-logo Logo" width="50" height="50">
  create-logo
</h1>

Create a simple svg logo with text over a background.

## Installation
Run `npm i create-logo -g`.

## CLI
Use `create-logo` as the base command.

Format: `create-logo <text> [--help] [--bgColor <background color>] [--textColor <text color>] [outFile <path>] [--png]`

SVG Example: `create-logo CL --bgColor "#FFFF00" --textColor "#000000" --outFile "cl.svg"`

PNG Example: `create-logo CL --bgColor "#FFFF00" --textColor "#000000" --outFile "cl.png" --png`
### Arguments
  * --bgColor: Set the background color of the logo. Default is `#000` (black).
  * --textColor: Set the color of the text in the logo. Default is `#FFF` (white).
  * --outFile: The file to put the svg or, if specified, the png in.
  * --png: Specify if you want to create a png logo (default is svg).