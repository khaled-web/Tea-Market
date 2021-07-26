const domString = {
  navBtn: document.getElementById('nav-btn'),
  navBar: document.getElementById('nav-bar'),
  navCloser: document.getElementById('nav-closer'),
  dateData: document.getElementById('date'),

}

//setup date
domString.dateData.innerHTML = new Date().getFullYear();

// show nav
domString.navBtn.addEventListener('click', () => {
  domString.navBar.classList.add('showNav');
});

// close nav
domString.navCloser.addEventListener('click', () => {
  domString.navBar.classList.remove('showNav');
})
