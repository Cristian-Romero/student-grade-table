class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.formElement.addEventListener('submit', this.handleSubmit.bind(this))
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault();
    var getFormData = new FormData(event.target);
    var name = getFormData.get('name');
    var course = getFormData.get('course');
    var grade = getFormData.get('grade');
    this.createGrade(name, course, grade);
    event.target.reset();
    console.log('hi');
  }
}
