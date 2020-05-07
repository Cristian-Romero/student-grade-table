class PageHeader{
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    console.log(newAverage);
    var badgeEl = document.querySelector('span');
    badgeEl.textContent = newAverage;
  }
}
