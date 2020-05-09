class GradeTable{
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    console.log(grades);
    var tBody = this.tableElement.querySelector('tbody');
    tBody.textContent = "";
    for (var u = 0; u < grades.length; u++) {
      tBody.appendChild(this.renderGradeRow(grades[u], this.deleteGrade));
    }
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var tRow = document.createElement('tr');
    var sName = document.createElement('td');
    var cName = document.createElement('td');
    var sGrade = document.createElement('td');
    var delOp = document.createElement('td');
    var delButt = document.createElement('button');

    sName.textContent = data.name;
    cName.textContent = data.course;
    sGrade.textContent = data.grade;
    delButt.textContent = 'DELETE';
    delButt.className = 'btn btn-danger';

    delOp.appendChild(delButt);

    tRow.appendChild(sName);
    tRow.appendChild(cName);
    tRow.appendChild(sGrade);
    tRow.appendChild(delOp);

    delButt.addEventListener('click', function(event) {
      deleteGrade(data.id);
    })
    return tRow;
  }
}
