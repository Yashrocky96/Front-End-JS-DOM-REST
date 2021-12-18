// Optional TakeHome activities
// Activity 1

let names = ["Anil", "Dhoni", "Kohli", "Aaron", "Ajinkya"];
let ans = names.filter((x) => x.startsWith("A"));
console.log(ans);

// Activity 2

function scores(val) {
  if (val >= 50) {
    return val;
  } else {
    return 0;
  }
}

let runsScored = [20, 100, 53, 44, 21];
let newArray = runsScored.map((x) => scores(x));

// for (let i = 0; i < runsScored.length; i++) {
//   let currScore = runsScored[i];

//   if (currScore >= 50) {
//     newArray.push(currScore);
//   } else {
//     newArray.push(0);
//   }
// }

console.log(newArray); // prints [ 0, 100, 53, 0, 0 ]

// Activity 3
// Activity 4
// Needs more practice with JS as a language
