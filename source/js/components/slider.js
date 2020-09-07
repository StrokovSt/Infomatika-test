export const sliderController = (eventListController) => {
  const ticketsList = document.querySelector(`.info-section__tickets-list`);
  const ticketContainers = document.querySelectorAll(`.info-section__ticket-item`);
  let currentSlide = 2;

  ticketsList.addEventListener(`click`, function (evt) {
    if (evt.target.tagName === `DIV`) {
      currentSlide = Array.from(ticketContainers).indexOf(evt.target.parentNode);
      eventListController.eventOnScroll(currentSlide);
    }
  });

  function ScrollYouFace(evt) {
    evt.preventDefault();

    if (event.deltaY * -0.01 > 0) {
      currentSlide++;
    } else {
      currentSlide--;
    }

    if (currentSlide < 0) {
      currentSlide = 0;
    }
    if (currentSlide > 4) {
      currentSlide = 4;
    }

    eventListController.eventOnScroll(currentSlide);
  }

  ticketsList.onwheel = ScrollYouFace;
};
