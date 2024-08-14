import fs from "mz/fs";

export default async function saveBase64Image(filePath:string,base64Image?:string, imageBuffer? : Buffer) {
  // Split the base64 string into metadata and data
  let buffer : Buffer;
  if(base64Image){
      const base64Data = base64Image.split(',')[1];
       buffer  = Buffer.from(base64Data, 'base64');
  }
  else if (imageBuffer){
    buffer = imageBuffer
  }
  else{
    throw new Error("Your have to provide either base64 or buffer!")
  }

  // Write the buffer to a file
  await fs.writeFile(filePath, buffer);
}
