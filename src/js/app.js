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
    const projects = document.getElementById('projects');
    const beforeCover = document.getElementById('before-cover');
    const coverArt = document.getElementById('cover-art');
    const progressBar = document.getElementById('progress-bar');
    const songInfo = document.getElementById('song-info');
    const fadeText = document.getElementById('fade-text');
    const finalText = document.getElementById('final-text');

    const fadeOut = (element, start, end) => {
      const opacity = Math.max(0, 1 - (scrollPosition - start) / (end - start));
      element.style.opacity = opacity;
    };

    // Fade out header image
    fadeOut(header, 0, maxScroll);

    // Fade in projects text
    const fadeInStart_ini = maxScroll
    fadeInEnd = maxScroll * 3
    fadeOut(projects, fadeInStart_ini, fadeInEnd);
    fadeOut(beforeCover, fadeInStart_ini, fadeInEnd);

    fadeInStart_cover = fadeInEnd + maxScroll * 2;
    fadeInEnd_cover = fadeInStart_cover + maxScroll * 5
    fadeOut(coverArt, fadeInEnd, fadeInEnd_cover);
    fadeOut(songInfo, fadeInEnd, fadeInEnd_cover);

    // Get the position of the progress bar element
    const progressBarPosition = progressBar.getBoundingClientRect().bottom + window.scrollY;

    // Get the position of the cover art element
    //const start_next_text = progressBar.getBoundingClientRect().bottom + window.scrollY + fadeInEnd_cover + buffer; // Adjusted to fit cover art

    // Fade in fadeText
    fadeOut(fadeText, fadeInEnd_cover + maxScroll * 2, fadeInEnd_cover + maxScroll * 3);

    // Fade in finalText
    fadeOut(finalText, fadeInEnd_cover + maxScroll * 3, fadeInEnd_cover + maxScroll * 4);
  });

  // Play button functionality
  const playButton = document.getElementById('play-button');
  const audio = document.getElementById('audio');
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