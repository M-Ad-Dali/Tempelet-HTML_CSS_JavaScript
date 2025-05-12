// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  // console.log("Local Stotorage Is Not  Emoty You Can Set It On Root Now");
  // console.log(localStorage.getItem("color_option"));

  document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));

  // Remove Active Class From All Colors List Itme
  document.querySelectorAll(".colors-list li").forEach(element => {
    element.classList.remove("active");

    // Add Active Class On Element With Data-Color === Local Storage Itne
    if (element.dataset.color === mainColors) {

      // Add Active Class
      element.classList.add("active");
    }
  });
}

// Rndom Background Option
let backgroundOption = true;

// Variable To Control The Bacground Interval
let backgroundInterval;


// Toggle Spin Class On Icon
document.querySelector(".toggle-settings .gear").onclick = function () {

  // Toggle Class Fa-spin For Rotation On Self
  this.classList.toggle("fa-spin");

  // Toggle Class Open On Main
  document.querySelector(".settings-box").classList.toggle("open");

};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Itmes
colorsLi.forEach(li => {
  
  // Click On Every List Itme
  li.addEventListener("click", (e) => {

    // Remove Active Class From All Colors List Itme
    colorsLi.forEach(li => {
    li.classList.remove("active");
    });

    // Add Class Active
    li.classList.add("active");

    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // Set Color On Itme
    localStorage.setItem("color_option", e.target.dataset.color);

  });
});

// Switch Random Bacground Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All List Itmes
randomBackEl.forEach(span => {
  
  // Click On Every Span
  span.addEventListener("click", (e) => {

    // Remove Active Class From All Colors List Itme
    randomBackEl.forEach(span => {
    span.classList.remove("active");
    });

    // Add Class Active
    span.classList.add("active");

    if (e.target.dataset.background === 'yes') {

      backgroundOption = true;
      randomizeImgs();

    } else {

      backgroundOption = false;
      clearInterval(backgroundInterval);

    }
  });
});

// Select Landing For Element
let landingPage = document.querySelector(".landing");

// Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {

  if (backgroundOption === true) 

    // Timeporary Function For Landing
backgroundInterval = setInterval(() => {

  // Get Rnadom Number
  let randomNumber = Math.floor(Math.random() * imgsArray.length);

  // Change Background Image Url
  landingPage.style.backgroundImage = `url('imgs/landing/${imgsArray[randomNumber]}')`;
}, 8000);{

  }

}

randomizeImgs();