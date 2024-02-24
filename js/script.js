window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const content = document.querySelector('.content');
    const navbarHeight = navbar.offsetHeight;
  
    if (window.scrollY > navbarHeight) {
      content.style.marginTop = navbarHeight + 'px';
    } else {
      content.style.marginTop = '0';
    }
  });
  