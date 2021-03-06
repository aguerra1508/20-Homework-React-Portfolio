import React from "react";

function Card(props) {
  return (
		<div class="card mb-3" >
  <div class="row no-gutters">
    <div class="col-md-8">
      <img src={props.image} className="card-img" alt={props.title}></img>
    </div>
    <div class="col-md-4">
      <div class="card-body">
				<ul>
					<li>
					<strong>Title: </strong>{props.title}
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
  </div>
</div>
  );
}

export default Card;
