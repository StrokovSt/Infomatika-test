import AbstractComponent from "./abstract-component.js";

const createLoadingComponent = () => {
  return (
    `<div class="page-main__lds-ring lds-ring">
      <div></div><div></div><div></div><div></div>
    </div>`
  );
};

export default class LoadingComponent extends AbstractComponent {
  getTemplate() {
    return createLoadingComponent();
  }

  getEventsList() {
    return this.getElement();
  }
}
