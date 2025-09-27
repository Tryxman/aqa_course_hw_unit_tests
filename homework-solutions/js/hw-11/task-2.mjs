class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  #validateName(name) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    if (name.length < 2 || name.length > 50) {
      throw new Error('Name must be between 2 and 50 characters');
    }
    if (!/^[a-zA-Z]+$/.test(name)) {
      throw new Error('Name must contain only Latin letters');
    }
  }

  #validateProfession(profession) {
    if (typeof profession !== 'string' || profession.trim() === '') {
      throw new Error('Profession must be a string');
    }
    if (profession.length === 0) {
      throw new Error('Profession cannot be empty');
    }
    if (!/^[a-zA-Z\s]+$/.test(profession)) {
      throw new Error('Profession must contain only Latin letters and spaces');
    }
  }

  #validateSalary(salary) {
    if (typeof salary !== 'number' || salary <= 0 || salary >= 10000) {
      throw new Error('This value should be positive');
    }
    if (!!isNaN(salary)) {
      throw new Error('Salary can not be a NAN');
    }
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(newFirstName) {
    this.#validateName(newFirstName);
    this._firstName = newFirstName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(newLastName) {
    this.#validateName(newLastName);
    this._lastName = newLastName;
  }

  get profession() {
    return this._profession;
  }

  set profession(newProfession) {
    this.#validateProfession(newProfession);
    this._profession = newProfession;
  }

  get salary() {
    return this.#salary;
  }

  set salary(newSalary) {
    this.#validateSalary(newSalary);
    this.#salary = newSalary;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

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
  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex((emp) => emp.firstName === firstName);
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find((emp) => emp.firstName === firstName);
    if (!employee) {
      throw new Error(`No such employee ${firstName} in our company`);
    }
    return employee;
  }

  removeEmployee(firstName) {
    const employeeIndex = this.#getEmployeeIndex(firstName);
    if (employeeIndex === -1) {
      throw new Error(`Impossible to delete employee with such name ${firstName}`);
    }
    this.#employees.splice(employeeIndex, 1);
    console.log(`Employee ${firstName} is deleted`);
  }
  getTotalSalary() {
    return this.#employees.reduce((count, employee) => count + employee.salary, 0);
  }
}

export { Employee, Company };
