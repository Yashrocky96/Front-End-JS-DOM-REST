const greetRohan = new Promise((resolve, reject) => {
  try {
    const greeting = "Hello Rohan!";
    resolve(greeting);
  } catch {
    reject(new Error("Cannot Greet!"));
  }
});

const greetShyam = new Promise((resolve, reject) => {
  try {
    const greeting = "Hello Shyam!";
    resolve(greeting);
  } catch {
    reject(new Error("Cannot Greet!"));
  }
});

greetRohan
  .then((msg1) => {
    console.log(msg1);
    return greetShyam;
  })
  .then((msg2) => console.log(msg2))
  .catch((err) => console.log(err));
