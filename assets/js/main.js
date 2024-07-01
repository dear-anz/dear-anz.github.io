document.addEventListener("DOMContentLoaded", function () {
  new SweetScroll({});

  // Function to set the background image
  function setBackgroundImage() {
    document.body.style.backgroundImage = 'url("{{ "images/background.jpeg" | prepend: site.baseurl }}")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
  }

  // Add event listener for scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      setBackgroundImage();
    }
  });

  // Add event listener for the down button click
  document.querySelector('.down').addEventListener('click', function () {
    setBackgroundImage();
  });
}, false);