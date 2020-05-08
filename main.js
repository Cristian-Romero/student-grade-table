var tableEl = document.getElementById('grade-table');
var summonGrades = new GradeTable(tableEl);

var headerEl = document.getElementById('header');
var updateHeader = new PageHeader(headerEl);

var formEl = document.querySelector('form');
var enterGrade = new GradeForm(formEl);

var fetchGrades = new App(summonGrades, updateHeader, enterGrade);
fetchGrades.start();
