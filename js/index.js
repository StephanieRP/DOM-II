// stop A tags from refreshing the site
let links = document.querySelectorAll(".nav-link");
links.forEach(function(a) {
  a.addEventListener("click", function(event) {
    event.preventDefault();
  });
  a.addEventListener("drag", function(event) {
    event = a;
    event.style.background = "yellow";
  });
});

//Modal fun!!
let modalDiv = document.getElementById("modal");
window.addEventListener("load", function(event) {
  event = modalDiv;
  event.style.display = "flex";
});
let modalBtn = document.querySelectorAll(".btn-modal");
modalBtn.forEach(function(btn) {
  btn.addEventListener("click", function() {
    modalDiv.style.display = "none";
  });
});

let box = document.querySelector("input");
box.addEventListener("focus", function(event) {
  event.target.style.background = "aqua";
});
let firstP = document.querySelector("p");
box.addEventListener("keydown", function(event) {
  firstP.textContent = `${event.key}`;
});

// Headings color change

let hTwo = document.querySelectorAll("h2");
hTwo.forEach(function(headings) {
  headings.addEventListener("mouseover", function(event) {
    event = headings;
    event.style.color = "aqua";
  });

  // Second event
  headings.addEventListener("mouseout", function(event) {
    event = headings;
    event.textContent = "You left me!!";
  });
});

// imgs

let images = document.querySelectorAll("img");
images.forEach(function(item) {
  item.addEventListener("dblclick", function(event) {
    event = item;
    event.style.display = "none";
  });

  item.addEventListener("drag", function(event) {
    event = item;
    event.style.border = "green 2px solid";
  });
});

// main buttons
let mainBtn = document.querySelectorAll(".btn");
mainBtn.forEach(function(buttons) {
  buttons.addEventListener("mousedown", function(event) {
    event = buttons;
    event.style.background = "crimson";
  });
});

// destination h4
let hFour = document.querySelectorAll("h4");
let divs = document.querySelector(".content-pick");
divs.addEventListener("mouseleave", function(event) {
  event = divs;
  event.style.background = "yellow";
  event.stopPropagation();
});

hFour.forEach(function(headings) {
  headings.addEventListener("mouseleave", function(event) {
    event = headings;
    // event.style.fontSize = "3px";
    console.log(event);
    event.style.color = "green";
  });
});
