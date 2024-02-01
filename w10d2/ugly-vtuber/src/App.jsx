import { useRef, useState } from "react";

import "./App.css";
import Face from "./components/Face";
import Webcam from "react-webcam";

import { createFaceLandmarker, predictWebcam } from "./helpers/visionHelpers";
// import helpers from "./helpers/visionHelpers";

function App() {
  const [positions, setPositions] = useState({
    eyeBlinkLeft: 0,
    eyeBlinkRight: 0,
    jawOpen: 0,
    mouthClose: 0,
  });
  const webcamRef = useRef();

  console.log(webcamRef.current);

  const handleWebcamReadyPromises = () => {
    createFaceLandmarker()
      .then((faceLandmarker) => {
        predictWebcam(faceLandmarker, webcamRef.current.video);
      })
      .catch((err) => console.log(err));
  };

  const fetchPositions = (results) => {
    const faceInfo = results.faceBlendshapes[0].categories;

    const eyeBlinkLeft = faceInfo.find(
      (info) => info.categoryName === "eyeBlinkLeft"
    ).score;
    const eyeBlinkRight = faceInfo.find(
      (info) => info.categoryName === "eyeBlinkRight"
    ).score;
    const jawOpen = faceInfo.find((info) => info.categoryName === "jawOpen").score;
    const mouthClose = faceInfo.find((info) => info.categoryName === "mouthClose").score;

    setPositions({ eyeBlinkLeft, eyeBlinkRight, jawOpen, mouthClose });
  };

  const handleWebcamReady = async () => {
    try {
      const faceLandmarker = await createFaceLandmarker();
      predictWebcam(faceLandmarker, webcamRef.current.video, fetchPositions);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <header>
        <h1>Super VTuber</h1>
      </header>
      <Webcam
        ref={webcamRef}
        style={{ height: "20vmin", visibility: "visible" }}
        onUserMedia={handleWebcamReady}
      />
      <Face {...positions} />
    </>
  );
}

export default App;
