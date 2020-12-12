import React from "react";

function CardBody({ gitHubUrl, deployedUrl }) {
  return (
    <p className="h4 pt-3">
      GitHub Repo: <a target="blank" href={gitHubUrl}>{gitHubUrl}</a>
			Deployed Application: <a target="blank" href={deployedUrl}>{deployedUrl}</a>
		</p>
  );
}

export default CardBody;
