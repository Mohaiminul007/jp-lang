import { fs } from "mz";
import { IdealImagePath } from "../analyze/route";

var gifFrames = require('gif-frames');


// Function to extract the last frame from a GIF and save it
export  const  extractLastFrameFromGif = async (inputPath) => {
    const framesFromGif = await gifFrames({
      url: inputPath, frames: 'all', outputType: 'png'
    });
  
    const lastFrame = framesFromGif[framesFromGif.length - 1];

    const writeStream = fs.createWriteStream(IdealImagePath);
  
    return new Promise((resolve, reject) => {
      lastFrame.getImage().pipe(writeStream)
        .on('finish', () => {
          // console.log("Last frame saved successfully.");
          resolve(true);
        })
        .on('error', (err) => {
          console.error("Error saving last frame:", err);
          reject(err);
        });
    });
  };
  