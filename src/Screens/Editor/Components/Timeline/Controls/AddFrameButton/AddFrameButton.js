import { useSetRecoilState } from "recoil";
import { addFrame, frames } from "../../../../State/EditorRecoil";
import { TextButton } from "../../../../EditorUIControls/TextButton/TextButton";
import style from './addframe.module.css';

export function AddFrameButton(props) {
    const addframe = useSetRecoilState(addFrame);
    return (
      <div className={style.addFrameButton} onClick={() => addframe("this")}>
        <TextButton>+</TextButton>
      </div>
    );
}