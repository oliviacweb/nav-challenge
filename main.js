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
  showCoursesContent()
}

function addCollectionsBorder() {
  allCoursesTab.classList.remove('nav-border-bottom');
  collectionsTab.classList.add('nav-border-bottom');
  wishlistTab.classList.remove('nav-border-bottom');
  archiveTab.classList.remove('nav-border-bottom');
  showCollectionsContent();
}

function addWishlistBorder() {
  allCoursesTab.classList.remove('nav-border-bottom');
  collectionsTab.classList.remove('nav-border-bottom');
  wishlistTab.classList.add('nav-border-bottom');
  archiveTab.classList.remove('nav-border-bottom');
  showwishlistContent();
}

function addArchiveBorder() {
  allCoursesTab.classList.remove('nav-border-bottom');
  collectionsTab.classList.remove('nav-border-bottom');
  wishlistTab.classList.remove('nav-border-bottom');
  archiveTab.classList.add('nav-border-bottom');
  showArchiveContent();

}

function showCoursesContent() {
  tabContent.innerHTML = `<h2>Share Udemy With Friends</h2>`
}

function showCollectionsContent() {
  tabContent.innerHTML = `<h2>Your Courses</h2>`
}

function showwishlistContent() {
  tabContent.innerHTML = `<button>Browse Courses</button>`
}

function showArchiveContent() {
  tabContent.innerHTML = `<h2>Focus on the courses that matter to you.</h2>`
}
