/*  doc.addeventlistener(when all content in document has loaded, func())
    box = allboxes using queryselector(.box)
    box.addeventlistener(click)
    set an audio source to the datasrc of the box
    use playaudio(audio)

    define playaudio
    if current audio is true, there is playing
    when clicked, the audio is paused

    create a new audio var
    play function
    set current audio to the new audio
 */



document.addEventListener('DOMContentLoaded', function () {
    
  const boxes = document.querySelectorAll('.box');
    //  so there will be no overflow in the audio
  let currentAudio = null;

  boxes.forEach(box => {
      box.addEventListener('click', function () {
          const audioSrc = this.getAttribute('data-src');
          playAudio(audioSrc);
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
});
