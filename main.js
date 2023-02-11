import { gitHubProjects, gitHubRepo } from "./data.js";
import { pinnedGitHubProjects } from "/data.js";

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
  let UserString =`<div>
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
  };

  startApp();
