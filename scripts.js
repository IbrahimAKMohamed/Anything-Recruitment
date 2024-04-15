window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
      header.classList.add('thin-header');
    } else {
      header.classList.remove('thin-header');
    }
  });
  