// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
  // Initialize AOS (Animate on Scroll) library
  AOS.init();

  // Select all elements with the class 'box'
  const boxes = document.querySelectorAll('.box');
  // Select the body element
  const element = document.body;
  // Initialize variables for audio control
  let currentAudio = null;
  let isPlaying = false;
  // Select the play/pause button element
  const playPauseBtn = document.getElementById('playPauseBtn');
  // Event listener for play/pause button
  playPauseBtn.addEventListener('click', togglePlayPause);
  const hideBtn = document.getElementById('hideBtn');
  hideBtn.addEventListener('click', hideelements);

  // Event listeners for each box
  boxes.forEach((box, index) => {
      // Click event for playing audio and changing background
      box.addEventListener('click', function () {
          const audioSrc = this.getAttribute('data-src');
          playAudio(audioSrc);
      });

      box.addEventListener('click', function () {
          const imageurl = this.getAttribute('data-gif');
          changeBg(imageurl);

          // Toggle dark mode based on box index
          if (index === 2) {
              darkMode();
          } else {
              element.classList.remove("dark-mode");
          }
      });
  });

    
  

  // Play audio function
  function playAudio(src) {
      // Pause current audio if it exists
      if (currentAudio) {
          currentAudio.pause();
      }

      // Create a new Audio object with the provided source
      const audio = new Audio(src);
      currentAudio = audio;

      // Update play/pause button state and play audio
      isPlaying = true;
      updatePlayPauseButton();
      audio.play();
  }

  // Change background function
  function changeBg(imageurl) {
      const bg = document.querySelector('.background');
      // Set background image to the provided URL
      bg.style.backgroundImage = 'url(' + imageurl + ')';
  }

  // Toggle dark mode function
  function darkMode() {
      // Toggle the 'dark-mode' class on the body element
      element.classList.toggle("dark-mode");
  }

  // Toggle play/pause button function
  function togglePlayPause() {
      // Toggle the play/pause state and update the button appearance
      isPlaying = !isPlaying;
      updatePlayPauseButton();

      // If there is a current audio, play or pause accordingly
      if (currentAudio) {
          isPlaying ? currentAudio.play() : currentAudio.pause();
      }
  }
  
  const footerBtn = document.getElementById('footerBtn');
  footerBtn.addEventListener('click', scrollToFooter);

  function scrollToFooter() {
      const footer = document.getElementById('creditssection');
      footer.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  }
  // Update play/pause button appearance
  function updatePlayPauseButton() {
      // Toggle the 'play' and 'pause' classes based on the play state
      playPauseBtn.classList.toggle('play', isPlaying);
      playPauseBtn.classList.toggle('pause', !isPlaying);
  }

  function hideelements() {
    const hideableSections = document.querySelectorAll('.hideable');

    if (hideableSections.length > 0) {
        hideableSections.forEach((hideableSection) => {
            // Add a short delay to ensure the transition is triggered
            setTimeout(() => {
                // Toggle the 'hidden' class immediately
                hideableSection.classList.toggle('hidden');

                AOS.refresh();
            }, 10); // Adjust the delay (in milliseconds) as needed
        });
    }
}


AOS.refresh();
// Remove the extra closing parenthesis and semicolon from here
});
