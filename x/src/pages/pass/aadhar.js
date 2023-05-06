import Verbar from "../../../components/Global/Verbar"
import Navbar from "components/Global/Navbar"
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { useCallback, useEffect, useRef, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Webcam from "react-webcam";
import axios from "axios";


function aadhar() {

  const [camImg, setCamImg] = useState(null);
  const [aadharImg, setAadharImg] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [verified, setVerified] = useState(false);
  const [aadharNumber, setAadharNumber] = useState(null);
  const webcamRef = useRef(null);


  async function verify(aadharImg, camImg) {

    try {
      const response = await axios.post('http://localhost:5000/extract', { aadharImage: `${aadharImg}` })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      const result = JSON.stringify(response);
      const last14Digits = result.slice(-15, -1);
      console.log('Aadhar Number', last14Digits);
      setAadharNumber(last14Digits);
    } catch (error) {
      console.error(error);
    }

    try {
      const response = await axios.post('http://localhost:5000/facematch', { aadharImage: `${aadharImg}`, camImage: `${camImg}` })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      const result = JSON.stringify(response);
      const json = JSON.parse(result);
      console.log('Facematch', json.Succeeded.data.confidence);
      setPercentage(json.Succeeded.data.confidence);
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (percentage > 75) {
      setVerified(true);
    }
  }, [percentage]);

  const mintData = async () => {

  }


  const props = {
    beforeUpload: (file) => {
      const isPNG = file.type === 'image/png';
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      const reader = new FileReader();
      if (info.fileList[0] !== null) {
        reader.readAsDataURL(info.fileList[0].originFileObj);
        reader.onload = () => {
          setAadharImg(reader.result)
        }
      }
    },

  };

  const videoConstraints = {
    width: 420,
    height: 420,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setCamImg(imageSrc);
  }, [webcamRef]);


  return (
    <>
      <Navbar />
      <Verbar />
      <div className="flex flex-col" id='verificationForm'>
        <div className="flex flex-col gap-5 items-center font-bold">
          <div className="ml-auto mr-auto mt-10 text-5xl ">
            <span>Aadhar</span>
          </div>
          <div className="flex flex-row gap-5 mt-10 font-semibold ">
            <div className="bg-white bg-opacity-25 backdrop-blur-lg border-2  border-opacity-25 rounded-md shadow-lg p-8 max-w-sm mx-auto ">

              <div className="mb-4 text-2xl">
                <label className="block text-black font-bold mb-2">
                  Upload Aadhar Card
                </label>
                <Upload {...props} maxCount={1}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </div>
              <div className="mb-4 text-2xl">
                <label className="block text-black font-bold mb-2">
                  Take a selfie
                </label>
                <div className="Container">
                  {camImg === null ? (
                    <>
                      <Webcam
                        audio={false}
                        mirrored={true}
                        height={350}
                        width={350}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        className='rounded-md'
                      />
                      <button onClick={capture} className="my-2 px-2 text-lg border-2 rounded-md border-black" >Capture photo</button>
                    </>
                  ) : (
                    <>
                      <img src={camImg} alt="screenshot" />
                      <button onClick={() => setCamImg(null)} className="my-2 px-2 text-lg border-2 rounded-md border-black" >Retake</button>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                {
                  verified ? <button className="bg-blue-500 hover:bg-blue-700 ml-auto mr-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                  onClick={() => {
                    toast.promise(
                      mintData(aadharNumber),
                      {
                        loading: 'Minting...',
                        success: <b>Minted</b>,
                        error: <b>Something went wrong </b>,
                      }
                    );
                  }}
                >
                  mint data
                </button> : <button className="bg-blue-500 hover:bg-blue-700 ml-auto mr-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
                    onClick={() => {
                      toast.promise(
                        verify(aadharImg, camImg),
                        {
                          loading: 'verifying...',
                          success: <b>verified</b>,
                          error: <b>Something went wrong </b>,
                        }
                      );
                    }}
                  >
                    Verify
                  </button>
                }
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>

    </>
  )
}

export default aadhar