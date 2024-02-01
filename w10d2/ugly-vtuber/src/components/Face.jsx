import "./Face.scss";

export default function Face(props) {
  const { eyeBlinkLeft, eyeBlinkRight, jawOpen, mouthClose } = props;

  const leftEyeStyle = { height: `${100 * (1 - eyeBlinkLeft)}%` };
  const rightEyeStyle = { height: `${100 * (1 - eyeBlinkRight)}%` };
  const mouthStyle = { height: `${100 * jawOpen + 10}%` };
  return (
    <div className="Face">
      <div className="leftEye" style={leftEyeStyle}></div>
      <div className="rightEye" style={leftEyeStyle}></div>
      <div className="nose"></div>
      <div className="mouth" style={mouthStyle}></div>
    </div>
  );
}
