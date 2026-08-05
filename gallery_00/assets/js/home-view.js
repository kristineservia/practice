import { cards } from "./data.js";

export function renderHomeView() {
  const homeView = document.querySelector("#gallery__home-view");

  homeView.innerHTML = `
    <h3>Verse Memorization</h3>
    <p>Home View Loaded!</p>
  `;
}
