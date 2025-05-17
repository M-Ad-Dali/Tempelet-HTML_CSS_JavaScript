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

// Check If There's Local Storage Random Bacground Itme
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Bacground Local Storage Is Not Empty
if (backgroundLocalItem !== null) {

  // console.log(typeof(backgroundLocalItm)); // string
  
  if (backgroundLocalItem === 'true') {
    
    backgroundOption = true;
    
  } else {
    
    backgroundOption = false;
    
  }
  console.log(backgroundLocalItem); // false

  // Remove Active Class From All span
  document.querySelectorAll(".random-backgrounds span").forEach(e => {

    e.classList.remove("active");

  });

  if (backgroundLocalItem === 'true') {

    document.querySelector(".random-backgrounds .yes").classList.add("active");

  } else {

    document.querySelector(".random-backgrounds .no").classList.add("active");

  }

}

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

    // Add Active Class On Self
    span.classList.add("active");

    if (e.target.dataset.background === 'yes') {

      backgroundOption = true;

      randomizeImgs();

      localStorage.setItem("background_option", true);
      
    } else {
      
      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background_option", false);

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

// Select Skills Selector
let skillsOldYemen = document.querySelector(".old-yemen");

window.onscroll =  function () {

  // Skills Offset Top
  let skillsOffsetTop = skillsOldYemen.offsetTop; // [الجزء اللي فوق السكشن اللي ندور عليه يعرضلك كم هو بالبكسل]

  
  // Skills Outer Height
  let skillsOuterHeight = skillsOldYemen.offsetHeight; // [تحسب هيت وبادنج وكل شيء لسكشن اللي انا فيه بالبكسل]
  
  // Window Height
  let windowHeight = this.innerHeight; // [الهايت حق الويندو كامل]
  
  // Window ScrollTop
  let windowScrollTop = this.pageYOffset; // [الجزء اللي انا اعمل فيه سكرول كم بالبكسل]

  // console.log(windowScrollTop)
  // console.log(skillsOffsetTop + skillsOuterHeight - windowHeight)
  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight - 1)) { // [اذا كان الجزء اللي اعمل فيه سكرول اكبر من (الجزء اللي فوق الكشين + اهايت للسكشن كامل - هايت الويندو كامل)] [هذي المعادلة أول ما ادخل لسكشن المطلوب يتم عمل حدث]

    // this.console.log('Skills Section Reached'); // [لما يوصل لسكشن المطلوب اعرض الريالة هذي بالكنسل]

    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
    // console.log(allSkills);

    allSkills.forEach(skill => {

      skill.style.width = skill.dataset.progress; // [[dataset.progriss = data-progress="96%"] عند التعامل مع الداتا ست تكتب الكلمة اللتي بعد الاتا ست مثل]
      

    });

  }

  // console.log(windowHeight);
};

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay)

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box'

    if (img.alt !== null) {

      // Create Heading
      let imgHeading = document.createElement("h3");

      // Create text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading
      imgHeading.appendChild(imgText);

      // Append The Heading TO The Popup Box
      popupBox.appendChild(imgHeading);

    }

    // Create The Image
    let popupImage = document.createElement("img");

    // Add Class To The Popup Img
    popupImage.className = 'popup-image'

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    document.body.appendChild(popupBox)

    // Create  The. Close Span
    let closeButton = document.createElement("span");

    // Create The.Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close.Button
    closeButton.className = 'close-button';

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);

  });

});

// -Close Popup
  document.addEventListener("click", function (e) {

  if (e.target.className === 'close-button' || e.target.className === 'popup-overlay') {

  // Remove The Current Popup
  // e.target.parentNode.remove(); [تستخدم في حال كنت بمسح عن طريق السبان اكس]
  document.querySelector(".popup-box").remove();

  // Remove Overlay
  document.querySelector(".popup-overlay").remove();

  };
});

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach(bullet => {

  bullet.addEventListener("click", (e) => {

    document.querySelector(e.target.dataset.section).scrollIntoView({

      behavior: 'smooth',

    });

  });

});