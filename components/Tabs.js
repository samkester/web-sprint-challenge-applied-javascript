// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from "axios";

const tabContainer = document.querySelector("div.topics");

let currentTopic = "none";

axios.get("https://lambda-times-api.herokuapp.com/topics").then(response => {
    /*console.log(response);
    console.log(response.data);
    console.log(response.data.topics);
    console.log(response.data.topics[0]);*/

    response.data.topics.forEach(item => {
        const div = document.createElement("div");
        div.textContent = item;
        div.classList.add("tab");
        div.addEventListener("click", event => {
            currentTopic = div.textContent;
            adjustStylesForCurrentTopic();
            console.log(currentTopic);
        });
        tabContainer.append(div);
    });
});

function adjustStylesForCurrentTopic(){
    if(currentTopic === "node.js") currentTopic = "node"; // small workaround

    document.querySelectorAll(".tab").forEach(tab => {
        if(tab.textContent === currentTopic)
        {
            console.log(`activating ${tab.textContent}`);
            tab.classList.add("active-tag");
        }
        else
        {
            console.log(`deactivating ${tab.textContent}`);
            tab.classList.remove("active-tag");
        }
    });

    document.querySelectorAll(".card").forEach(card => {
        if(card.classList.contains(currentTopic))
        {
            card.style.display = "initial";
        }
        else
        {
            card.style.display = "none";
        }
    });
}