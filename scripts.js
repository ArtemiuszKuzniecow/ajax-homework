const loadBtn = document.querySelector(".js-load");
const placeholderBtn = document.querySelector(".js-data");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");

const githubEndpoint = "https://api.github.com/users/";
const jsonPlaceholderEndpoint = "https://jsonplaceholder.typicode.com/users/";

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

placeholderBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  async function getJsonPlaceholderData() {
    try {
      const { data } = await axios.get(jsonPlaceholderEndpoint, {
        params: {
          _start: 0,
          _limit: 5,
        },
      });
      data.forEach((item) => {
        const newElem = document.createElement("div");
        newElem.innerHTML = `<div class="response-container">
   <p> Имя: <span>${item.name}</span><p>
   <p> Никнейм: <span>${item.username}</span><p>
   <p> Электронная почта: <span>${item.email}</span><p>
   <p> Адрес: <span>${item.address.street} str, ${item.address.suite}, ${item.address.zipcode} city of ${item.address.city}</span><p>
   <p> Номер телефона: <span>${item.phone}</span><p>
   <p> Сайт: <span>${item.website}</span><p>
   <p> Работает в компании: <span>${item.company.name}</span><p>
</div>`;
        resultsContainer.append(newElem);
      });
    } catch (error) {
      alert(error);
    }
  }

  getJsonPlaceholderData();
});
