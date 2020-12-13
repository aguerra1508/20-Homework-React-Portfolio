import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            Title: {props.title}
          </li>
          <li>
            <a href={props.gitHubUrl} target="_blank">GitHub Repo</a>
          </li>
          <li>
            <a href={props.deployedUrl} target="_blank">Deployed App</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
