import compareImages from "resemblejs/compareImages";
import fs from "mz/fs";

//get difference
 export default async function getDiff(idealImage:string, drawingImage:string) {

    const color = {
      r: 0,
      g: 0,
      b: 0,
      a: 255
  };

    const options: any = {
        output: {
          //yellow color for showing error
            errorColor: {
                red: 255,
                green: 255,
                blue: 0
            },
            errorType: "flatDifferenceIntensity",
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true,
            ignoreAreasColoredWith: color 
        },
        scaleToSameSize: true,
        ignore: "antialiasing", 
    };

    const data = await compareImages(await fs.readFile(idealImage), await fs.readFile(drawingImage), options);
    return data;
  }
  
  