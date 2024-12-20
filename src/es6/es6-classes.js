/* eslint-disable max-classes-per-file */
class Person {
  constructor(name = 'Anonymous', gender = 'Unknown') {
    this.name = name;
    this.gender = gender;
  }

  printDetails() {
    return `${this.name} is ${this.gender}`;
  }
}

const person = new Person('Takshil kunadia', 'male');
Logger.log(person.printDetails());

class Employee extends Person {
  constructor(name, gender, role) {
    super(name, gender);
    this.role = role;
  }

  printRole() {
    return `${this.name} is ${this.role}`;
  }
}

const employee = new Employee('Takshil', 'male', 'Developer');

Logger.log(employee.printDetails());
Logger.log(employee.printRole());
