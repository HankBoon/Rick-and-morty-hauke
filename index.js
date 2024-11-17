import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
const searchQuery = "";
const apiURL = "https://rickandmortyapi.com/api/";
// const data = await fetchData();
// console.log(data);

//fetch data
// async function fetchData() {
//   const response = await fetch(apiURL);
//   const data = await response.json();
//   return data;
// }

async function fetchAndRenderCharacters(characters, page = "1") {
  const response = await fetch(`${apiURL}${characters}?page=${page}`);
  const data = await response.json();

  maxPage = data.info.pages;
  console.log("maxpages", maxPage);
  console.log("page", page);
  pagination.textContent = `${page} / ${maxPage}`;

  cardContainer.innerHTML = "";
  data.results.forEach((result) => {
    cardContainer.append(CharacterCard(result));
  });
  console.log(data);
  return data;
}

prevButton.addEventListener("click", () => {
  console.log(maxPage);
  if (page > 1) {
    page--;
    fetchAndRenderCharacters("character", page);
  }
});

nextButton.addEventListener("click", () => {
  console.log(maxPage);
  if (page < maxPage) {
    page++;
    fetchAndRenderCharacters("character", page);
  }
});
// fetchData();
fetchAndRenderCharacters("character");
