import * as allOutThousands from './all_out_00s.js';
import * as allOutNineties from './all_out_90s.js';
import * as allOutEighties from './all_out_80s.js';
import * as allOutSeventies from './all_out_70s.js';

$(document).ready(() => {
  let level;
  let duration = 0;
  let songs;
  let playlist;
  $(".difficulty").click((e) => {
    level = e.target.name;
    durationMapping(level);
    $(e.currentTarget).parent().remove();

  });

  const durationMapping = lvl => {
    switch (lvl){
      case 'pedestrian':
        duration = 5;
        break;
      case 'Mediocre':
        duration = 3;
        break;
      case 'Tough':
        duration = 1;
      case 'Insane':
        duration = 0.5;
        break;
      case 'Masochistic':
        duration = 0.25;
        break;
    }
  };

  $(".playlist").click((e) => {
    playlist = e.target.name;
    playlistMapping(playlist);
    $(e.currentTarget).parent().remove();
  });

  const playlistMapping = pl => {
    switch (pl){
      case 'allOutThousands':
        songs = allOutThousands.songs;
        break;
      case 'allOutNineties':
        songs = allOutNineties.songs;
        break;
      case 'allOutEighties':
        songs = allOutEighties.songs;
      case 'allOutSeventies':
        songs = allOutSeventies.songs;
        break;
    }
  };


  $( "#play" ).on("click", () => {
    play();
  });

  const play = () => {
    var audio = document.getElementById("audio");
    audio.play();
    $( "#play" ).remove();
  };



  $("#new-song").click((e) => {
    var song = songs[Math.floor(Math.random()* songs.length)];
    console.log(song.namer);
    var buttonAudio = $(`<div class="button-audio">
      <button id="play" type="button" name="button">play</button>
      <audio id="audio" src=${song.url}/>
    </div>`);
    $('body').append(buttonAudio);
    buttonAudio.click(play);

    var audio = document.getElementById("audio");
    $(audio).on("timeupdate", () => {
      if (audio.currentTime > duration){
        audio.pause();
        audio.remove();
      }
    });
  });







});
