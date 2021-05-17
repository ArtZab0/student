/*  
Author: Artem Zabarov
File Name: script.js
Date: 5/14/2021
*/

//Global variables
var content1 = document.querySelector("#rcorners2 p");
var content2 = document.querySelector("#video1");
var showLessBtn1 = document.querySelector("#showLess1");
var showLessBtn2 = document.querySelector("#showLess2");
var showMoreBtn1 = document.querySelector("#showMore1");
var showMoreBtn2 = document.querySelector("#showMore2");

// Hamburger menu function

function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}

//Function to show more
function showMore1() {
    content1.style.display = "block";
    showLessBtn1.style.display = "block";
    showMoreBtn1.style.display = "none";
}

// Function to show less
function showLess1() {
  content1.style.display = "none";
  showLessBtn1.style.display = "none";
  showMoreBtn1.style.display = "block";
}

//Function to show more
function showMore2() {
    content2.style.display = "block";
    showLessBtn2.style.display = "block";
    showMoreBtn2.style.display = "none";
}

// Function to show less
function showLess2() {
  content2.style.display = "none";
  showLessBtn2.style.display = "none";
  showMoreBtn2.style.display = "block";
}
