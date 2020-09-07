import AbstractComponent from "./abstract-component.js";

const createEventList = () => {
  return (
    `<ul class="info-section__tickets-list">
    </ul>`
  );
};

export default class EventListComponent extends AbstractComponent {
  getTemplate() {
    return createEventList();
  }

  getEventsList() {
    return this.getElement();
  }
}
