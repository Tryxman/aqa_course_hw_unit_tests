class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(newLastName) {
    this._lastName = newLastName;
  }

  get profession() {
    return this._profession;
  }

  set profession(newProfession) {
    this._profession = newProfession;
  }

  get salary() {
    return this.#salary;
  }

  set salary(newSalary) {
    if (typeof newSalary !== 'number' || newSalary < 0) throw new Error('This value should be positive');

    this.#salary = newSalary;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const emp0 = new Employee('John', 'Doe', 'Developer', 3000);
console.log(emp0.firstName);
emp0.salary = 3100;
console.log(emp0.salary);

class Company {
  #employees = [];
  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(newPhone) {
    this._phone = newPhone;
  }

  get address() {
    return this._address;
  }

  set address(newAddress) {
    this._address = newAddress;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error('This is not correct Employee');
    }
  }

  getEmployees() {
    return [...this.#employees];
  }

  getInfo() {
    const info =
      `Компания: ${this.title}\n` + `Адрес: ${this.address}\n` + `Количество сотрудников: ${this.#employees.length}`;
    return info;
  }
}

const company = new Company('Tech Corp', 123456, 'Main Street');
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
company.addEmployee(emp1);
company.addEmployee(emp2);
console.log(company.getEmployees());

export { Employee, Company };
