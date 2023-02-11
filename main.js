import { gitHubProjects } from "./data.js";

const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
  
    selectedDiv.innerHTML = htmlToRender; 
  };

// created navBar html function
const navBarOnDom = () => {
  let navString = `<div class="btnContainer">
  <button class="btn btn-primary" id="ovrBtn">Overview</button>
  <button class="btn btn-primary" id="repBtn">Repositories</button>
  <button class="btn btn-primary" id="projBtn">Projects</button>
  <button class="btn btn-primary" id="pkgBtn">Packages</button>
</div>`
renderToDom("#nav-bar-container", navString);
};
// create the user profile sidebar
const SideBarOnDom = () => {
  let UserString =`<div id="user-card">
  <img src="https://i.pinimg.com/originals/60/77/a5/6077a52e5c0612822bfb217c0a1ca817.jpg">
  <h1 class="profile-names">
  <span class="real-name">Caeser Droll</span>
  <span class="user-name">drzaiusfailure</span>
  </h1>
  <div id="user-bio">
  <p class="staus-text">Apes togther sad</p></div>
  <button class=profile-btn>Edit Profile</button>
  </div>
  <div id="achieve-box">
  <h2>Achievements</h2>
  </div>
  <div id="org-box">
  <h2>Organization</h2>
  <img src="">
  <img src="">
  </div>`
renderToDom('#user-profile-container', UserString)
}

//making form
const formOnDom = () => {
    const headerOnDom = `<form>
    <h1>Create New Project</h1>
    <label class="sr-only">Project Title: </label>
    <input type="text" class="form-control" id="inputTitle" placeholder="Title of Project">
    <label class="sr-only">Project Descripton: </label>
    <input type="text" class="form-control" id="inputDescription" placeholder="Project Description">
  </form>
  </div>
  <button id="btnSubmitRepo" class="btn btn-primary">Submit</button>`;
  
  renderToDom('#form-container', headerOnDom);
  }

const pinnedProjectsOnDom = () => {
  const pinnedGitHubProjects = [];
  const filterProjects = () => {
    for (const project of gitHubProjects) {
      if (project.isFavorited === true) {
        pinnedGitHubProjects.push(project);
      }
    }
  }
  filterProjects();
  let domString = "";
  for (const project of pinnedGitHubProjects) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-muted">${project.name}</h6>
      <p class="card-text">${project.description}</p>
      <p class="card-link">Javascript</p>
      <p class="card-link">Another link</p>
    </div>
  </div>`
  }
  renderToDom('#repo-container', domString);
}

  const startApp =() => {
    formOnDom()
    navBarOnDom()
    pinnedProjectsOnDom()
  };

  startApp();
