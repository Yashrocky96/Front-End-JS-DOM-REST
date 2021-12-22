const GITHUB_API = "https://api.github.com/users";

// /**
//  * Return an array of usernames fetched from the Github API
//  * https://api.github.com/users
//  */
// async function getGithubUsernames() {}

// /**
//  * Display the values passed as arguments as a list on the screen
//  * @param {Array} values
//  */
// function displayValuesAsList(values) {}

async function getGithubUsernames() {
  // 1. Get the API response
  let res = await fetch(GITHUB_API);
  let dataArray = await res.json();
  // 2. Get the usernames array
  const usernameArray = dataArray.map((dataObject) => {
    return dataObject.login;
  });
  // 3.. Return the usernames array
  displayValuesAsList(usernameArray);
}
getGithubUsernames();

function displayValuesAsList(values) {
  // 1. Get the parent element
  let parent = document.querySelector("#usernames-list");
  // 2. For each element in “values”
  // 2.1 Create an <li> element with text as the value
  // 2.2 Append the element to the parent element
  values.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    parent.append(li);
  });
}
