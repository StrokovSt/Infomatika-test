import {RenderPosition, render} from "../utils/render.js";
import EventTemplateComponent from "../components/event-component.js";

export default class EventsListController {
  constructor(container) {
    this._container = container;
    this._eventsComponents = [];
    this._teamsContainers = document.querySelectorAll(`.info-section__participant-description`);
    this._currentSlide = 2;
    this._serverURL = `https://my-json-server.typicode.com/StrokovSt/demo/events`;
    this._clientWidth = document.body.clientWidth;
    this._rotateConst = (this._clientWidth >= 1000) ? 35 : 0;
    this._translateConst = (this._clientWidth >= 1000) ? 190 : 180;
  }

  render(eventList) {
    eventList.forEach((event) => {
      const newEventComponent = new EventTemplateComponent(event);
      render(this._container, newEventComponent, RenderPosition.BEFOREEND);
      this._eventsComponents = this._eventsComponents.concat(newEventComponent);
    });

    this.eventOnScroll(this._currentSlide);

    window.addEventListener(`resize`, () => {
      this._clientWidth = document.body.clientWidth;
      this._rotateConst = (this._clientWidth >= 1000) ? 35 : 0;
      this._translateConst = (this._clientWidth >= 1000) ? 195 : 165;
      this.eventOnScroll(this._currentSlide);
    }, false);
  }

  eventOnScroll(currentSlideNumber) {
    this._currentSlide = currentSlideNumber;
    this._eventsComponents.forEach((eventComponent, i) => {
      eventComponent.getTicketItem().style.transform = `translate(${(2 - currentSlideNumber) * this._translateConst}px)`;
      eventComponent.getTicketHexagon().style.transform = `scale(0.5) rotate(${this._rotateConst}deg)`;
      eventComponent.getTicketItem().classList.remove(`info-section__ticket-item--active`);
      if (i === currentSlideNumber) {
        eventComponent.getTicketHexagon().style.transform = `scale(1) rotate(${this._rotateConst}deg)`;
        eventComponent.getTicketItem().classList.toggle(`info-section__ticket-item--active`);
      }
      if (i === (currentSlideNumber + 1) || i === (currentSlideNumber - 1)) {
        eventComponent.getTicketHexagon().style.transform = `scale(0.70) rotate(${this._rotateConst}deg)`;
      }
    });
    this._changeTeamNames(this._currentSlide);
  }

  _changeTeamNames(currentSlideNumber) {
    let firstTeamName = this._eventsComponents[currentSlideNumber].getFirstTeamName();
    let secondTeamName = this._eventsComponents[currentSlideNumber].getSecondTeamName();

    this._teamsContainers[0].textContent = firstTeamName;
    this._teamsContainers[1].textContent = secondTeamName;
  }
}
