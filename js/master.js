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

    // Remove Class Active
    // li.classList.remove("active");

    // Add Class Active
    // li.classList.add("active");

    // Set Color On Rot
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
  });
});

// Select Landing For Element
let landingPage = document.querySelector(".landing");

// Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Timeporary Function For Landing
setInterval(() => {

  // Get Rnadom Number
  let randomNumber = Math.floor(Math.random() * imgsArray.length);

  // Change Background Image Url
  landingPage.style.backgroundImage = `url('imgs/landing/${imgsArray[randomNumber]}')`;
}, 8000);
