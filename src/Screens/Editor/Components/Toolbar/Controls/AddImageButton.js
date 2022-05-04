import { useRecoilState } from 'recoil';
import { IconButton } from '../../../EditorUIControls/IconButton/IconButton'
import { onToolBarOptionChanged } from '../../../State/EditorRecoil';
import icon from '../Assets/addimage.png'

export function AddImageButton(props) {
     const [optionType , setOption] = useRecoilState(onToolBarOptionChanged);

  const TYPE = "image"
  const isActive = optionType.includes(TYPE);
  const onclick = () => {
    setOption([TYPE]);
    
  }
    return <IconButton icon={icon} onClick={onclick} active={isActive} label="image"/>
}