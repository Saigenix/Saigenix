import "winbox/dist/css/winbox.min.css"; // required
import "winbox/dist/css/themes/modern.min.css"; // optional
import "winbox/dist/css/themes/white.min.css"; // optional
import WinBox from "react-winbox";

function Model({ width, height, x, y, children }) {
  return (
    <WinBox
      width={width}
      height={height}
      x={x}
      y={y}
      theme="modern"
      noClose={false}
      title={"Sai's Box"}
      background={"#ff005d"}
      border={4}
    >
      <div>{children}</div>
    </WinBox>
  );
}

export default Model;
