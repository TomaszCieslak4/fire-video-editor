import { Link, useHistory } from "react-router-dom";
import styles from "./projects.module.css";
import axios from "axios";
import React, { useState } from "react";

export default function Projects() {
  function addProject(event: any) {
    event.preventDefault();
    console.log(event.target.elements.title.value);
    const instance = axios.create({ baseURL: "http://localhost:8000" });
    let data = {
      title: event.target.elements.title.value,
      frameRate: +event.target.elements.frame.value,
      width: +event.target.elements.width.value,
      height: +event.target.elements.height.value,
    };
    instance.put("/addProject", data).then((res) => {});
  }

  const history = useHistory();
  const [createForm, setCreateForm] = useState<boolean>(false);

  const addClick = () => setCreateForm(true);
  const closeAdd = () => setCreateForm(false);

  const NewProject = () => (
    <div id="project">
      <form onSubmit={addProject}>
        <label>Create a New Project </label>
        <button onClick={closeAdd}>
          <span className="material-icons">close</span>
        </button>
        <br />
        <label>Title: </label>
        <input type="text" id="title" name="title" required></input>
        <br />
        <label>Frame Rate: </label>
        <input type="number" id="frame" name="frame" min="1" required></input>
        <br />
        <label>Width: </label>
        <input type="number" id="width" name="width" min="1" required></input>
        <br />
        <label>Height: </label>
        <input type="number" id="height" name="height" min="1" required></input>
        <br />
        <button type="submit">
          <span className="material-icons">send</span>
        </button>
      </form>
    </div>
  );
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.vbar}>
          <Link to="/">
            <img className={styles.logo} src="/logo192.png" />
          </Link>
          <div>
            <h1>Fire</h1>
            <p>Video Editor</p>
          </div>
        </div>
        <Link to="/projects" className={styles.active}>
          <span className="material-icons">layers</span> Current Projects
        </Link>
        <Link to="/export" className={styles.btn}>
          <span className="material-icons">save_alt</span> Exported Files
        </Link>
      </div>

      <div className={styles.main}>
        <div
          className={styles.projectBox}
          style={{
            backgroundImage: `url()`,
          }}
        >
          <h2>Project Name</h2>
        </div>

        <div
          className={styles.projectBox}
          style={{
            backgroundImage: `url()`,
          }}
        >
          <h2>Project Name</h2>
        </div>

        <div
          className={styles.projectBox}
          style={{
            backgroundImage: `url()`,
          }}
        >
          <h2>Project Name</h2>
        </div>

        <div
          className={styles.projectBox}
          style={{
            backgroundImage: `url()`,
          }}
        >
          <h2>Project Name</h2>
        </div>

        <div
          className={styles.projectBox}
          style={{
            backgroundImage: `url()`,
          }}
        >
          <h2>Project Name</h2>
        </div>

        <div
          className={styles.projectBox}
          style={{
            backgroundImage: `url()`,
          }}
        >
          <h2>Project Name</h2>
        </div>
        {createForm ? <NewProject /> : null}
      </div>

      <button className={styles.new} onClick={addClick}>
        <span className="material-icons">add</span>
      </button>
    </div>
  );
}
