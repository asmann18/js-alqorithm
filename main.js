const persons = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// ***MAP***

// 1. Get array of all names

const getAllNames = (array) => {
  array.forEach((element) => {
    console.log(element.name);
  });
};

// 2. Get array of all heights

const personsHeights = (array) => {
  array.forEach((element) => {
    console.log(element.name + ":" + element.height);
  });
};

// 3. Get array of objects with just name and height properties

// 4. Get array of all first names

const getFirstNames = (array) => {
  array.forEach((element) => {
    var a = element.name.split(" ");
    console.log(a[0]);
  });
};

// ***REDUCE***

// 1. Get total mass of all characters

const getTotalMass = (array) => {
  array.forEach((element) => {
    console.log(element.name + " " + element.mass);
  });
};

