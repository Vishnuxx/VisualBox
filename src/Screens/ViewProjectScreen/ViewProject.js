import { useState } from "react";
import style from "./viewproject.module.css";

export function ViewProject(props) {
  return (
    <section className={style.page}>
      <div style={{ height: "fit-content", position: "relative" }}>
        <ProjectViewer></ProjectViewer>
        <LikeAndCloneBar></LikeAndCloneBar>
        <div className={style.title}>
          <h3> THis is a sample title</h3>
        </div>

        <div className={style.description}>
          <h5> THis is a sample description</h5>
        </div>

        <CommentsSection></CommentsSection>
      </div>
    </section>
  );
}

function ProjectViewer(props) {
  return <div className={style.projectviewer}></div>;
}

function LikeAndCloneBar(props) {
  return (
    <nav className={style.nav}>
      <LikeButton></LikeButton>
      <CloneButton></CloneButton>
    </nav>
  );
}

function CloneButton(props) {
  const [liked, setLike] = useState(false);
  const click = () => {
    setLike(true);
  };
  return (
    <button
      className={`${style.cloneButton} ${liked ? style.cloneActive : ""}`}
      onClick={click}
    >
      {liked ? "Cloned" : "Clone"}
    </button>
  );
}

function LikeButton(props) {
  const [liked, setLike] = useState(false);
  const click = () => {
    setLike(!liked);
  };
  return (
    <div className={style.likeContainer}>
      <svg
        className={style.likebutton}
        id="heart-svg"
        viewBox="467 392 58 57"
        onClick={click}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Group"
          fill="none"
          fillRule="evenodd"
          transform="translate(467 392)"
        >
          <path
            d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z"
            id="heart"
            fill={liked ? "#f53c3c" : "#c0c0c0"}
          />
        </g>
      </svg>

      <label htmlFor="svg">0k</label>
    </div>
  );
}

function CommentsSection(props) {
  return (
    <section className={style.commentssection}>
      <h4>Comments</h4>
      <div style={{ width: "100%" }}>
        <div className={style.commentText} contentEditable={true}></div>

        <div className={style.commentbox}>
          <Comment
            comment="fjssjdkjfsdf\n/n dsjdkfdsjdfkjsldkfjldfdsfdfs
         dfdsfsjlfkjldkslfksldkjflkjsdlkfjlksjdlfkjlskdjflkjsarjhfkaljrhfkljahgkajhfkljdhkflsjhfkljghsdkfljghsdkfjghskldjfgldkjflksjdlkfjlskdjlfkdjslkfjlskdjflkjsdlkfjldskjflkdsjlfkjdlkfjldkjflksjdlkjlkjslkfdjlskjflskdjlfkjsdlkfjsalskfalkk"
          />
          <Comment comment="fjsk" />
          <Comment comment="fjsk" />
        </div>
      </div>
    </section>
  );
}



function Comment(props) {
  return (
    <div className={style.comment}>
      <img src={props.icon} alt="icon" />
      <p>{props.comment}</p>
    </div>
  );
}
