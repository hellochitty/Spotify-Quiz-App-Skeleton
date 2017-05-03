$(document).ready(() => {

  console.log("hi");

  $( "#play" ).on("click", () => {
    var audio = document.getElementById("audio");
    audio.play();
    $( "#play" ).addClass("hidden");
    console.log("done");

  });
  //add 3 second timeout to audio
  var audio = document.getElementById("audio");
  audio.onended = function() {
    alert("audio playback has ended");
  };
  $(audio).on("timeupdate", (e) => {
    if (e.timeStamp > 5000){
      audio.pause();
    }
  });
});
