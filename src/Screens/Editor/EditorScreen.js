import { EditingFrame, EditorPage, Frame, MenuBar, Timeline, ToolBar } from "./Components";

export function EditorScreen(props) {
    return (
      <EditorPage>
        <MenuBar></MenuBar>
        <ToolBar></ToolBar>
        <EditingFrame></EditingFrame>
        <Timeline>
          <Frame frameNumber="1" isActive={true}></Frame>
          <Frame frameNumber="2" isActive={false}></Frame>
          <Frame frameNumber="3" isActive={false}></Frame>
          <Frame frameNumber="4" isActive={false}></Frame>
          <Frame frameNumber="5" isActive={false}></Frame>
          <Frame frameNumber="6" isActive={false}></Frame>
        </Timeline>
      </EditorPage>
    );
}