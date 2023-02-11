import { gitHubProjects, gitHubRepo } from "./data.js";

console.log (gitHubProjects);

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
  <button id="btnSubmitProject" class="btn btn-primary">Submit</button>`;
  
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
      <h5 class="card-title">${project.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${project.language}</h6>
      <p class="card-text">${project.description}</p>
    </div>
  </div>`
  }
  renderToDom('#repo-container', domString);
}


  // create repo form
  const repoFormOnDom = () => {
    const repoString = `<form>
    <h1>Create New Repositories</h1>
    <label class="sr-only">Repositories Title: </label>
    <input type="text" class="form-control" id="inputRepoTitle" placeholder="Title of Repo">
    <label class="sr-only">Repositories Descripton: </label>
    <input type="text" class="form-control" id="inputRepoDescription" placeholder="Repositories Description">
  </form>
  </div>
  <button id="btnSubmitRepo" class="btn btn-primary">Create Repo</button>`;
  
  renderToDom('#form-container', repoString);
  }

  //function to add projects to dom
  const newProject = (e) => {
    e.preventDefault();
  
const newProjectObj = {
    id: gitHubProjects.length + 1,
    name: document.querySelector('#inputTitle').value,
    description: document.querySelector('#inputDescription').value,
  }
  gitHubProjects.push(newProjectObj);
  projectOnDom(gitHubProjects);
  form.reset();
  };

  //function to add new repos on dom
  const newRepo = (e) => {
    e.preventDefault();
  const newRepoObj = {
      id: gitHubRepo.length + 1,
      name: document.querySelector('#inputRepoTitle').value,
      description: document.querySelector('#inputRepoDescription').value,
    }
    gitHubRepo.push(newRepoObj);
    repoOnDom(gitHubRepo);
    form.reset();
    };

  const startApp = () => {
    formOnDom()
    navBarOnDom()
    pinnedProjectsOnDom()
    SideBarOnDom();
  };

  startApp();
