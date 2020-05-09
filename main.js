var tableEl = document.getElementById('grade-table');
var noGrades = document.getElementById('no-grades');
var summonGrades = new GradeTable(tableEl, noGrades);

var headerEl = document.getElementById('header');
var updateHeader = new PageHeader(headerEl);

var formEl = document.querySelector('form');
var enterGrade = new GradeForm(formEl);

var fetchGrades = new App(summonGrades, updateHeader, enterGrade);
fetchGrades.start();
