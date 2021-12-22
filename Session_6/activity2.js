// Activity2

async function getUsers() {
  const result = await fetch("https://api.github.com/users");
  return await result.json();
}
async function countUsers() {
  const users = await getUsers();
  console.log(users.length);
}
countUsers();
