const num = [1, -1, 4, 10];

const arrayBasic = () => {
  num.push(0);

  console.log(`Num length is ${num.length}.`);
  console.log(`Num:`, num);

  num.forEach((val, index, arr) => {
    console.log(arr);
  });

  // It is preferrable to use .concat instead since it doesn't modify the original array
  const newNum = num.concat(90);

  console.log(`New num:`, newNum);
};

const arrayMap = () => {
  const mappedValue = num.map((v) => v * 2);

  console.log("Mapped value (*2):", mappedValue);
};

const arrayDestructure = () => {
  const prime = [2, 3, 5, 7, 11];
  const [first, second, ...rest] = prime;
  console.log("Original array:", prime);
  console.log(`first (prime[0]): ${first}`);
  console.log(`second (prime[1]): ${second}`);
  console.log(`rest (prime[2:]):`, rest);
};

const objects = () => {
  // Create object using object literal
  let person = {
    name: "Felix",
    age: 21,
    uid: 820283000,
  };

  console.log(person);

  // Access single property with dot (.) or brackets ([])
  console.log(person.name);
  console.log(person["age"]);

  // Add additional property by using dot or brackets
  person.hobbies = ["game", "comic", "anime", "coding"];
  person["university"] = "Binus University";

  console.log("Final:", person);
};

const objectMethods = () => {
  const arto = {
    name: "Arto",
    age: 35,
    education: "PhD",
    greet: function () {
      // this refer to current object
      console.log(`hello, my name is ${this.name}`);
    },
    doAddition: function (a, b) {
      console.log(a + b);
    },
  };

  arto.growOlder = function () {
    this.age += 1;
  };

  arto.greet();

  arto.doAddition(5, 6);

  const referenceToDoAddition = arto.doAddition;
  referenceToDoAddition(5, 7);

  console.log(`${arto.name} is ${arto.age}`);
  arto.growOlder();
  console.log(`${arto.name} is ${arto.age}`);

  // To preserver "this" when function is being referenced from outside the object
  const referenceToGreet = arto.greet.bind(arto);

  // this.name will be undefined
  // Here, "this" is treated as a global object, not arto object
  referenceToGreet();
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const adam = new Person("Adam Silvester", 23);
adam.greet();

const felix = new Person("Felix Andersen", 21);
felix.greet();
