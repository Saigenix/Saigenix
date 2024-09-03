import React from "react";
import Model from "./Model";
function Resume() {
  return (
    <Model
      id="resume"
      width={600}
      height={600}
      x={"right"}
      y={100}
      title={"Resume"}
    >
      <div className="h-full w-full bg-black">
        <object
          data="https://firebasestorage.googleapis.com/v0/b/saigenix-4e71c.appspot.com/o/Sainath_Mahindrakar_Overall_resume.pdf?alt=media"
          type="application/pdf"
          width="100%"
          height="560px"
          // className=''
          // zoom="200px"
        >
          <p>
            Browser does not support PDFs. - here's my{" "}
            <a href="https://drive.google.com/uc?export=download&id=15FCfagOKdHNy3rHxq2r0b_dv-yk0LExJ">
              Resume
            </a>
          </p>
        </object>
      </div>
    </Model>
  );
}

export default Resume;
