import { homepageContent } from "./homepage";

const content = document.getElementById("content");

let h1 = document.createElement("h1");
h1.textContent = homepageContent.title;
content.appendChild(h1);

let headline = document.createElement("h3");
headline.textContent = homepageContent.headline;
content.appendChild(headline);

let pagecontent = document.createElement("p");
pagecontent.textContent = homepageContent.content;
content.appendChild(pagecontent);
