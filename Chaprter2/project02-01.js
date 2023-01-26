/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Malachi Scott
      Date: 1/26/2023

      Filename: project02-01.js
 */

function FahrenheitToCelsius(degree){
      let total=degree-32;
      total=total/1.8;

      return degree;
}
document.getElementById("fValue").onchange = function() {
      var fDegree = document.getElementById("fValue").value;
      document.getElementById("cValue").value = FarenheitToCelsius(fDegree);
      }
      
      function FarenheitToCelsius(fDegree) {
      return (fDegree - 32) * (5/9);
      }
