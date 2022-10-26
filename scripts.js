const loadBtn = document.querySelector(".js-load");
const placeholderBtn = document.querySelector(".js-data");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

const githubEndpoint = "https://api.github.com/users/";
const jsonPlaceholderEndpoint = "https://jsonplaceholder.typicode.com/posts";

loadBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  async function dataHandler() {
    try {
      const searchValue = searchInput.value.trim().toLowerCase();
      const userData = `${githubEndpoint}${searchValue}`;
      const { data } = await axios.get(userData);
      return (resultsContainer.innerHTML = `<div class="response-container">
               <img src="${data.avatar_url}">
            <p> Имя: <span>${data.name}</span><p>
            <p> О себе: <span>${data.bio}</span><p>
            <p> Кол-во репозиториев: <span>${data.public_repos}</span><p>
         </div>`);
    } catch (error) {
      alert(error);
    }
  }
  dataHandler();
});

// placeholderBtn.addEventListener("click", function (evt) {
//   evt.preventDefault()}
