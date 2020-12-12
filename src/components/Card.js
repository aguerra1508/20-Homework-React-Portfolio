import React from "react";
import CardBody from "./CardBody";
import CardBtn from "./CardBtn";
import CardImg from "./CardImage";
import CardHeading from "./CardHeading";

function Card({ title, image, gitHubUrl, deployedUrl, handleBtnClick }) {
  return (
    <div>
      <CardHeading title={title} />
      <CardImg image={image} />
			<CardBody 
			gitHubUrl={gitHubUrl}
			deployedUrl={deployedUrl}
			/>
      <CardBtn
        style={{ opacity: image ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="back"
      />
      <CardBtn
        style={{ opacity: image ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="next"
      />
    </div>
  );
}

export default Card;
