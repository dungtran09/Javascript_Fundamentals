class Person {
  name;
  birthDate;
  address;

  constructor(name, birthDate, address) {
    this.name = name;
    this.address = address;
    this.birthDate = birthDate;
  }
  get getName() {
    return this.name;
  }

  get getBirthDate() {
    return this.birthDate;
  }

  get getAddress() {
    return this.address;
  }

  set setName(name) {
    name.trim();
    this.name = name;
  }

  set setBirthDate(year) {
    this.birthDate = year;
  }

  set setAddress(address) {
    address.trim();
    this.address = address;
  }
  toString() {
    return `Name: ${this.name}.
            Address: ${this.address}.`;
  }
}

export { Person };
