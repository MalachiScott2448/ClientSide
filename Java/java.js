/*  JavaScript 7th Edition
    
    Author: Malachi Scott
    Date:   02/16/2023

    Filename: java.js
*/
const currentTime = new Date();
const currentHour = currentTime.getHours();

const body = document.querySelector('body');

if (currentHour < 12) {
  body.style.backgroundColor = '#999997';
} else if (currentHour < 18) {
  body.style.backgroundColor = '';
} else {
  body.style.backgroundColor = '#595958';
}

let sidebarToggle = document.getElementById("side-toggle");
sidebarToggle.addEventListener("click", function(){
    let sidebar = document.querySelector(".aside");
    sidebar.classList.toggle("collapsed");
});

const now = new Date();

const lastVisit = localStorage.getItem("sbloggerVisit");

if (lastVisit) {
  const lastVisitDate = new Date(lastVisit);
  
  const articleLinks = document.querySelectorAll(".article-link");
  articleLinks.forEach(link => {
    const publicationDate = new Date(link.dataset.publicationDate);
    
    if (publicationDate > lastVisitDate) {
      link.innerText += " (New)";
    }
  });
}

localStorage.setItem("sbloggerVisit", now.toString());
