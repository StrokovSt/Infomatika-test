import {RenderPosition, render} from "./utils/render.js";
import {takeDataFromURL} from "./controllers/xhr.js";
import LoadingComponent from "./components/loading-component";

const infoSection = document.querySelector(`.page-main__info-section`);
const navButton = document.querySelector(`.page-header__menu-link`);
const body = document.querySelector(`.body-page`);

const serverURL = `https://my-json-server.typicode.com/StrokovSt/demo/events`;
const loadingComponent = new LoadingComponent();

// ----- Отрисовка загрузки. Обращение к серверу за данными по карточкам событий

render(infoSection, loadingComponent, RenderPosition.BEFOREEND);
takeDataFromURL(loadingComponent, serverURL);

// ----- Слушатели для навигационное меню

navButton.addEventListener(`click`, function () {
  navButton.classList.toggle(`page-header__menu-link--open`);
  body.classList.toggle(`body-page--blur`);
});

window.addEventListener(`resize`, () => {
  const clientWidth = document.body.clientWidth;
  if (clientWidth > 768) {
    navButton.classList.remove(`page-header__menu-link--open`);
    body.classList.remove(`body-page--blur`);
  }
}, false);
