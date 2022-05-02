import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState,  } from "recoil";
import { Editor, framesListState, selectedFrameIndex } from "../../../../State/EditorRecoil";
import style from "./frame.module.css";


export function Frame(props) {
  const editor = useRecoilValue(Editor)
  const [currentFrameIndex, setCurrentFrameIndex] =
    useRecoilState(selectedFrameIndex);

  const frameList = useSetRecoilState(framesListState)

    const scrollTo = (ev) => {
      ev.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }

    const onClick = (target) => {
      scrollTo(target);
      setCurrentFrameIndex(props.frameNumber);
      console.log(props.frameNumber);
      editor.selectFrame(props.frameNumber)
    }

    const deleteFrame = (e) => {
      e.stopPropagation();
      console.log(editor.frames)
      editor.removeFrame(currentFrameIndex);
      
      frameList([...editor.frames]);
    };

    const fram = useRef(null);

    useEffect(() => {
     scrollTo(fram.current);
    }, []);

  
  return (
    <div
      ref={fram}
      className={`${style.frame} ${
        currentFrameIndex === props.frameNumber ? style.activeFrame : ""
      }`}
      onClick={(e) => onClick(e.target)}
    >
      {currentFrameIndex === props.frameNumber?  <img
        src="https://img.icons8.com/material-rounded/24/000000/multiply--v1.png"
        className={style.closeBtn}
        onClick={(e)=>deleteFrame(e)}
      />: ""}
     
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
