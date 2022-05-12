import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppConstants } from "../../AppConstants/AppConstants";
import { AppStorage } from "../../AppConstants/AppStorage";
import { cloudfunctions } from "../../Services/Appwrite";
import style from "./createproject.module.css";

export function CreateProjectScreen(props) {
  const navigate = useNavigate();
  

  let config = {
    projectname: "",
    description:"",
    aspectratio: 16 / 9,
    retinascale: true,
    custom: false,
    width: 200,
    height: 200,
  };

  const submit = (e) => {
    e.preventDefault();
    if (config.projectname === "") {
      alert("Please fill in all fields");
      return;
    }

    if (config.custom === true) {
      if (config.width === "" || config.height === "") {
        alert("Please fill in all fields");
        return;
      }

      if(config.width <= 100 || config.height <= 100) {
         alert("values should be more than 100");
         return;
      }
    }
    AppStorage.setIsNewProject(true);
    AppStorage.setEditorConfigs(config);
  
      navigate("/editor");
    
  };
  return (
    <main className={style.main}>
      <menu className={style.menu}>VisualBox</menu>
      <form className={style.form}>
        <h3>Create Project</h3>
        <TextField
          object={config}
          name="projectName"
          label="Project Name"
          onChange={(e) => (config.projectname = e.target.value)}
        ></TextField>

        <TextField
          object={config}
          name="projectName"
          label="Project Description"
          onChange={(e) => (config.description = e.target.value)}
        ></TextField>

        <CanvasSizePicker object={config}></CanvasSizePicker>
        <CheckBox object={config} name="check" label="Enable Retina scaling" />
        <SubmitButton onClick={(e) => submit(e)} label="Create"></SubmitButton>
      </form>
    </main>
  );
}

function TextField(props) {
  return (
    <div className={style.textfield}>
      <p className={style.label}>{props.label}</p>
      <input
        onChange={props.onChange}
        type="text"
        required={true}
      />
    </div>
  );
}

function CheckBox(props) {
  let object = props.object;
  return (
    <div style={{ display: "flex", margin: "15px 0px" }}>
      <input
        name={props.name}
        onChange={(e) => (object.retinascale = e.target.checked)}
        type="checkbox"
        defaultChecked={object.retinascale}
      />
      <p style={{ margin: "0" }}>{props.label}</p>
    </div>
  );
}

function SubmitButton(props) {
  return (
    <button
      name={props.name}
      className={style.submit}
      onClick={props.onClick}
      type="submit"
    >
      {props.label}
    </button>
  );
}

function CanvasSizePicker(props) {
  let object = props.object;
  const [custom, setcustom] = useState(false);
  const [state, setstate] = useState(16 / 9);
  const [width, setwidth] = useState(200);
  const [height, setheight] = useState(200);
  const handleWidthAndHeight = (width, height) => {
    object.width = width;
    object.height = height;
    setwidth(width);
    setheight(height);
  };
  const click = (type) => {
    if (type !== -1) {
      setstate(type);
      setcustom(false);
      object.aspectratio = type;
      object.custom = false;
    } else {
      object.aspectratio = type;
      object.custom = true;
      setstate(-1);
      setcustom(true);
    }
  };
  return (
    <>
      <div
        style={{
          background: "#efefef",
          borderRadius: "5px",
          display: "flex",
          width: "100%",
          overflow: "scroll",
        }}
      >
        <CanvasSizePallette
          object={object}
          isActive={state}
          onClick={(e) => click(-1)}
          val={-1}
          label="custom"
          width="48px"
          height="50px"
        />
        <CanvasSizePallette
          object={object}
          isActive={state}
          onClick={(e) => click(16 / 9)}
          val={16 / 9}
          label="16:9"
          width="100px"
          height="50px"
        />
        <CanvasSizePallette
          object={object}
          isActive={state}
          onClick={(e) => click(4 / 3)}
          val={4 / 3}
          label="4:3"
          width="50px"
          height="45px"
        />
        <CanvasSizePallette
          object={object}
          isActive={state}
          onClick={(e) => click(1 / 1)}
          val={1 / 1}
          label="1:1"
          width="50px"
          height="50px"
        />
        <CanvasSizePallette
          object={object}
          isActive={state}
          onClick={(e) => click(14 / 9)}
          val={14 / 9}
          label="14:9"
          width="78px"
          height="50px"
        />
      </div>
      {custom ? (
        <div className={style.dimInp}>
          <label htmlFor="width">Width:</label>
          <input
            name="width"
            min={100}
            max={1000}
            defaultValue={200}
            onChange={(e) => handleWidthAndHeight(e.target.value, height)}
            type="number"
          />
          <label htmlFor="height">Height:</label>
          <input
            name="height"
            min={100}
            max={1000}
            defaultValue={200}
            onChange={(e) => handleWidthAndHeight(width, e.target.value)}
            type="number"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

function CanvasSizePallette(props) {
  return (
    <div
      className={`${style.canvasSizePallette} ${
        props.isActive === props.val ? style.activePallette : ""
      }`}
      onClick={props.onClick}
    >
      <div
        style={{
          width: props.width,
          height: props.height,
          background: "white",
        }}
      ></div>
      <p style={{ margin: "0" }}>{props.label}</p>
    </div>
  );
}
