import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="content">
			<img className="imgport" alt={props.title} src={props.image}/>
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
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
