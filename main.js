console.log("linked!");
const rendertoDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
  
    selectedDiv.innerHTML = htmlToRender; 
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
  
  rendertoDom('#form-container', headerOnDom);
  }
  const startApp =() => {
    formOnDom()
  };

  startApp();