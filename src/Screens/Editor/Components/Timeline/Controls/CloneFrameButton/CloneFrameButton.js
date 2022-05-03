import { useRecoilValue, useSetRecoilState } from "recoil";
import { TextButton } from "../../../../EditorUIControls/TextButton/TextButton";
import style from "./cloneframe.module.css";
import cloneFrame from "../Assets/cloneFrame.png";
import { Editor, framesListState, selectedFrameIndex } from "../../../../State/EditorRecoil";

export function CloneFrameButton(props) {
  const editor = useRecoilValue(Editor);
  const addframeState = useSetRecoilState(framesListState);
  const setSelectedFrameIndexState = useSetRecoilState(selectedFrameIndex);
  const addFrameToEditor = () => {
    editor.addFrame();
    editor.selectFrame(editor.frames.length - 1);
    addframeState([...editor.frames]);
    setSelectedFrameIndexState(editor.frameIndex);
  };

  return (
    <div className={style.cloneFrameButton} onClick={() => addFrameToEditor()}>
      <TextButton>
        <img src={cloneFrame} alt="" />
      </TextButton>
    </div>
  );
}