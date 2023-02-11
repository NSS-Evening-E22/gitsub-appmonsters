import { gitHubProjects } from "./data.js";
import { pinnedGitHubProjects } from "/data.js";

console.log(gitHubProjects);

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
  </div>`;
  renderToDom("#nav-bar-container", navString);

  // created variables for button functions
  const showOverviewPage = document.querySelector("#ovrBtn");
  const showRepoPage = document.querySelector("#repBtn");
  const showProjPage = document.querySelector("#projBtn");
  const showPkgPage = document.querySelector("#pkgBtn");

  // created button functions
  showOverviewPage.addEventListener("click", () => {
    sideBarOnDom();
    pinnedProjectsOnDom();
    formOnDom();
    footerOnDom();
  });

  showRepoPage.addEventListener("click", () => {
    sideBarOnDom();
    pinnedProjectsOnDom();
    repoFormOnDom();
    footerOnDom();
  });

  showProjPage.addEventListener("click", () => {
    sideBarOnDom();
    formOnDom();
    footerOnDom();
  });

  showPkgPage.addEventListener("click", () => {
    sideBarOnDom();
    formOnDom();
    footerOnDom();
  });
};
// create the user profile sidebar
const sideBarOnDom = () => {
  let UserString = `<div>
  </div>`;
  renderToDom("#user-profile-container", UserString);
};

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

  renderToDom("#form-container", headerOnDom);
};
const startApp = () => {
  navBarOnDom();
  formOnDom();
  sideBarOnDom();
  pinnedProjectsOnDom();
  footerOnDom();
};

startApp();
