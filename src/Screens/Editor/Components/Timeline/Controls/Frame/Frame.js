import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { selectedFrameIndex } from "../../../../../../Recoil/EditorRecoil";
import style from "./frame.module.css";


export function Frame(props) {

  const [currentFrameIndex, setCurrentFrameIndex] =
    useRecoilState(selectedFrameIndex);

    const scrollTo = (ev) => {
      ev.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }

    const onClick = (ev) => {
      scrollTo(ev);
      setCurrentFrameIndex(props.frameNumber);
    }

    const fr = useRef(null);

    useEffect(() => {
     scrollTo(fr.current);
    }, []);

  

  return (
    <div ref={fr}
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
    </div>
  );
}
