document.addEventListener("DOMContentLoaded", function() {
  new SweetScroll({});

  particlesJS("particles-js", {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: {
        type: "polygon",
        stroke: { width: 0, color: "rgb(178,173,144)" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
      size: { value: 3, random: true, anim: { enable: false, speed: 19.18081918081918, size_min: 0.1, sync: false } },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 4, direction: "none", random: true, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } },
      nb: 80
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: false, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });

  // Add scroll event listener to fade out elements
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const maxScroll = window.innerHeight;

    const header = document.querySelector('.header');
    const coverArt = document.getElementById('cover-art');
    const fadeText = document.querySelector('.fade-text');
    const finalText = document.querySelector('.final-text');
    const progressBar = document.getElementById('progress-bar');

    const fadeOut = (element, start, end) => {
      const opacity = Math.max(0, 1 - (scrollPosition - start) / (end - start));
      element.style.opacity = opacity;
    };

    // Fade out header image
    fadeOut(header, 0, maxScroll);

    // Display projects text
    if (scrollPosition > maxScroll) {
      document.getElementById('projects').style.opacity = 1;
    } else {
      document.getElementById('projects').style.opacity = 0;
    }

    // Fade in cover art
    if (scrollPosition > maxScroll * 1.5 && scrollPosition <= maxScroll * 2) {
      coverArt.classList.add('visible');
      coverArt.classList.remove('hidden');
    } else {
      coverArt.classList.remove('visible');
      coverArt.classList.add('hidden');
    }

    // Display fade text only after cover art has faded out
    if (scrollPosition > maxScroll * 2) {
      fadeText.style.opacity = 1;
    } else {
      fadeText.style.opacity = 0;
    }

    // Display final text when user scrolls past progress bar by 20px
    if (scrollPosition > progressBar.offsetTop + 20) {
      finalText.style.opacity = 1;
    } else {
      finalText.style.opacity = 0;
    }
  });

  // Play button functionality
  const playButton = document.getElementById('play-button');
  const audio = document.getElementById('audio');
  const progressBar = document.getElementById('progress-bar');
  const progress = document.getElementById('progress');

  playButton.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      playButton.innerHTML = '<i class="fa fa-pause"></i>';
    } else {
      audio.pause();
      playButton.innerHTML = '<i class="fa fa-play"></i>';
    }
  });

  audio.addEventListener('timeupdate', function() {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percentage + '%';
  });

  // Final button functionality
  const finalButton = document.getElementById('final-button');
  const fadeInImage = document.getElementById('fade-in-image');
  
  finalButton.addEventListener('click', function() {
    audio.pause();
    audio.src = '/images/songs/photograph.mp3';
    audio.play();
    
    // Fade in the image
    fadeInImage.classList.add('visible');
  });
});