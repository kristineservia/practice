import { cards } from "./data.js";
import { card } from "./one-card.js";

export function renderHomeView() {
  const homeView = document.querySelector("#gallery__home-view");

  //Find the template via document.querySelector & connect it to a variable -STEP 1
  const template = document.querySelector("#gallery__card-template");

  //Assign a variable to the template content, and CLONE IT to make a "REAL HTML ELEMENT" -STEP 2
  const cardEl = template.content
    .querySelector(".gallery__card")
    .cloneNode(true);

  //Find the elements inside the cloned cardEl -STEP 3
  const keywordEl = cardEl.querySelector(".gallery__card-keyword");
  const referenceEl = cardEl.querySelector(".gallery__card-verse-location");

  //Give these elements values -STEP 4
  keywordEl.textContent = card.word;
  referenceEl.textContent = card.verseLocation;

  //Container where all the cards are added into -STEP 5
  const cardsContainer = document.querySelector(".gallery__cards");

  //Add card to cardContainer -STEP 5
  cardsContainer.append(cardEl);
}

// TYJ!
