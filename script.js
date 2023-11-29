/*  doc.addeventlistener(when all content in document has loaded, func())
    box = allboxes using queryselector(.box)
    box.addeventlistener(click)
    set an audio source to the datasrc of the box
    use playaudio(audio)
    get gif url from the box

    define playaudio
    if current audio is true, there is playing
    when clicked, the audio is paused

    create a new audio var
    play function
    set current audio to the new audio


    define changebg
    docquery bg
    bg.style.backgroundimage = url(imageurl)

 */

document.addEventListener('DOMContentLoaded', function () {
    AOS.init();

// You can also pass an optional settings object
// below listed default settings
    AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

    const boxes = document.querySelectorAll('.box');
    var element = document.body;
    //  so there will be no overflow in the audio
    let currentAudio = null;

  boxes.forEach((box,index) => {
      box.addEventListener('click', function () {
          const audioSrc = this.getAttribute('data-src');
          playAudio(audioSrc);
      });

      box.addEventListener('click', function () {
        const imageurl = this.getAttribute('data-gif');
        changeBg(imageurl);

        
        if(index == 2) {
            darkMode();
        }
        else {
            element.classList.remove("dark-mode");
        }

        
      });
  });
  
//   sets the the data-src to play
  function playAudio(src) {
      if (currentAudio) {
          currentAudio.pause();
      }

      const audio = new Audio(src);
      audio.play();
      currentAudio = audio;
  }

  function changeBg(imageurl){
    const bg = document.querySelector('.background');
    bg.style.backgroundImage = 'url(' + imageurl + ')';
  }

  function darkMode(){
    element.classList.toggle("dark-mode");
  }
});

