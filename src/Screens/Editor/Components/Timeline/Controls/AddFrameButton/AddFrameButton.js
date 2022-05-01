import { useRecoilValue, useSetRecoilState } from "recoil";
import { addFrame, Editor, framesListState, selectedFrameIndex } from "../../../../State/EditorRecoil";
import { TextButton } from "../../../../EditorUIControls/TextButton/TextButton";
import style from './addframe.module.css';
import newFrame from '../Assets/addFrame.png'


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
        <TextButton>
          <img
            src="https://img.icons8.com/plumpy/24/000000/add--v1.png"
            alt=""
          />
        </TextButton>
      </div>
    );
}