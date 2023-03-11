"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Malachi Scott
      Date:   03/11/2023

      Filename: project05-02.js
*/

//Defining variables
let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list");

for (let i = 0; i < images.length; i++){
      images[i].onclick = function() {
        if (this.parentNode.id === "photo_bucket"){
          let newItem = document.createElement("li");
          photoList.appendChild(newItem);
          newItem.appendChild(this);
            }
            else {
                  let oldItem = this.parentNode;
                  photoBucket.appendChild(oldItem);
            }
      }
}
