var tableEl = document.getElementById('grade-table');
var headerEl = document.getElementById('header');
var updateHeader = new PageHeader(headerEl);
var summonGrades = new GradeTable(tableEl);
var fetchGrades = new App(summonGrades, updateHeader);
fetchGrades.start();
