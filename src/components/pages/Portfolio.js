import React, { Component } from "react";
import Wrapper from "../Wrapper";
import projects from "../projects.json";
import Card from "../Card"

class Portfolio extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    projects
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        {this.state.projects.map(project => (
          <Card
            id={project.id}
            key={project.id}
            title={project.title}
            image={project.image}
            gitHubUrl={project.gitHubUrl}
            deployedUrl={project.deployedUrl}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Portfolio;

