class User {
   constructor(name) {
      this.name = name;
   }
   sayHello() {
      console.log(this.name);
   }
}
class Student extends User {
   constructor(name) {
      super(name);
   }
}
let student = new Student("Hand Written Code");
student.sayHello();