import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Editor, selectedFrameIndex } from "../../../../State/EditorRecoil";
import style from "./frame.module.css";


export function Frame(props) {
  const editor = useRecoilValue(Editor)
  const [currentFrameIndex, setCurrentFrameIndex] =
    useRecoilState(selectedFrameIndex);

    const scrollTo = (ev) => {
      ev.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }

    const onClick = (target) => {
      scrollTo(target);
      setCurrentFrameIndex(props.frameNumber);
      editor.selectFrame(props.frameNumber)
    }

    const fram = useRef(null);

    useEffect(() => {
     scrollTo(fram.current);
    }, []);

  
  return (
    <div ref={fram}
      className={`${style.frame} ${
        currentFrameIndex === props.frameNumber ? style.activeFrame : ""
      }`}
      onClick={(e)=>onClick(e.target)}
    >
      <p
        className={`${style.frameNumber} ${
          currentFrameIndex === props.frameNumber ? style.activeFrameNumber : ""
        }`}
      >
        {props.frameNumber}
      </p>
      {props.children}
    </div>
  );
}
