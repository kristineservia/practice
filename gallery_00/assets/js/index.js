import { renderHomeView } from "./home-view.js";

// ROUTER FUNCTION -App's URL HASH Navigation Method-

function router() {
  //the 'window.location.hash' line returns whatever comes after the # symbol on the browser's URL.
  const route = window.location.hash;

  if (route === "#/home") {
    renderHomeView();
  }

  console.log(route);
}

//Run the Router function once when the page first loads
router();

//Run the Router function again when the page has a hash change
window.addEventListener("hashchange", router);
