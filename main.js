import { gitHubProjects, gitHubRepo } from "./data.js";
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
  </div>`;
renderToDom('#user-profile-container', UserString)
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

    const footerOnDom = () => {
      const footer = `<ul class="nav nav-tabs">
      <div style="width: 2rem;">
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEhIVFhUXFxcVGBUXFxYWFRcWFhcWFxcYFxYYHSggGB0mHhUVITIhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0mHyYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABKEAACAQICBwQGBggDBgcBAAABAgADEQQhBQYSMUFRYXGBkaEHEyIyUrEVQnKSwdEUIzNTYoLh8DSishdDs8LS0xYkVGNzdPEI/8QAGgEAAgMBAQAAAAAAAAAAAAAABAUAAQMCBv/EADIRAAEEAAMECgIDAAMBAAAAAAEAAgMRBCExEkFR8AUTYXGBkaGxwdEi4RQz8SMyQhX/2gAMAwEAAhEDEQA/AIWC0NaGtPULyyTtO2ilpyRS0W0For6pt9j4GFAkUtctBaHtO2lKIloLQ1oLSKItp20NaC0iiLaM8bjlp5b25fmeEd4ipsKWPAX/AClTqOWJY7zmYFjMSYgA3U+nJWsTNrMqS+mXv7q25Z38f6SUwtcVFDDw5HlKxJbQFT2mXmL+GX4wXCYuR0oa82CtJI2hthS9oLQ9py0boZFtBaGtBaRRJ2gtFLQbMiiStBaKWgtLUSVpy0VtFMLhKlVhTpozsdyqCT29B1OUlq02nJb6Ho9xrC59Un8LMb/5Aw84z0nqXjKALbAdRvNM7Vu1bBvKYjERE0HDzWxw8oF7JVcgnbjmJyEbJ4FD7beKXtO2hrTtpwrSmj8C9aolGmLu5sBw5knoACT2TXNAaq4fCqDsipU41GAJv/CDko7M+ZMrXotwILVq5GYARem17TfIePWaNFOOncX9WNBr288E3wGHaGdYRmdOwfvW+SJAad1Ww+KU7ShH4VFADX/iA98dD3Wk/BAGucw200Uwe0PFOFhYPpHR70KrUagsymx5EbwR0IsY3tNA9KOBFqVcb86bdeK+HteMolOizX2VJtvsCbdto/gl6yMO8+9edxEXVSFnlz6JK05aHAhrTUrC0nadtD2nbSWoonT72p25sB4XP4CV2Tusp9lB1PkB+cgojx5uY9gCMgH4ISR0Ef1o7D+f4SOknq+L1f5T+A/GZYb+5veF3J/1KsFpy0VtBaehtAJO0FopaFtIrtEtBaH2ZNapaFGKxAVv2ajae28gEAKDwuSO685e8MaXHQLpjS9wa3UqP0ZobEYj9jSZwN7ZBR/MxAv0veS1XUTGgXCK3RXS/nYec1ihRVFCIoVVFgoFgAOAEWit3SMl/iBXj+vZN2dGx1+RN896wOro+qtQUWpstQkKEIsSWNltfmeO6bFq5oOnhKQRQC5zd+LN/wBI4D8bx/iMHTdkd0Ush2kJ3qbWyP8AfCO5liMWZmgVXHtWuGwghcXXfDs59tKtCCCCCIxIfotP4F+6J2LQSKLMtUNTRXQYjEEhD7iKbFgOLNvA5Wz43k/jtQsI62p7dJuDBi471Ym47LSX1Xrq+EolbWFNVIHAoNlh4gyXhUuJl6w5kUdEHDhYerH4g5a7/NVTUjR9TDCth6ozDqwYe66sLAr9035S1zlp2YSPL3Fx1KJjYGNDRuQgggnC7UJrLoj9KWnSOSioHcjfshWFh1JIHjJPCYZKSinTUKo3ACw/qescQTovJaG7guQwBxeNSs99JejaSKuMFkJbZcjINcEhj1yIvxuJlVbWHP2Ey5scz3DdNC9OtZ/VYdAD6v1hLNwL7J2F65bZ8Jjs2/lSNYGA6JViYWGUmuePirPg9Oox2XGwed7r48JLWlCk1oPS2wRTc+wcgfh/p8oVh8cSdmTz+0JJBvanWtC+yh6keIH5SvXln1oT9UDyceYI/KVWD44VMe4LSDNgRryb1YS7ueSgeJ/pIKWLV1lp0qlVshtWv9kcOebWnODH/MDuFn0VzH8CpmrUCgsxAA4mQuJ1gF7U0v1bLyEi9JaQas1zko91eXU9Yym0+OcTUeQ47/0uGQAZuVjwWnVY7NRdm/1gcu/lJkiUOXfV+t+rouw2rWJB4hW3d4FpvgsS6S2vzrO1nNEG5hWnRupOKrKHOxTBzG0TtEc9kA277S06n6u1sHUqmoVZXVbMpORUnIggb9ryk3gtM0qqB0NweWefI8j2xPEY1myGQ8/GYPmmktrqATNkGHip7SSe/sI7t6l4JDHSbIt2K2G9myA7Te0aYfTi4gH1bggGxAyPbY52MGELtdyJOJYMt/BP8dido2U5DO/MxbD6QBFnyPPgfykbATNjG2qQ4ldtWpv9JT4h4xOpjUHG/Z+cqOj9P0qtZ6IIFj7DXyfLO3W97cxJeUcPsmja6GKLhbaUh9Kfwef9IJHwS+qbwVdc/ikdU9CV8JtI9RHptnYXuG3XFxuItfsHWWeMcJjARZjY8zxjPWPWTD4Gka1Zsr2VFsWdt9lF/M2Ewlc4uJdqiYthjAGnLtOimoJk6el2k1UM2HqKoyBDKxt1XLyM0LQesGGxdP1lCqrDiNzKeTA5g9s4rgrZMxxoKWnCYQ1l+IeIjDGYwEbK7uJ/AS2sJNLp8gaLUnBI/C40WCtkRx5w9fHKB7JufLvlmN11SoSsq7Udrrq+uPwj4c2De/TY/VqLfZPYblT0YzzTi8O9J2pVFKOhKsp3hhvH9Z6lwmMBFmNjzPHvlS9IepVDHr66myU8SosH+rUA3JUtn2NvHXdOXMIKxka2QbQPPBYFeC8W0jgauHqGlWQo43qeXMEZMOoyjW84QlKeo431uGqUWPtIAynmqkE+A8j0kLecp1SpuOo7iCCPAmE2po95eBeoFeG5ctj2bpKXjmtiiaaUh7q3J6sSTfuFh4xjtQ21OQSLreui20e8F4nePNG6PqV2sgy4sfdXtPPpKALjQ1VHIWVzAYVqrimvHeeQ4ky90aIVQi7gAB2CJ6M0alBdlcyfeY7yfy6R3aOsLh+qbnqUuml2zloi0qjKbqxU81JB8o7+lsR++qfeMbWnLQogHULIOI0XK9d3zd2b7RJ+c5RqsjBkYqw4g2MFpy0tVamaWtOJAsSjdWXP/KRGekNOV6w2WeyneqjZB7eJ7LyPrVFQFmIAHEyHraw0wfZRm6+74cZg90MRt1D39FqHSPFWSpaS+G1kxKC22GH8YBPjvPfK/o/SCVgdm4I3qd/9Y6tNAWSNvULm3MPBTn/i3E/wfdP/AFQSEtBK6pnALrrpOK05cfSIuKqffX85SPSj6utQT1dQM9JyxVc/ZIs2YyuLA9l5StJ6dcOyU7AKSLkXJIyO/cITD6yOPfRWHT2T+IMWudBZYXHhpzoUWZJCLDR5qEjvRWlKuGqCtRcqw8GHwsPrDp+MXxuHp1L1KB6tS3MvMqOI7N3yjIE9hYfkfC7a61u+qestPHUtpfZqLYVKfFSeI5qeB7pM0aoYbQzFyPAkHzE89aH0rVwtUVqLWYXHRlO8HmPxAPCaTq9rCVQMnt02z2SbEHjY8Dz7IZBcoI3hR8wYReiv8EgRrTTt+za/L2beN/wkdpHTz1QUUbCnfndiOV+E2ELydFTsTGBkbSz6xstZ7APTvYDccgBcHra8kqOseHI9pin2h+IuJRMRiQMlzPPhHmgtXa+MO0DsoMjUYEjsVfreQ6wbF4yCP8Wiz6fvw87yQ8L5nuoZ9nPyn+s+mcHiU9U+H9cBuZv1eyeaN7wPh3yiU9BUBwY9rH8LTXsLqThEHtK1Q82JA8BaHxGpuDbdTZDzV2y7muIkfjC85+g590wODxJGo8z9LJkwFIbqafdBPiYsKK/CvgJadP6oVaANSmfWUxmcrMo5kcR1HgJWZW1e9ASRvjdT9UQ0V+FfARJ8DSO+mh67Iv4xxJfQWr9bFH2BsoMjUN9kdAPrHp5iS6zVMa5xpuqrLaFoE32O4FgD5/KTNCsqgKFCgbgu4d00HCakYVB7e1UPMsVHcFt5kxavqdg23UivVXb8SRNYcfJCfwPpf79UY7o6dw/IjxJ+lQkYHcYLSX03qZVog1KLGoozItZ1Hdke63ZK/QxnBvH846wvSscmT8jx3fY8fNLpsM+J1OHPynVpy0UtC2jVY2iWjbHYpaSF23cBxJ5COqjAAkmwAuTyAlF0vpA1n2vqjJRyHM9TB8TiOqb2nT7WsMe2exFx+Pes20xy4LwH9esbQsf4LCLlUrNs0+X1ntwUb7dYmAdI7t3k/J57Efk0KT1Xwh9qqdxGyOueZ8h5yeIlfr6xWGzSpgKMhtcvsjd4xChrDVDXezLxFrEDpaM4sTBC0MBvtrL7Qj45HnapWa07OeuT4hOxgh1XNPaIZWaqgJUksbb1J336cbyEmjytaTrYFyd+18VIW+fsntirE4VoO0HAXuPx9IqKcnIi+5V0G2YgqPfM7+fPti9enS+pUb+dLeak/KNTF5FIoZrhk/qjpDZqGixyfNejAfiB5CV4mBapUhlyIIIPUG4ncchjeHjco5ge0tWpARDE1vqjvMIuND00ZfrqG7AROBJt0ljK/wCJh7z8eWvkl8Ue8pxq/oj9KxC0ty73I4AWvbtJA75seHoJTQIgCqoAAG4ASjejuhYVqnHaUX7AT+IhPTBp+phdG1CjFXqstBWFwRthixBG47CvnwvE0UlOqs9yf4KINi2t5UdrZ6XMHhKjUaKNiaimzbLBaSnivrLG5HQEdZGaG9N2GqOFxOGegCbbav65R1YbKsB2AzB4IQMJHWevHnJF7RXsnDYhKiLUpsHRgGVlIKsp3EEbxM4130KKFUVKYtTqXNhuVhvUcgb3HfykZ/8Az9pl2TEYJiStPZq0/wCEOSHUchextzLS+a/Ug2CdjvRkYdpbZ+TGAlpjk2UPjIxJCSdwJ8ln+g9Gtia6UBltH2j8IHvH++JE2rCYZKNNaaAKiiwHQTO/RnSG3WqcVCKP5iSf9AnPTfp+pQ0d6tG2WruKJIyIp7LM9u2wXsYzeN4D6Az3LLARARbfH2BpM9Z/TJg8O7U8PTbEsDmysEo3vmFqWJbtAtyMb6B9NWFquExNB8Pc2DhvW0x1YhVZe4GYHBN/4kdV685I3aK9l0qgYBlIZSAQwIIIOYII3gjjM81/0KKTjEUxZKhIYDcH33/mF+8HnGXoC009XC1sK5JGHZShPBKu17I7GRj/ADS865YcPg63QBh2hgfleAFpjk2SssVGJIiN4zHh96LLcJi9k2Pu/KSkr7SQ0Viv923d+Ij7o7GEEQvOW76+ua8zIz/0FGa4Y/ZAoKc29pvs8B3keUqgMV0ljPW1XqcGbL7IyXyAiKmczydY8u8u5MIo9hgCUU2z+e7wnXck3JueZhBHFFE+u5H2V2j5kCZAXkrKSkjorRT1iDYhOLc+i8zHWj6mBU+1tk86q3H3Vy8ZaqTqwDKQVO4jdbpDsPhGvP5OBrcD7oaWcgZA95SXqV+EeEEW2YI250QVouOw5qU3pg2LKQO0iZ7XpMjFGBDDeDNMAjfF4GnVFqiBu3eOwjMQPE4fraINFawzbGR0WbThl2rapUT7rOveGHmL+ca1NTRwrkdqX/5hADg5RuvxHzSLGJj4qnkziqWIUbyQB2nKXBdSl41j3IB8yYr/AOG6NAq4Z2a+W0RYZZ5AdZxJh5I2F7hkO0Lr+VHuzKc6Mw+wioM9kAXkmEyjfCLHxTKJic1y0XqrFqBiADVpcTssOoF1b5r4w/pV0A+N0dUp012qlMrWRd5JS+0B1Ks4A4m0quGxzYeqtZN6ndwYHIqe0TTtGaQp16Yq0zcHhxU8VYcDMzbXBwTXAyhzOrOo9l48gnpbWn0XYDGua1noVWJLPSIAcniyEEX6ixPGR2hvQ1gKLh6r1cRY3CNZKZ5bSrm3Ze3SHDGR1Zvn0ReyVG+gHQNSnSrY1wQtbZp0weKoSWbsLWA+yZdPSDiQuFNPjUYDuB2ifFVHfLA7U6NO52UpovRVVRkAANw4WmW6z6ZOKrbYuKa+ygO+3Fj1P4CBbRkk2yhsbM2OIt3nL79FMejfEBatWkfrqCOppk5eDE90W9MugHxejyaSlqlBxWCjMsoBVwOeTbVv4ZUMDi2o1FqobMpuOXUHoRcd81vQ2laeJpirTPRl+sjcj+fGW4ljg8LLo+UOZ1W8exz9CvIEE9I6y+ifAYt2qrt0KjG7GlbYZjvJpsLD+W0b6B9D2j6DipVNTEEG4Wpsinluuij2uwkjpDP5kdXnz6I7ZKbegjQL0MJVxTgqcSy7AOX6untbLW6l2tzAB4y3684oJg6nNyqjrc3P+VWk4zKq3JCqo6AADyAmXa46c/SqoCfskuF/iJ3sR1sLdO0wGzI8uKwxkojiI3nIKttEnirRJoQEhVTxFHYcoeB8uECmW3D6FpYljtllYAWKkbr53BB5jxhm1KXhWbvUH5ERnFBJIwPb7oj+TGMnHNVQGdlpTU3nX8Et/wA0cUtUqQ953PZYfgZqMHMd3qFycTHx9D9KoKCTYC5O4DeZe9B4RqVFUb3syRyub2i+D0XRpZogB+I5t4nOOyIbhsL1R2nGyhZp9sUNElaCKWghtodHAhgIYCACcqkLQwE7aACUqQtInSrXcLyHz/sSZAlH1n01s1XSmfaBsW37Nhaw6/KL+kiepDRvI+/gLbDsMj6CseGZRa5A7SB848aslvfX7wmT2ao3FmPPMnvMfDQj80/vuiExAalPsP0fLKD1YJrnn9q7YysnxL4iE0bpd6DbdKqFPHMEMOTA5GUz6Ef4k8f6QfQj/Evj/SXsM4rT/wCJir2g034fa17CekXhVpL9pXt/la/zimI9IyW/V0Rfm1QADuAz8RMm0dqzVrVUoqyBnYKC17XO69hLX/sZx/73Dfeqf9uUMMw5hdyQYyLJ5I8G2l9L6w1cSf1tRdkZhFICjuvmepvIz1q/EPERy/oexwIBq4b2jYe1U32Lfu+SmKf7Gcf+9w33qn/bmggpBOwT3G3Eny+0y9avxDxEcYHSbUX9ZSqhW5gjMciNxHQwx9DuO2gvrcNcgn3qm4WH7vqIb/Yzj/3uG+9U/wC3J1CoYBwNgn0+1aMH6RCABVpoebK+z5G/zEXr+kanb2KQJ61FAHgDfymcaxej7FYMIatSidskDYZr+za97qOYkH9CP8S/33TIwMBzKYx4THPbbCSONN+/hX3TOstXE5VKihN/q1Nl6Xzu3fIhqq/EPESs/Qj/ABL/AH3QfQj/ABL4/wBJ0GMGVrF/QuLedpwJPh9qwtVX4h4iE2gdxB7JXcRox0G0bEDfbh1jNGINwbHmJ0IwdChpej3xO2X2D2j9q8aJqbNZevs+I/O0s9pQNC6R2mUN7wIP2gCPOaCRHHRZOw5p3H3H6SjEsLXC0mRARFCIUiM0OkiIUiKkQpEtWk7QQ9oJdqJQCHAgAhwJyqXAJ0CdAnQJSpQ2tGk/0egWU+2x9WnQnee4AnttMxlq9IeIvWp0+Cptd7n8kEqsTY15dLXDL79fZOsDGGxXvOf16e6ltX6ebNytbsNyfwkxIjV9/fXsPzH5Sao0mdgigszEKFGZJOQAEVyf9ivedFV/EZXbfftG0SCajoL0c0ggbFFnci5RWKovS65set7fOROvOpdPD0/0nD7WyCA6ElrAmwKk52vYEG++dGJwFlaMx8D5OrB8ay58KVO0ViRTrUqp3JUpv911b8J6FGec84zSNVdfqKUFo4ksHpjZVwpYOo90G2Ya1hnlxvOoHhpIKH6Twz5A1zBZG7fz9qd1o0sKWJwNK++ttN2FWoi/aap+7LVMF1j02+KxLYjNdwpjK6ovu997t2sZomG9IOG/RxUcn1oXOiFa5e31WtbZPMnLtymjJRtG0HiMDI2OPZFmqNcSb+avsT1NL30qcNfIYe1v/c2hU/0ES0zA8LpuomLGNOb+sNRhwIYnaUchskgcspq+I11wS0fXCsrG1xSB/Wk8FKb17TlLjkBBtVi8E9hYGi8gMs89/wClTPSxjA+Ip0R/u02j0aobkeCoe+UeOtJ4569V67+87FjyHIDoBYd0e6raEbF4haQOytizt8KC17dSSAO3pBnW52SdRNbh4QHaNGfz6qIgmwVPR1gStgKitb3w9zfnYgr5TONZ9XauCqBH9pGuVcCwYDeCODC4y6y3xubmVnBjYZnbLTn2qHvKpiKWy7JyJHdwlrEq2Na9Rz/F+M6i1KXdOAdWw77PlWfsEnQqlGDjepB8OE1/C1xURai+66hh2MLzHppepdQtg6d+Bde4MbeUbYB1Pc3iPY/teL6RaNlru2vT9KZIhSIoROERqlKTIhCIqRCkSK0S0EPaCWolAJ0CACGAnK5XAIcCdAnQJSpZlr1/i2/+NLdlv/2QEu3pE0YfYxKi4A9U/TMlT2ZkeEplOmWvYbgWPQAXJ/vnEmKGzK6+/wA16DCODoWkbsvJKYDEercNw3HsP937ptPos0IGLYx89n2KfbYbTjuIA+00w+aR6LfSCMJbBYo2oEn1dX90WNyH5oSSb/VJ5e6MGjaBKbYfGOjhdDuPpxHjl68ct2jHS+EFahVpfGjL3kEDzjqnUDAMpBBAIINwQcwQRvEUm6gJBsLzeDcAzsVxdIK7oNysyjsBIHyiUWr2d3ohBBBIqQgggkUQmm+iPBgU61a2ZdaYPRVDG3e/lMymv+i2nbA3+Kq58Aq/8s2hH5oDpN1Yc9pH38K4SH1n0QuKw70TbattIT9VxfZP4HoTJiRunNM0MJSaviKgRB4seCqu9ieQhZojNeca8sIcDmF570lWNJWJFmFxY7w26x7PwlWEltaNLjF4mpiFTYRnZlS99kHeTbiTme22dpH4OjtuE3Xv4hSR5iDtbshTpHG/yH7QyaBl8nncAkppupVErg0v9Ys3cWNvK0oOH0U7OFYWFwCel+E1ulRCKEUWVQFA5ACwEZdHttxdwHv/AIvPdISgtDR38+aKRCkRUiFIjRK0QiFIhyJwiWrSdoIeCWojgQ4nBDgTlcoAQwE4BDgSlERkBBBAIORBzBHIiUvT+Bp06eIFJFTL6oAyBBI+cvIErmNpBqlVG3NdT2EWMWdKGo2nt+CicI4h/PFZfBHWksA9CoabjsPBhwI/vKH0ZoypXvsj2QCS3DIZAcyeUAsVe5PiQBe5TOqWvWL0fZKbCpRvc0KlymZudg76Z37ss7kGa7oH0p6PxAAqucM/FauSd1Uezb7VuyefIJ0CQtGvIyV3xpDVahX2gaj2tne7G1rb5rerWp1ChRHraSVKrC7l1DgE/VUHIAec854N6ittUrhl9u4JBGz7W13WlmwPpJ0rSt/5ouBwqJTe/a2zteczYwNOeaa4jpYzMDAC3jnr6BXfSmpl9I/o1O60nUVr2v6untWYAnjtCwHVZccVqJg2perWnsNbKoCS4PM3Nm7PlMppelzSCttmnhWawUsadQMVBJtlVsN54SSHpqxP/pKP33nQawWuJOkpHBtOIoeZ4n9o+rmqj18W+HqXVaJPrSOhIAU/xWNjyuZcdb9TMP8AozVKFIJUpKXGzc7SrmykfWNr2O+4EoA9LmIVqj0sJh1eqwZmJqNcqqoMgV4Lz5xviPS9pJxbZwy5EezSc3v9uoZTWNDaK0m6Vc+QPaaqsu3fzwTCaxqLpOhh9Hq9etTpKHcXqMqC+1uFzvzGXWYC2kKxFtvwAHyiBpkguc7EAk5nO5GfcZxGwtNldY7pWOZmwxp1uzQ48CeK23WX0wYemCmDQ134OwKUgeedmfsAA6zI9P6exGNqeuxNQuwuFG5EB3hFGSjIdTYXJkbDUqZZgqi5JsJqSkznk6oskNB071C3wg+Jy/OOcboQ3Hq7WsAb5Zjj3x9gcGKS7O8nMnr+Uyc8FuSEkmaWZb0vT95e0fOaERM9p+8vd85ohEY9F6P8PlKcTuSRE4RFCIQiNkMkyIUiKEQhEitEtBDQS1EqBDATghxKVIAQwEAnQJSpGAlexP7Z/tfgJYgJTNIaQIxFVbDJrcekWdJgmIVx+CiMICX5KaNNXFnVWHJgCPONsTYCwAAHAZDwjVdItbcPOMsbpRuQ84jDCmbgaUTpLQSuxdDskm5FrqTz6RnT1de/tOoHQEnztHh0q3wjzgOlG+Eec3/MZLgSygVaeYPAJSUqo37ycye38pAaR0M6ElAWThbMjoRvPbJT6Vb4R5zg0o3wjzlAPBtUx8jHXrarOwd1jflaPsFoipUOYKrxZhbwG8yY+lW+Eec79Kt8I85oXO3BbHEPrIBF0hoYMirTsCm6/EHfc8753kFU0fVXI027hceIk8dKN8I84PpVvhHnOWl4XEcsjRWqh8Noes593ZHNsvLeZYaOjaa0jStcHeeJPPpw8I2GlG+EecH0q3wjzlO2yuXySPTGrq69/ZdSOtwfIZyS0dotaOd9pufLsHCJfSrfCPOBtJt8I85DtkUo58jhRKftEmjQ6Rb4R5wpxrWvYec52Cs9kp7T95e75zRGEy6hiztLkPeHzE1Jo26NBAf4fKFxQqvH4SZEKYczhjRCpMiFMMZwy1aJaCdgl2olBDCFEOJyouiHEIzgAsSABmSTYADiTwlK1i10OdPC9hqkf8MH5nw4zOSRsYty6jidIaarFp7WOhhB7Z2ntlTX3j1Pwjqe68pFPGmvUaqQAXO1YZgX4XlarEsSzEkk3JJuSeZJ3ye0UwCp1AEUYqd0gz0TJsLYBYzPFTb7suEica8kdvKNKyhjugQ1XTpKbmo+ilzeCumd44gnaz2s7TKOKdPLPjFhSFr2nJLUL70TRltlOotzHIW+U6y2NpLV9YkK6cYjHs6tIWJtIqElDNIU6eRvxiBFo9g2byKB+aa0kuZ2uud46dbG05JagfeaZCOBT9m393iq08r2gkUL70TamdlgTwIJ7AZqeDxlOsgqUnDqeI+R5HoZmhUHfIbRGlK2Gf1lF9k8RvVhyZePzhmFn6sm9CqdB14yNEeWf+LaTCmQWrutNLFAIbU6vwE5N1Q8ezf275PGN2ODhbUvexzDsuFFEMKYcwpnSpEgnYJaiOIjj8dToIalRrKPEngAOJiwlF1nwOKrVnd12aNO+yzEBAg+tlmSegvuExmeWNsCytImB7qJoKM0/rBVxJt7tMHJBx6ufrHyHnIUxQ9P6wUaLOwRAWZjYAbyTFDnFxs6pu1oYKGiNgsC9aotKmt2Y2HIcyTwAlo0nogYYrRBJsina5k3v3XBln1W0AuFTOxqt77cv4V6Dz8LJ63YTaFOoOBKnsOY+R8ZtLhi2EuOuvcl82J237LdPcqsDcLmJmOatO4jcoeRi0FcOeXapJqV4PU2OcdUaXEwVqfESWptmqSEL6i9yOEUCHkY4p07C0hNKg4jRMkS0663ir0yJ2nSJOe6S1No3abmhY5mHAjqtTvmIgEPIyXahcTqkvUXuRAlO0e06dhbnEHpkSWr2yRSSdLwpoWNiY5pUje5hq9PiJLUDiMk3tOHD5X6xRaZPCOgmVpCaVBxCjqtFijBFLNsNYAXJsCTYSrqJp2qmEPrWqHcq2B6tl8gfGQ+u2rGwTiqC+wbmoo+qfjA+Hny7NxscBMXWDkDL7ROGnaHFjt+/wCPpU1eY4Zg8b8DLtq1recqWJPRap8hU/6vHnKWBHeAwhqsKakBj7oOQZvhvwJ4XyvLikcx1t/1FTMa9tO/xa+YUyC1Qp4hKbUq6FQpGwSQTY3uuR3DK3bbhJ0xwx2026pJ3N2XEXaLBBBO1yjCQ+uX+Dq/yf60ggmU39bu4+y7i/sb3hZ3R/Z1P5PmZM6hf4xfsP8AKCCLIv7G88Uzm/rf3fS04SO1g/YN2r/qE7BD8R/S/uPsk41VQh6f4QQTzZWr9ESCCCWukp9X+aJwQSguW710Tr7zBBJvU389iLDDcYIJCrKLBBBLVo77zCQQShoqboj8ISCCQKBWbVf9m/2vwElK3unsPyggno8H/S3nesXb1iSSQpf4lf8A7A/4onYItZp4j5TuT4PwtXM4YII8SUIsEEEitf/Z" class="card-img-top" alt="...">
      </div>
      <div>© 2023 AppMonsters, Inc.</div>
      <li class="nav-item">
        <a class="nav-link" href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">Terms</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">Privacy</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://github.com/security">Security</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.githubstatus.com/">Status</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://docs.github.com/en">Help</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://support.github.com/?tags=dotcom-footer">Contact Github</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://github.com/pricing">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://docs.github.com/en">API</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://github.com/services/">Training</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://github.blog/">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://github.com/about">About</a>
      </li>
    </ul>`;
      renderToDom("#footer-container", footer);
    };
  

  const startApp = () => {
    navBarOnDom();
    formOnDom();
    sideBarOnDom();
    pinnedProjectsOnDom();
    footerOnDom();
  };

startApp();
