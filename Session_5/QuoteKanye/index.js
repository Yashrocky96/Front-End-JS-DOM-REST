// Starter code
async function fetchQuote() {
  /**
   * API - https://api.kanye.rest/
   * Return a promise from this function using fetch()
   * The data should be in JSON format
   * Catch the error, if any.
   */
  // const data = fetch("https://api.kanye.rest/")
  //   .then(function (res) {
  //     return res.json();
  //   })
  //   .catch(function (err) {
  //     throw new Error(err);
  //   });
  // data.then((res) => console.log(res));
  // return data;

  // Activity 4 from session 6
  const result = await fetch("https://api.kanye.rest");
  return await result.json();
}

function addQuoteToDOM(quote) {
  // Display quote in the <p id="quote"></p> element
  let para = document.createElement("p");
  para.textContent = quote;
  document.body.append(para);
}

async function quoteKanye() {
  /**
   * Use fetchQuote and addQuoteToDOM() function
   * To display the quote on the Page.
   */
  // fetchQuote().then((res) => {
  //   const quote = res.quote;
  //   addQuoteToDOM(quote);
  // });

  const res = await fetchQuote();
  addQuoteToDOM(res.quote);
}

quoteKanye();
