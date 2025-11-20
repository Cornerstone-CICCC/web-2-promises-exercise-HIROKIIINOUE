const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE
let firstname = "";
let lastname = "";
let age = 0;
let hobbies = [];

fs.readFile("./firstname.txt", "utf-8")
  .then((res) => {
    firstname = res;
    return fs.readFile("./lastname.txt", "utf-8");
  })
  .then((res) => {
    lastname = res;
    return fs.readFile("./age.txt", "utf-8");
  })
  .then((res) => {
    age = res;
    return fs.readFile("./hobbies.txt", "utf-8");
  })
  .then((res) => {
    hobbies = JSON.parse(res);
    console.log(
      `${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
    );
  })
  .catch((error) => {
    console.error(error);
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
async function makeSentence() {
  try {
    const firstname = await fs.readFile("./firstname.txt", "utf-8");
    const lastname = await fs.readFile("./lastname.txt", "utf-8");
    const age = await fs.readFile("./age.txt", "utf-8");
    const hobbies = await fs.readFile("./hobbies.txt", "utf-8");
    const arrayHobbies = JSON.parse(hobbies);
    console.log(
      `${firstname} ${lastname} is ${age} years old and his hobbies are ${arrayHobbies[0]} and ${arrayHobbies[1]}`
    );
  } catch (error) {
    console.error(error);
  }
}
makeSentence();
