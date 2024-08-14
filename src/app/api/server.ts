require("dotenv").config();

import { Request, response, Response } from "express"
import cors from "cors"
import express from "express";
var gifFrames = require('gif-frames');
// import gifFrames from 'gif-frames';

import fs from "mz/fs";
// import fs from "node:fs";
import getDiff from "./utils/getDiff";
import saveBase64Image from "./utils/saveBase64Image";
import Jimp from "jimp";
import { rateLimit } from 'express-rate-limit'

import { extractLastFrameFromGif } from "./utils/extractLastFrameFromGif";


const app = express()

const port = process.env.PORT 


// Configure Express to use the express.json middleware with a payload size limit of 20 megabytes.
app.use(express.json({limit:"20mb"}))

app.use(cors())


const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(limiter)

export const IdealImagePath = "ideal.png" 
const writingImagePath = "./utils/temp/writing.png"


// Route to analyze the drawing
app.post('/analyze', async (req: Request, res: Response) => {
  const { data } = req.body;
  // console.log("kkkkkkkkkkkkkk",data);

  const serialNo = data.item.serialNo
  const drawingBase64 = data.imageToExportBase64
  const idealGifPath = data.item.imageHiragana.url

  try {
    //  extract the last frame from the GIF and save it
    await extractLastFrameFromGif(idealGifPath);
    // console.log("Extraciton done.");

    // invert and saved image
    const image = await Jimp.read(IdealImagePath);
    const idealInBase64 = await image.invert().getBase64Async(Jimp.MIME_PNG)
    // console.log("Inverted image: ",idealInBase64);

    //already inverted in base64 so no need  to do it again.
    await image.writeAsync(IdealImagePath);
    // console.log("Inversion done.");

    // drawing image from base64
    await saveBase64Image(writingImagePath, drawingBase64);

    //difference between images
    const diffWithoutBuffer = await getDiff(IdealImagePath, writingImagePath);

    if(diffWithoutBuffer.getBuffer){
    const getBufferData:Buffer =  diffWithoutBuffer.getBuffer(false);

    // convert the buffer to base64 
    const diffImageInbase64 = `data:image/png;base64,${getBufferData.toString('base64')}`

    const diffData = {
      diffWithoutBuffer,
      diffImageInbase64,
    };

    const dataFromBackend = {
      serialNo,
      idealInBase64,
      drawingBase64,
      diffData,
    };

    // Send  response to client
    res.status(201).json({ dataFromBackend })

    //now delete the images
    fs.unlink(writingImagePath)
    fs.unlink(IdealImagePath)
    // console.log("file removed");
    
  }


  } catch (error) {
    console.error('Error during analysis:', error);
    res.status(500).json({ error: 'Failed to analyze drawing' });
  }
});



app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})
