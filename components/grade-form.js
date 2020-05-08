class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    event.preventDefault(console.log('hi'));
    var getFormData = new FormData(event.target);
    var name = getFormData.get("name");
    var course = getFormData.get("course");
    var grade = getFormData.get("grade");
    this.createGrade(name, course, grade);
    event.target.reset();
  }
}
