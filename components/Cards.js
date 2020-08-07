// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from "axios";

const container = document.querySelector("div.cards-container");

function cardFor(article){
    const cardBase = document.createElement("div");
    cardBase.classList.add("card");

    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = article.headline;
    
    const author = document.createElement("div");
    author.classList.add("author");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const authorImg = document.createElement("img");
    authorImg.src = article.authorPhoto;

    const byline = document.createElement("span");
    byline.textContent = article.authorName;

    cardBase.append(headline, author);
    author.append(imgContainer, byline);
    imgContainer.append(authorImg);

    return cardBase;
}

axios.get("https://lambda-times-api.herokuapp.com/articles").then(response => {
    //console.log(response);
    //console.log(response.data.articles);

    //container.append(cardFor(response.data.articles.javascript[0]));

    for(let topic in response.data.articles)
    {
        response.data.articles[topic].forEach(article => container.append(cardFor(article)));
    }
});
