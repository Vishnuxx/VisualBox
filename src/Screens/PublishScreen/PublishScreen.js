import style from './publishscreen.module.css'

export function PublishScreen(props) {
    
    return (
      <main className={style.publishScreen}>
        <menu>
          <h3>Publish</h3>
          <button>Publish</button>
        </menu>
        <section>
          <div className={style.inputHolder}>
            <input
              className={style.input}
              type="text"
              placeholder="Title"
              name="title"
              required={true}
            ></input>
          </div>
          <div className={style.inputHolder}>
            <textarea
              className={`${style.input} ${style.inputdescription}`}
              placeholder="Description"
              name="description"
              required={true}
            ></textarea>
          </div>

        </section>
      </main>
    );
}

