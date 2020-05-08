class GradeTable{
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    console.log(grades);
    var tBody = this.tableElement.querySelector('tbody');
    tBody.innerHTML = "";
    for (var u = 0; u < grades.length; u++) {
      var tbleRow = document.createElement('tr');
      var studentName = document.createElement('td');
      var courseName = document.createElement('td');
      var studentGrade = document.createElement('td');

      studentName.textContent = grades[u].name;
      courseName.textContent = grades[u].course;
      studentGrade.textContent = grades[u].grade;

      tbleRow.appendChild(studentName);
      tbleRow.appendChild(courseName);
      tbleRow.appendChild(studentGrade);
      tBody.appendChild(tbleRow);
    }
  }
}
