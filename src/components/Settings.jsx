import React from "react";
import Model from "./Model";
function Settings() {
  return (
    <Model id="settings" width={300} height={150} x={"right"} y={100} title={"Settings"}>
      <div className="bg-[#455d7a] text-white">Settings</div>
    </Model>
  );
}

export default Settings;
