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
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>GitHub Repo:</strong> {props.gitHubUrl}
          </li>
          <li>
            <strong>Deployed App:</strong> {props.deployedUrl}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
