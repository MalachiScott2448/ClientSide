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

"use strict"
// Maximum Length of Review
const MAX_REVIEW = 100;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elements in the web page
const wordCountBox = document.getElementById("countValue");
const warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
   try {
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
   const commentText = document.getElementById("comment").value;
   const charCount = countCharacters(commentText);
   
   if (charCount > MAX_REVIEW) {
      throw new Error("You have exceeded the character count limit");
    }
    wordCountBox.innerHTML = charCount;
  } catch (error) {
    warningBox.innerHTML = error.message;
  } finally {
    const commentText = document.getElementById("comment").value;
    const charCount = countCharacters(commentText);
    wordCountBox.innerHTML = charCount;
  }
}
