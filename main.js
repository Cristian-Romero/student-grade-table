var tableEl = document.getElementById('grade-table');
var headerEl = document.getElementById('header');
var formEl = document.querySelector('form');
var enterGrade = new GradeForm(formEl);
var updateHeader = new PageHeader(headerEl);
var summonGrades = new GradeTable(tableEl);
var fetchGrades = new App(summonGrades, updateHeader, enterGrade);
fetchGrades.start();
