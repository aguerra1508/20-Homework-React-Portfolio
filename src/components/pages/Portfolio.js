import React, { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";

function Portfolio() {
  const [project, setProject] = useState({});
  const [projects, setProjects] = useState([]);
  const [projectIndex, setProjectIndex] = useState(0);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadProjects();
  }, []);

  function nextProject(projectIndex) {
    // Ensure that the user index stays within our range of users
    if (projectIndex >= projects.length) {
      projectIndex = 0;
    }
    setProject(projects[projectIndex]);
    setProjectIndex(projectIndex);
  }

  function previousProject(projectIndex) {
    // Ensure that the user index stays within our range of users
    if (projectIndex < 0) {
      projectIndex = projects.length - 1;
    }
    setProject(projects[projectIndex]);
    setProjectIndex(projectIndex);
  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newProjectIndex = projectIndex + 1;
      nextUser(newProjectIndex);
    } else {
      const newProjectIndex = projectIndex - 1;
      previousUser(newProjectIndex);
    }
  }

  function loadProjects() {
    API.fetchUsers()
      .then(users => {
        setUsers(users);
        setUser(users[0]);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1 className="text-center">Welcome to LinkedUp</h1>
      <p className="text-center h3">Click on the arrows to browse users</p>
      <Row>
        <CardContainer
          title={user.login}
          image={user.image}
          profileUrl={user.profileUrl}
          handleBtnClick={handleBtnClick}
        />
      </Row>
    </div>
  );
}

export default Portfolio;
