import "winbox/dist/css/winbox.min.css"; // required
import "winbox/dist/css/themes/modern.min.css"; // optional
import "winbox/dist/css/themes/white.min.css"; // optional
import WinBox from "react-winbox";
import { useModelStore } from "../utils/store";
function Model({ id, width, height, x, y, title, children }) {
  const modelStates = useModelStore((state) => ({
    settings: state.settings,
    handleClose: (id) => state.handleClose(id),
  }));
  return (
    <WinBox
      id={id}
      width={width}
      height={height}
      x={x}
      y={y}
      theme="modern"
      noClose={false}
      title={title}
      background={"#f95959"}
      border={4}
      icon={"./images/saigenix.jpg"}
      // pending fix not opening when closed through window X use zustand  store
      onClose={() => {
        modelStates.handleClose(id);
      }}
    >
      <div>{children}</div>
    </WinBox>
  );
}

export default Model;
