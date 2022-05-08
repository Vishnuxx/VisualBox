import style from "./timeline.module.css";
import { Frame } from "./Controls/Frame/Frame";
import { useRecoilValue } from "recoil";
import { Editor, framesListState } from "../../../../State/EditorState";
import { AddFrameButton } from "./Controls/AddFrameButton/AddFrameButton";
import { CloneFrameButton } from "./Controls/CloneFrameButton/CloneFrameButton";

export function Timeline(props) {
  const editor = useRecoilValue(Editor);
  const framess = useRecoilValue(framesListState);
  return (
    <section className={style.timeline}>
      <div className={style.framesContainer}>
        {framess.map((val, index) => {
          return (
            <Frame key={index} frameNumber={index}>
              <img
                style={{ width: "75px", height: "50px" }}
                src={editor.getFrame(index).thumb()}
                alt="thumb"
              />
            </Frame>
          );
        })}
      </div>
      <div>
        <AddFrameButton></AddFrameButton>
        <CloneFrameButton></CloneFrameButton>
      </div>
    </section>
  );
}
