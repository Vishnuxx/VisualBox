import style from "./editor.module.css";

import { Timeline } from "./Components/Timeline/Timeline";
import { ToolBar } from "./Components/Toolbar/Toolbar";
import { MenuBar } from "./Components/Menubar/Menubar";
import { EditingFrame } from "./Components/EditingFrame/EditingFrame";

import { useSetRecoilState } from "recoil";
import { PropertyBar } from "./Components/PropertyBar/PropertyBar";
import { ProjectExport } from "./Components/ProjectExport/ProjectExportScreen";
import { EditorState, framesListState } from "../../State/EditorState";
import { useCallback, useEffect, useRef } from "react";
import { AppStorage } from "../../AppConstants/AppStorage";
import { EditorModel } from "./Model/EditorModel";
import Player from "./Model/Player";
import { VideoExporter } from "./Model/VideoExporter";
import { initCanvasTouchControls } from "./Components/EditingFrame/Components/EditingCanvas/CanvasFunctions";
import { fabric } from "fabric";

fabric.Object.prototype.set({
  transparentCorners: false,
  cornerStyle: "circle",
  cornerColor: "#3880ff",
  cornerSize: 10,
});

export function EditorScreen(props) {
  useEffect(() => {

    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };
    window.addEventListener("beforeunload", unloadCallback);
    return () => {
      window.removeEventListener("beforeunload", unloadCallback)
    };
  }, []);


  const setEditor = useSetRecoilState(EditorState);
  const setFrameListState = useSetRecoilState(framesListState);
  const canvasref = useRef(null);


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fabricRef = useCallback((element) => {

    if (!element) return canvasref.current?.dispose();
    const editor = new EditorModel();
    new Player(editor);
    canvasref.current = new fabric.Canvas("canvas", {
      height: editor.height,
      width: editor.width,
      fireRightClick: true,
      fireMiddleClick: true,
      stopContextMenu: true,
      backgroundColor: "white",
      selection: true,
      allowTouchScrolling: true,
      interactive: true,
      //isDrawingMode:true,
      enableRetinaScaling: true,
      viewportTransform: [0.7, 0, 0, 0.7, 50, 50],
    });

    editor.canvas = canvasref.current;
    new VideoExporter(editor);

     console.log(AppStorage.getEditorConfigs());
    //CHECK IF IT IS NEW PROJECT OR NOT
    if(AppStorage.isNewProject()=== "true") {
      //creates a new project
     
      editor.createProject(AppStorage.getEditorConfigs() , () => {
        //onfinish
        console.log("project created");
        setFrameListState([...editor.frames]);
        initCanvasTouchControls(editor);
      });
    } else {
      //LOAD FROM CLOUD
     
    }

   
    //editor.loadProject(
    //   {
    //     version: 1,
    //     config: AppStorage.getEditorConfigs(),
    //     frames: [
    //       {
    //         version: "5.2.1",
    //         objects: [
    //           {
    //             type: "rect",
    //             version: "5.2.1",
    //             originX: "left",
    //             originY: "top",
    //             left: -47.1,
    //             top: 602.71,
    //             width: 100,
    //             height: 100,
    //             fill: "red",
    //             stroke: null,
    //             strokeWidth: 1,
    //             strokeDashArray: null,
    //             strokeLineCap: "butt",
    //             strokeDashOffset: 0,
    //             strokeLineJoin: "miter",
    //             strokeUniform: false,
    //             strokeMiterLimit: 4,
    //             scaleX: 1,
    //             scaleY: 1,
    //             angle: 0,
    //             flipX: false,
    //             flipY: false,
    //             opacity: 1,
    //             shadow: null,
    //             visible: true,
    //             backgroundColor: "",
    //             fillRule: "nonzero",
    //             paintFirst: "fill",
    //             globalCompositeOperation: "source-over",
    //             skewX: 0,
    //             skewY: 0,
    //             rx: 0,
    //             ry: 0,
    //           },
    //         ],
    //         background: "white",
    //       },
    //       {
    //         version: "5.2.1",
    //         objects: [
    //           {
    //             type: "rect",
    //             version: "5.2.1",
    //             originX: "left",
    //             originY: "top",
    //             left: 12.88,
    //             top: 534.16,
    //             width: 100,
    //             height: 100,
    //             fill: "red",
    //             stroke: null,
    //             strokeWidth: 1,
    //             strokeDashArray: null,
    //             strokeLineCap: "butt",
    //             strokeDashOffset: 0,
    //             strokeLineJoin: "miter",
    //             strokeUniform: false,
    //             strokeMiterLimit: 4,
    //             scaleX: 1,
    //             scaleY: 1,
    //             angle: 0,
    //             flipX: false,
    //             flipY: false,
    //             opacity: 1,
    //             shadow: null,
    //             visible: true,
    //             backgroundColor: "",
    //             fillRule: "nonzero",
    //             paintFirst: "fill",
    //             globalCompositeOperation: "source-over",
    //             skewX: 0,
    //             skewY: 0,
    //             rx: 0,
    //             ry: 0,
    //           },
    //         ],
    //         background: "white",
    //       },
    //       {
    //         version: "5.2.1",
    //         objects: [
    //           {
    //             type: "rect",
    //             version: "5.2.1",
    //             originX: "left",
    //             originY: "top",
    //             left: 77.15,
    //             top: 487.03,
    //             width: 100,
    //             height: 100,
    //             fill: "red",
    //             stroke: null,
    //             strokeWidth: 1,
    //             strokeDashArray: null,
    //             strokeLineCap: "butt",
    //             strokeDashOffset: 0,
    //             strokeLineJoin: "miter",
    //             strokeUniform: false,
    //             strokeMiterLimit: 4,
    //             scaleX: 1,
    //             scaleY: 1,
    //             angle: 0,
    //             flipX: false,
    //             flipY: false,
    //             opacity: 1,
    //             shadow: null,
    //             visible: true,
    //             backgroundColor: "",
    //             fillRule: "nonzero",
    //             paintFirst: "fill",
    //             globalCompositeOperation: "source-over",
    //             skewX: 0,
    //             skewY: 0,
    //             rx: 0,
    //             ry: 0,
    //           },
    //         ],
    //         background: "white",
    //       },
    //       {
    //         version: "5.2.1",
    //         objects: [
    //           {
    //             type: "rect",
    //             version: "5.2.1",
    //             originX: "left",
    //             originY: "top",
    //             left: 129.99,
    //             top: 442.76,
    //             width: 100,
    //             height: 100,
    //             fill: "red",
    //             stroke: null,
    //             strokeWidth: 1,
    //             strokeDashArray: null,
    //             strokeLineCap: "butt",
    //             strokeDashOffset: 0,
    //             strokeLineJoin: "miter",
    //             strokeUniform: false,
    //             strokeMiterLimit: 4,
    //             scaleX: 1,
    //             scaleY: 1,
    //             angle: 0,
    //             flipX: false,
    //             flipY: false,
    //             opacity: 1,
    //             shadow: null,
    //             visible: true,
    //             backgroundColor: "",
    //             fillRule: "nonzero",
    //             paintFirst: "fill",
    //             globalCompositeOperation: "source-over",
    //             skewX: 0,
    //             skewY: 0,
    //             rx: 0,
    //             ry: 0,
    //           },
    //         ],
    //         background: "white",
    //       },
    //       {
    //         version: "5.2.1",
    //         objects: [
    //           {
    //             type: "rect",
    //             version: "5.2.1",
    //             originX: "left",
    //             originY: "top",
    //             left: 244.24,
    //             top: 424.19,
    //             width: 100,
    //             height: 100,
    //             fill: "red",
    //             stroke: null,
    //             strokeWidth: 1,
    //             strokeDashArray: null,
    //             strokeLineCap: "butt",
    //             strokeDashOffset: 0,
    //             strokeLineJoin: "miter",
    //             strokeUniform: false,
    //             strokeMiterLimit: 4,
    //             scaleX: 1,
    //             scaleY: 1,
    //             angle: 0,
    //             flipX: false,
    //             flipY: false,
    //             opacity: 1,
    //             shadow: null,
    //             visible: true,
    //             backgroundColor: "",
    //             fillRule: "nonzero",
    //             paintFirst: "fill",
    //             globalCompositeOperation: "source-over",
    //             skewX: 0,
    //             skewY: 0,
    //             rx: 0,
    //             ry: 0,
    //           },
    //         ],
    //         background: "white",
    //       },
    //       {
    //         version: "5.2.1",
    //         objects: [
    //           {
    //             type: "rect",
    //             version: "5.2.1",
    //             originX: "left",
    //             originY: "top",
    //             left: 369.92,
    //             top: 358.5,
    //             width: 100,
    //             height: 100,
    //             fill: "red",
    //             stroke: null,
    //             strokeWidth: 1,
    //             strokeDashArray: null,
    //             strokeLineCap: "butt",
    //             strokeDashOffset: 0,
    //             strokeLineJoin: "miter",
    //             strokeUniform: false,
    //             strokeMiterLimit: 4,
    //             scaleX: 1,
    //             scaleY: 1,
    //             angle: 0,
    //             flipX: false,
    //             flipY: false,
    //             opacity: 1,
    //             shadow: null,
    //             visible: true,
    //             backgroundColor: "",
    //             fillRule: "nonzero",
    //             paintFirst: "fill",
    //             globalCompositeOperation: "source-over",
    //             skewX: 0,
    //             skewY: 0,
    //             rx: 0,
    //             ry: 0,
    //           },
    //         ],
    //         background: "white",
    //       },
    //       {
    //         version: "5.2.1",
    //         objects: [
    //           {
    //             type: "rect",
    //             version: "5.2.1",
    //             originX: "left",
    //             originY: "top",
    //             left: 478.46,
    //             top: 298.52,
    //             width: 100,
    //             height: 100,
    //             fill: "red",
    //             stroke: null,
    //             strokeWidth: 1,
    //             strokeDashArray: null,
    //             strokeLineCap: "butt",
    //             strokeDashOffset: 0,
    //             strokeLineJoin: "miter",
    //             strokeUniform: false,
    //             strokeMiterLimit: 4,
    //             scaleX: 1,
    //             scaleY: 1,
    //             angle: 0,
    //             flipX: false,
    //             flipY: false,
    //             opacity: 1,
    //             shadow: null,
    //             visible: true,
    //             backgroundColor: "",
    //             fillRule: "nonzero",
    //             paintFirst: "fill",
    //             globalCompositeOperation: "source-over",
    //             skewX: 0,
    //             skewY: 0,
    //             rx: 0,
    //             ry: 0,
    //           },
    //         ],
    //         background: "white",
    //       },
    //       {
    //         version: "5.2.1",
    //         objects: [
    //           {
    //             type: "rect",
    //             version: "5.2.1",
    //             originX: "left",
    //             originY: "top",
    //             left: 582.71,
    //             top: 244.25,
    //             width: 100,
    //             height: 100,
    //             fill: "red",
    //             stroke: null,
    //             strokeWidth: 1,
    //             strokeDashArray: null,
    //             strokeLineCap: "butt",
    //             strokeDashOffset: 0,
    //             strokeLineJoin: "miter",
    //             strokeUniform: false,
    //             strokeMiterLimit: 4,
    //             scaleX: 1,
    //             scaleY: 1,
    //             angle: 0,
    //             flipX: false,
    //             flipY: false,
    //             opacity: 1,
    //             shadow: null,
    //             visible: true,
    //             backgroundColor: "",
    //             fillRule: "nonzero",
    //             paintFirst: "fill",
    //             globalCompositeOperation: "source-over",
    //             skewX: 0,
    //             skewY: 0,
    //             rx: 0,
    //             ry: 0,
    //           },
    //         ],
    //         background: "white",
    //       },
    //       {
    //         version: "5.2.1",
    //         objects: [
    //           {
    //             type: "rect",
    //             version: "5.2.1",
    //             originX: "left",
    //             originY: "top",
    //             left: 651.26,
    //             top: 235.68,
    //             width: 100,
    //             height: 100,
    //             fill: "red",
    //             stroke: null,
    //             strokeWidth: 1,
    //             strokeDashArray: null,
    //             strokeLineCap: "butt",
    //             strokeDashOffset: 0,
    //             strokeLineJoin: "miter",
    //             strokeUniform: false,
    //             strokeMiterLimit: 4,
    //             scaleX: 1,
    //             scaleY: 1,
    //             angle: 0,
    //             flipX: false,
    //             flipY: false,
    //             opacity: 1,
    //             shadow: null,
    //             visible: true,
    //             backgroundColor: "",
    //             fillRule: "nonzero",
    //             paintFirst: "fill",
    //             globalCompositeOperation: "source-over",
    //             skewX: 0,
    //             skewY: 0,
    //             rx: 0,
    //             ry: 0,
    //           },
    //         ],
    //         background: "white",
    //       },
    //       {
    //         version: "5.2.1",
    //         objects: [
    //           {
    //             type: "rect",
    //             version: "5.2.1",
    //             originX: "left",
    //             originY: "top",
    //             left: 729.81,
    //             top: 169.99,
    //             width: 100,
    //             height: 100,
    //             fill: "red",
    //             stroke: null,
    //             strokeWidth: 1,
    //             strokeDashArray: null,
    //             strokeLineCap: "butt",
    //             strokeDashOffset: 0,
    //             strokeLineJoin: "miter",
    //             strokeUniform: false,
    //             strokeMiterLimit: 4,
    //             scaleX: 1,
    //             scaleY: 1,
    //             angle: 0,
    //             flipX: false,
    //             flipY: false,
    //             opacity: 1,
    //             shadow: null,
    //             visible: true,
    //             backgroundColor: "",
    //             fillRule: "nonzero",
    //             paintFirst: "fill",
    //             globalCompositeOperation: "source-over",
    //             skewX: 0,
    //             skewY: 0,
    //             rx: 0,
    //             ry: 0,
    //           },
    //         ],
    //         background: "white",
    //       },
    //       {
    //         version: "5.2.1",
    //         objects: [
    //           {
    //             type: "rect",
    //             version: "5.2.1",
    //             originX: "left",
    //             originY: "top",
    //             left: 729.81,
    //             top: 169.99,
    //             width: 100,
    //             height: 100,
    //             fill: "red",
    //             stroke: null,
    //             strokeWidth: 1,
    //             strokeDashArray: null,
    //             strokeLineCap: "butt",
    //             strokeDashOffset: 0,
    //             strokeLineJoin: "miter",
    //             strokeUniform: false,
    //             strokeMiterLimit: 4,
    //             scaleX: 1,
    //             scaleY: 1,
    //             angle: 0,
    //             flipX: false,
    //             flipY: false,
    //             opacity: 1,
    //             shadow: null,
    //             visible: true,
    //             backgroundColor: "",
    //             fillRule: "nonzero",
    //             paintFirst: "fill",
    //             globalCompositeOperation: "source-over",
    //             skewX: 0,
    //             skewY: 0,
    //             rx: 0,
    //             ry: 0,
    //           },
    //         ],
    //         background: "white",
    //       },
    //     ],
    //   },

    //   () => {
    //     //onFinishLoading
    //     console.log("finish importing");
    //     setFrameListState([...editor.frames]);
    //     initCanvasTouchControls(editor);
    //   }
    // );

    setEditor(editor);
  });
  return (
    <main className={style.main}>
      <EditingFrame fabricRef={fabricRef} />
      <MenuBar />
      <ToolBar></ToolBar>
      <Timeline />
      <PropertyBar></PropertyBar>
      <ProjectExport></ProjectExport>
    </main>
  );
}
