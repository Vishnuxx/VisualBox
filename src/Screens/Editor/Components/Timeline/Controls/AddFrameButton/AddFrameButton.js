import { useRecoilValue, useSetRecoilState } from "recoil";
import { addFrame, Editor, framesListState, selectedFrameIndex } from "../../../../State/EditorRecoil";
import { TextButton } from "../../../../EditorUIControls/TextButton/TextButton";
import style from './addframe.module.css';

export function AddFrameButton(props) {
    const editor = useRecoilValue(Editor);
    const addframeState = useSetRecoilState(framesListState);
    const setSelectedFrameIndexState = useSetRecoilState(selectedFrameIndex)
    const addFrameToEditor = () => {
      editor.addFrame();
      addframeState([...editor.frames]);
      setSelectedFrameIndexState(editor.frameIndex);
    }
    
    return (
      <div className={style.addFrameButton} onClick={() => addFrameToEditor()}>
        <TextButton>+</TextButton>
      </div>
    );
}