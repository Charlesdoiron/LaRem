/*----------- chapters left-right arranging ----------*/
const chapterTitles = [...document.querySelectorAll('.chap-title')];

chapterTitles.forEach(chapterTitle => {
  if (chapterTitles.indexOf(chapterTitle) % 2 === 1) {
    chapterTitle.style.alignItems = 'flex-end';
    chapterTitle.style.textAlign = 'right';
  } else {
    chapterTitle.style.alignItems = 'flex-start';
  }

  if (chapterTitles.indexOf(chapterTitle) > 3) {
    chapterTitle.firstElementChild.style.color = 'rgba(228,44,47,1.00)';
  }
});


/*-------------------- chapter6 clearfix -------------*/

const chap6DivOverflowed = document.querySelector('#chap-6-overflowed');

function calculatechap6DivOverflowedMarginBottom () {
  const chap6Persons = document.querySelector('#chap-6-overflower');
  const chap6DivOverflowedHeight = parseFloat(window.getComputedStyle(chap6DivOverflowed).getPropertyValue('height').replace('px',''));
  const chap6PersonsHeight = parseFloat(window.getComputedStyle(chap6Persons).getPropertyValue('height').replace('px',''));
  const chap6PersonsTop = parseFloat(window.getComputedStyle(chap6Persons).getPropertyValue('top').replace('px',''));

  chap6DivOverflowed.style.marginBottom = `${chap6PersonsTop + chap6PersonsHeight - chap6DivOverflowedHeight + 50}px`;
};

calculatechap6DivOverflowedMarginBottom ();
window.addEventListener('resize', calculatechap6DivOverflowedMarginBottom);

/*----------------- chapter1 get carousel width -----------------*/
/*----------------- UPDATE : no need finally -----------------*/

const carouselThumbnailDiv = document.querySelector('.chap-1-carousel-thumbnails');
const carouselThumbnails = [...document.querySelectorAll('.carousel-thumbnail-pic')];
const carouselLinks = [...document.querySelectorAll('.carousel-thumbnail-link')];

let carouselThumbnailsWidth = 0;

carouselThumbnails.forEach(thumbnail => {
  const thumbnailWidth = parseFloat(window.getComputedStyle(thumbnail).getPropertyValue('width').replace('px',''));
  carouselThumbnailsWidth += thumbnailWidth;
})

carouselLinks.forEach(link => {
  const linkWidth = parseFloat(window.getComputedStyle(link).getPropertyValue('width').replace('px',''));
  carouselThumbnailsWidth += linkWidth;
})

carouselThumbnailsWidth += parseFloat(window.getComputedStyle(carouselThumbnailDiv).getPropertyValue('padding-right').replace('px',''));
carouselThumbnailsWidth += parseFloat(window.getComputedStyle(carouselThumbnailDiv).getPropertyValue('padding-left').replace('px',''));

// carouselThumbnailDiv.style.width = `${carouselThumbnailsWidth}px`

/*----------------- chapter1 clearfix -----------------*/

const carouselDisplay = document.querySelector('.chap-1-carousel-display');
const carouselThumbnailsContainer = document.querySelector('.chap-1-carousel-thumbnails-container');
const carouselDisplayDesc = document.querySelector('.chap-1-carousel-desc-display');

const carouselDisplayDescOverflow =
  parseFloat(window.getComputedStyle(carouselDisplayDesc).getPropertyValue('top').replace('px','')) +
  parseFloat(window.getComputedStyle(carouselDisplayDesc).getPropertyValue('height').replace('px','')) -
  parseFloat(window.getComputedStyle(carouselDisplay).getPropertyValue('height').replace('px',''));

carouselDisplay.style.marginBottom = `${carouselDisplayDescOverflow * 1.2}px`


export { chapterTitles,  chap6DivOverflowed, carouselThumbnailsWidth }
