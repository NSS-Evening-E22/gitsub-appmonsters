// created renderToDom function
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

// created startApp function
const startApp = () => {
  navBarOnDom()
};

console.log("linked!");

startApp()
