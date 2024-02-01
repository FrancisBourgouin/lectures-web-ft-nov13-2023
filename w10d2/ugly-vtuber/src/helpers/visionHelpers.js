import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

// const { FaceLandmarker, FilesetResolver } = vision;

export const createFaceLandmarker = async () => {
  const filesetResolver = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );
  const faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
      delegate: "GPU",
    },
    outputFaceBlendshapes: true,
    runningMode: "VIDEO",
    numFaces: 1,
  });

  return faceLandmarker;
};

let lastVideoTime = -1;

export const predictWebcam = async (faceLandmarker, video, callback) => {
  let results = undefined;
  let startTimeMs = performance.now();

  if (lastVideoTime !== video.currentTime) {
    lastVideoTime = video.currentTime;
    results = faceLandmarker.detectForVideo(video, startTimeMs);
  }

  if (results && results.faceBlendshapes.length > 0) {
    callback(results);
  }

  window.requestAnimationFrame(() => predictWebcam(faceLandmarker, video, callback));
};
