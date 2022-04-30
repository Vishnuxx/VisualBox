import style from "./timeline.module.css";
import { Frame } from "./Controls/Frame/Frame";
import { useRecoilValue } from "recoil";
import { frames } from "../../State/EditorRecoil";
import { AddFrameButton } from "./Controls/AddFrameButton/AddFrameButton";
import { useEffect, useRef, useState } from "react";

export function Timeline(props) {
  const framess = useRecoilValue(frames);

  return (
    <section className={style.timeline}>
      <div className={style.framesContainer}>
        {framess.map((val, index) => {
          return <Frame key={index} frameNumber={index}></Frame>;
        })}
      </div>
      <AddFrameButton></AddFrameButton>
    </section>
  );
}
