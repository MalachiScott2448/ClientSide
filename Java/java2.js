const currentTime = new Date();
const currentHour = currentTime.getHours();

// get body element
const body = document.querySelector('body');

// check time of day and set background color
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

let noButton = document.getElementById("no_text");
noButton.addEventListener("click", function(){
  let result = document.querySelector("#no_text");
  result.classList.toggle("collapsed");
});

// Allow pricing for future payments
function formatPrice(value) {
  return "$" + value.toFixed(2);
}
