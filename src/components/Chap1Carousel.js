import 'dragscroll';

//If no-JS, keep scrollbar. If JS, remove scrollbar in CSS do this script.
document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

/*---------------- Variables ---------------------*/
const carouselContainer = document.querySelector('.chap-1-carousel-thumbnails-container');
const carouselContent = document.querySelector('.chap-1-carousel-thumbnails');
const carouselDisplay = document.querySelector('.chap-1-carousel-display');
const carouselPicDisplay = document.querySelector('.chap-1-carousel-pic-display');
const carouselDescDisplay = document.querySelector('.chap-1-carousel-desc-display');
const carouselThumbnails = [...document.querySelectorAll('.carousel-thumbnail-pic')];

let carouselContentObjects = [];


/*----------------- Scroll and drag and hide scrollbar of carousel ----------------*/
//We imported drascroll which makes almost all the business...


function determineOverflow(content, container) {
  const containerMetrics = container.getBoundingClientRect();
  const containerMetricsLeft = Math.floor(containerMetrics.left);
  const containerMetricsRight = Math.floor(containerMetrics.right);
  const contentMetrics = content.getBoundingClientRect();
  const contentMetricsRight = Math.floor(contentMetrics.right);
  const contentMetricsLeft = Math.floor(contentMetrics.left);
  if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
    return "both";
  } else if (contentMetricsLeft < containerMetricsLeft) {
    return "left";
  } else if (contentMetricsRight > containerMetricsRight) {
    return "right";
  } else {
    return "none";
  }
}

carouselContent.style.cssFloat = 'left';
carouselContainer.setAttribute("data-overflowing", determineOverflow(carouselContent, carouselContainer));


// Handle the scroll of the horizontal container
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  carouselContainer.setAttribute("data-overflowing", determineOverflow(carouselContent, carouselContainer));
}

carouselContainer.addEventListener("scroll", function() {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});


/*-------------- Load Carousel --------------*/

for (let i = 0; i < carouselThumbnails.length; i++) {
  carouselContentObjects[i+1] = {
    name: `item-${i+1}`,
    pictureUrl: `https://picsum.photos/200/300?image=${i+1}`,
    description: `description ${i+1}`

  };
}

for (var i = 0; i < carouselThumbnails.length; i++) {
  carouselThumbnails[i].style.backgroundImage = `url(${carouselContentObjects[i+1].pictureUrl})`;
}

let currentDisplayedIndex;

function initCarousel (index) {
  carouselPicDisplay.style.backgroundImage = `url(${carouselContentObjects[index].pictureUrl})`;
  carouselDescDisplay.firstElementChild.innerHTML = `${carouselContentObjects[index].description}`;
  currentDisplayedIndex = index;
}
initCarousel(1);

//This variable to check wether the user clicked or dragged.
let carouselScrollY = carouselContainer.scrollLeft;
let carouselScrollX = carouselContainer.scrollRight;
  const transitionDuration = 300;

function loadCarousel (e) {
  //If carouselContainer.scrollLeft > carouselScroll, the user dragged, didn't clicked.
  //User clicked if carouselScroll == carouselContainer.scrollLeft. Then we change the picture.
  if (currentDisplayedIndex != e.target.dataset.thumbnail && carouselScroll == carouselContainer.scrollLeft && e.target.classList.contains('carousel-thumbnail-pic')) {
    //Picture first
    carouselPicDisplay.style.backgroundImage = window.getComputedStyle(e.target).getPropertyValue('background-image');
    carouselPicDisplay.style.transition = `all ${transitionDuration}ms`;
    //Description
    carouselDescDisplay.firstElementChild.style.transition = `all ${transitionDuration / 2}ms`;
    carouselDescDisplay.firstElementChild.style.opacity = 0;
    window.setTimeout(() => {
    carouselDescDisplay.firstElementChild.textContent = `${carouselContentObjects[e.target.dataset.thumbnail].description}`;
    carouselDescDisplay.firstElementChild.style.opacity = 1;
    }, transitionDuration / 2);
  }

  //We update carouselScroll
  carouselScrollY = carouselContainer.scrollLeft;
  carouselScrollX = carouselContainer.scrollRight;
  currentDisplayedIndex = e.target.dataset.thumbnail;
}

carouselContainer.addEventListener('mouseup', loadCarousel)






