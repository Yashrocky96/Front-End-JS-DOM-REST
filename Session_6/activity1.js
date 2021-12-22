function addPostToServer(dataObject) {
  let data = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: dataObject,
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  return data;
}

addPostToServer(
  JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1
  })
).then((res) => console.log(res));
