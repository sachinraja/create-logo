<h1>
  <img src="./cl.svg" alt="Avatar" width="50" height="50">
  create-logo
</h1>

Create a simple svg logo with text over a background.

## Installation
Run `npm i create-logo -g`.

## CLI
Use `create-logo` as the base command.

Format: `create-logo <text> [--help] [--bgColor <background color>] [--textColor <text color>] [outFile <path>] [--png]`

Example: `create-logo CL --bgColor "#FFFF00" --textColor "#000000" --outFile "cl.svg"`

### Arguments
  * --bgColor: Set the background color of the logo.
  * --textColor: Set the color of the text in the logo. Default is `#FFFFFF`.
  * --outFile: The file to put the svg or, if specified, the png in.
  * --png: Specify if you want to create a png logo (default is svg).