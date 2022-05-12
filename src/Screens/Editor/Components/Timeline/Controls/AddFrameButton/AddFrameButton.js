import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  EditorState,
  framesListState,
  selectedFrameIndex,
} from "../../../../../../State/EditorState";
import { TextButton } from "../../../../EditorUIControls/TextButton/TextButton";
import style from "./addframe.module.css";
//import newFrame from '../Assets/addFrame.png'

export function AddFrameButton(props) {
  const editor = useRecoilValue(EditorState);
  const addframeState = useSetRecoilState(framesListState);
  const setSelectedFrameIndexState = useSetRecoilState(selectedFrameIndex);
  const addFrameToEditor = () => {
    //
    // DATA
    //
    editor.addFrame(true);
    editor.selectFrame(editor.frames.length - 1);
    //
    // STATE
    //
    addframeState([...editor.frames]);
    setSelectedFrameIndexState(editor.frameIndex);
  };

  return (
    <div className={style.addFrameButton} onClick={() => addFrameToEditor()}>
      <TextButton>
        <img src="https://img.icons8.com/plumpy/24/000000/add--v1.png" alt="" />
      </TextButton>
    </div>
  );
}
