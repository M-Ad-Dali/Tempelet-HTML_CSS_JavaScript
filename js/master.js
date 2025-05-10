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
