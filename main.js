const allRepos= [];
const pinnedRepos = [1, 2, 3, 4];

const exampleRepo = {
  id: 1,
  name: "My Project",
  description: "This project does certain things",
  language: "JavaScript",
  favorites: 12,
  isFavorited: true,
  Branches: 5,
  Issues: 7,
  lastUpdated: "12 hours ago"
}

pinnedRepos.push(exampleRepo);

const renderElement = (displayElementId, htmlToRender) => {
  const display = document.querySelector(`#${displayElementId}`);
  display.innerHTML = htmlToRender;
}

renderElement("repo-container", `<div id="pinned-repo-display">
<h1 id="pinned-display-title">Pinned Repositories</h1>
<div id="pinned-repos">
</div>`)

const renderRepoCards = (repoArray, displayElementId) => {
  const displayArea = document.querySelector(`#${displayElementId}`);
  let domstring = "";
  for (const repo of repoArray) {
    domstring += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${repo.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">${repo.description}</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`;
  }
  displayArea.innerHTML = domstring;
}

renderRepoCards(pinnedRepos, "pinned-repos");

console.log(pinnedRepos);
