import moment from "moment";
import AbstractComponent from "./abstract-component.js";

const createEventTemplate = (event) => {
  const {id, venuePlase, date} = event;
  const ticketDate = moment(date).locale(`ru`).format(`D MMMM`);
  return (
    `<li class="info-section__ticket-item" id="ticket-${id}">
      <div class="info-section__ticket-wrapper">
        <span class="info-section__ticket-venue">${venuePlase}</span>
        <span class="info-section__ticket-date">${ticketDate}</span>
        <time class="info-section__ticket-time">${moment(date).format(`H:mm`)}</time>
        <a class="info-section__ticket-link" href="#"><span></span>Купить билет</a>
      </div>
    </li>`
  );
};

export default class EventTemplateComponent extends AbstractComponent {
  constructor(event) {
    super();
    this._event = event;
    this._fisTeamName = event.firstTeamName;
    this._secondTeamName = event.secondTeamName;
  }

  getTemplate() {
    return createEventTemplate(this._event);
  }

  getTicketItem() {
    return this.getElement();
  }

  getTicketHexagon() {
    return this.getElement().querySelector(`.info-section__ticket-wrapper`);
  }

  getFirstTeamName() {
    return this._fisTeamName;
  }

  getSecondTeamName() {
    return this._secondTeamName;
  }
}
