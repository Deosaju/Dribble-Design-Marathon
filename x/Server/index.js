import express, { json } from "express";
import cors from "cors";
import axios from "axios";
import multer from 'multer';

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

const upload = multer();

app.post("/facematch", upload.none(), async (req, res) => {
  const aadharImg = req.body.aadharImage;
  const camImg = req.body.camImage;
  const result = await facemesh(aadharImg, camImg);
  res.send(result);
});

async function facemesh(aadharImg, camImg) {
  const options = {
    method: 'POST',
    url: 'https://facematch.p.rapidapi.com/API/verify/Facematch',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'c52c4f4e43msh10eee94d9a5338cp119fc0jsnbdefd828051d',
      'X-RapidAPI-Host': 'facematch.p.rapidapi.com'
    },
    data: {
      method: 'facevalidate',
      txn_id: 'test-f23a-4bed-88fa-270befab4407',
      clientid: '222',
      image_base64_1: `${aadharImg}`,
      image_base64_2: `${camImg}`
    }
  };

  try {
    const response = await axios.request(options);
    const result = JSON.stringify(response.data);
    return result;
  } catch (error) {
    console.error(error);
  }
}

app.post("/extract", upload.none(), async (req, res) => {
  const aadharImg = req.body.aadharImage;
  const result = await extraction(aadharImg);
  res.send(result);
});

async function extraction(aadharImg) {
  const encodedParams = new URLSearchParams();
  encodedParams.set('data', `${aadharImg}`);
  encodedParams.set('lang', 'eng');

  const options = {
    method: 'POST',
    url: 'https://ocr-100-image-text-extractor.p.rapidapi.com/ocr',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'c52c4f4e43msh10eee94d9a5338cp119fc0jsnbdefd828051d',
      'X-RapidAPI-Host': 'ocr-100-image-text-extractor.p.rapidapi.com'
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    const result = JSON.stringify(response.data);
    return result;
  } catch (error) {
    console.error(error);
  }
}


app.listen(5000, () => {
  console.log(`Server is up and running.`);
});