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

const lastVisit = localStorage.getItem('lastVisit');

const articleLinks = document.querySelectorAll('a.article');

articleLinks.forEach(link => {
  const publishTime = new Date(link.dataset.publishTime);

  if (!lastVisit || publishTime > new Date(lastVisit)) {
    const newLabel = document.createElement('span');
    newLabel.innerText = 'New';
    newLabel.classList.add('new-label');
    link.appendChild(newLabel);
  }
});

localStorage.setItem('lastVisit', new Date().toISOString());
