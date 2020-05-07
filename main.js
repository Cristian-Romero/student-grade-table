var tableEl = document.getElementById('grade-table');
var summonGrades = new GradeTable(tableEl);
var fetchGrades = new App(summonGrades);
fetchGrades.start();
