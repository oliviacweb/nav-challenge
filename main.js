var allCoursesTab = document.querySelector('.all-courses');
var collectionsTab = document.querySelector('.collections');
var  wishlistTab = document.querySelector('.wishlist');
var archiveTab = document.querySelector('.archive');
var tabContent = document.querySelector('.content');

allCoursesTab.addEventListener('click', addCoursesBorder);
collectionsTab.addEventListener('click', addCollectionsBorder);
wishlistTab.addEventListener('click', addWishlistBorder);
archiveTab.addEventListener('click', addArchiveBorder);

function addCoursesBorder() {
  allCoursesTab.classList.add('nav-border-bottom');
  collectionsTab.classList.remove('nav-border-bottom');
  wishlistTab.classList.remove('nav-border-bottom');
  archiveTab.classList.remove('nav-border-bottom');
}

function addCollectionsBorder() {
  allCoursesTab.classList.remove('nav-border-bottom');
  collectionsTab.classList.add('nav-border-bottom');
  wishlistTab.classList.remove('nav-border-bottom');
  archiveTab.classList.remove('nav-border-bottom');
}

function addWishlistBorder() {
  allCoursesTab.classList.remove('nav-border-bottom');
  collectionsTab.classList.remove('nav-border-bottom');
  wishlistTab.classList.add('nav-border-bottom');
  archiveTab.classList.remove('nav-border-bottom');
}

function addArchiveBorder() {
  allCoursesTab.classList.remove('nav-border-bottom');
  collectionsTab.classList.remove('nav-border-bottom');
  wishlistTab.classList.remove('nav-border-bottom');
  archiveTab.classList.add('nav-border-bottom');
}
