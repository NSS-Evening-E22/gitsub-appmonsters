console.log("linked!");
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
  <button id="btnSubmitRepo" class="btn btn-primary">Submit</button>`;
  
  renderToDom('#form-container', headerOnDom);
  }
  const startApp =() => {
    formOnDom()
    navBarOnDom()
  };

  startApp();
