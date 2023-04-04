// Your code goes here

// document.addEventListener("DOMContentLoaded", function() {
//   console.log("The DOM has loaded");
// });

// console.log(
//   "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
// );
// Code your solution in index.js. First, set up a DOMContentLoaded event listener to detect when the HTML page has loaded and the document is ready to be manipulated. Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"


document.addEventListener("DOMContentLoaded", function () {
    changeDom()
});

function changeDom() {
    document.getElementById("text")
        .textContent = "This is really cool!";
}

