import EventsListController from "./events-controller.js";
import {sliderController} from "../components/slider.js";
import {replace} from "../utils/render.js";
import EventListComponent from "../components/events-list-component.js";

export const takeDataFromURL = (loadingComponent, url) => {

  const eventListComponent = new EventListComponent();
  const eventListController = new EventsListController(eventListComponent.getEventsList());

  function sendRequest(method) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);
      xhr.responseType = `json`;

      xhr.onload = () => {
        if (xhr.status >= 400) {
          reject(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };

      xhr.onerror = () => {
        reject(xhr.response);
      };

      xhr.send();
    });
  }

  sendRequest(`GET`, url)
    .then(data => {
      replace(eventListComponent, loadingComponent);
      eventListController.render(data);
    })
    .then(data => {
      sliderController(eventListController);
    })
};
