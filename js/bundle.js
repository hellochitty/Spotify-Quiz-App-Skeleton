/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const songs = [ { url: 'https://p.scdn.co/mp3-preview/3859547944f57cfb7b996f6551148c9467889d4b?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Hips Don\'t Lie' },
  { url: 'https://p.scdn.co/mp3-preview/6d6e50462ebed94662d84509d75a3a73fbf65fec?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Crazy in Love' },
  { url: 'https://p.scdn.co/mp3-preview/d71b06b9141759e8936335ad60f824f55814d831?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Don\'t Cha' },
  { url: 'https://p.scdn.co/mp3-preview/0eda514ae31d2e972d9481a5c782a66d65d0eaf6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Gold Digger' },
  { url: 'https://p.scdn.co/mp3-preview/64e5d7979445e8402011934fe1c201675f1c210e?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Party In The U.S.A.' },
  { url: 'https://p.scdn.co/mp3-preview/b9c7414d6093b07d782da75c9189f8f887b31ab9?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Yeah!' },
  { url: 'https://p.scdn.co/mp3-preview/1e7610e9553148155b711c55f10d5912290f6878?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Where Is The Love?' },
  { url: 'https://p.scdn.co/mp3-preview/14a42f83aad3ea545736184a08323545090bdd48?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Lose Yourself - Soundtrack Version' },
  { url: 'https://p.scdn.co/mp3-preview/c48860e5c7ce2f6a312b6bc4efd16de85ec49216?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Survivor' },
  { url: 'https://p.scdn.co/mp3-preview/3017f41234c54ef09c66f4d2ff47e1acee8d8a4e?cid=8897482848704f2a8f8d7c79726a70d4',
    name: '4 Minutes - feat. Justin Timberlake And Timbaland' },
  { url: 'https://p.scdn.co/mp3-preview/6ed3097e490b67e39b05b7ec87740a584dcb64cb?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Don\'t Stop The Music' },
  { url: 'https://p.scdn.co/mp3-preview/9dfd5e30d0e9cf447d525932ab86e4daa75ad33f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Ignition - Remix' },
  { url: 'https://p.scdn.co/mp3-preview/a3e433aefb4d7d74fab9ed6d2cf9f2b6209db311?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'It Wasn\'t Me' },
  { url: 'https://p.scdn.co/mp3-preview/a253bbc492e7da5bb9ae069103a2bc404055a047?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Dynamite' },
  { url: 'https://p.scdn.co/mp3-preview/e40ad9c8016efc1f25a291f3b0aea58d691948b5?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Hey Ya! - Radio Mix / Club Mix' },
  { url: 'https://p.scdn.co/mp3-preview/ebc79c6e835bd18a744307d51c942a749e3ad2ca?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'One, Two Step' },
  { url: 'https://p.scdn.co/mp3-preview/8ab0eb630a60787224163576736647620b6d98c8?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'TiK ToK' },
  { url: 'https://p.scdn.co/mp3-preview/446c66f2946007c502342d167284f6e3a02c7705?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'In My Head' },
  { url: 'https://p.scdn.co/mp3-preview/507a3f678f015d1d67893d4f35eb38904ca5ece8?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Oops!...I Did It Again' },
  { url: 'https://p.scdn.co/mp3-preview/3c97985f3736fab6d4abcd2067f346a9b30955fa?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Halo' },
  { url: 'https://p.scdn.co/mp3-preview/b05681b8d3d07a6e0eed3a69d7e6bc221064d8e6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Crazy' },
  { url: 'https://p.scdn.co/mp3-preview/102255c25347769652df929b2cedb748a7e49b4a?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Last Friday Night (T.G.I.F.)' },
  { url: 'https://p.scdn.co/mp3-preview/497f3eed8dedf972b878e04e4e3f6b18556226c3?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Complicated' },
  { url: 'https://p.scdn.co/mp3-preview/620bf0eecfb629e4bcd9feac1dd61e3bac66e654?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Since U Been Gone' },
  { url: 'https://p.scdn.co/mp3-preview/3046f26f587150c851101d714b9eee28d1c32581?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'She Will Be Loved' },
  { url: 'https://p.scdn.co/mp3-preview/3151f650bb1fc7322717402ae7d7e3d79f42e5b0?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Poker Face' },
  { url: 'https://p.scdn.co/mp3-preview/10d17836747a13d17cf73a570fd7ff094482a12f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Hollaback Girl' },
  { url: 'https://p.scdn.co/mp3-preview/29414f20ba1659e9f54612e358d881861aa90c2d?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'I Kissed a Girl' },
  { url: 'https://p.scdn.co/mp3-preview/27cd79ca009d7cb88970625eb55877d8be947130?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'F**k You' },
  { url: 'https://p.scdn.co/mp3-preview/06b19381ba63728f291972e244524dd222cbe645?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Drop It Like It\'s Hot' },
  { url: 'https://p.scdn.co/mp3-preview/77bebc1b16038e9815ffa63d91492bc3b7b8d5a6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Bye Bye Bye' },
  { url: 'https://p.scdn.co/mp3-preview/31164e6bd7907184d43b803d8352087cc0daa718?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Bad Romance' },
  { url: 'https://p.scdn.co/mp3-preview/f3d2399d85d47296e11452411a1e010b2c7ca371?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Bleeding Love' },
  { url: 'https://p.scdn.co/mp3-preview/9ac6ac06e93f53f6ded690a12c38d21e3a7a0d71?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'I Know You Want Me (Calle Ocho)' },
  { url: 'https://p.scdn.co/mp3-preview/91f9d6e2c692afb77bed3a40e7bf72e95ac6dd67?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'So What' },
  { url: 'https://p.scdn.co/mp3-preview/958b3e3c13c8c1fed008400ec2a6b821a821cccc?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Snow (Hey Oh)' },
  { url: 'https://p.scdn.co/mp3-preview/82731065c728a8e9baf09f4e1af235265cd19054?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Seven Nation Army' },
  { url: 'https://p.scdn.co/mp3-preview/abe929d2a0fba9d1e6c284fa3e052b3e0e866984?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Raise Your Glass' },
  { url: 'https://p.scdn.co/mp3-preview/eb8e1344c10b93965b3d8ebf270efb1b74ae97d6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Dirrty' },
  { url: 'https://p.scdn.co/mp3-preview/d4a0e1cd08839a722f4f2af160aabac07371ecd2?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Dancing in the Moonlight' },
  { url: 'https://p.scdn.co/mp3-preview/f9877d70c57311941dca4782fbaa41efce514c67?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'When Love Takes Over (feat. Kelly Rowland)' },
  { url: 'https://p.scdn.co/mp3-preview/2c0deb881f7dea4fc65e3f11f54c5558da4f0d29?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Fuck You' },
  { url: 'https://p.scdn.co/mp3-preview/57c6b6535c3edb18f1f441b22f0cc8117784e42d?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Fireflies' },
  { url: 'https://p.scdn.co/mp3-preview/07c6c33d6426d61ffd2e93d4c06ca599f7761b46?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Just the Way You Are' },
  { url: 'https://p.scdn.co/mp3-preview/99c41fbd4f944539451f235c689391f11e8259ca?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Mercy' },
  { url: 'https://p.scdn.co/mp3-preview/b6393162ba6857ed9954230a0f2a2f1c3cab0883?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Hey, Soul Sister' },
  { url: 'https://p.scdn.co/mp3-preview/7424380e04bb59980e2e836382b4568e06e73635?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'So Sick' },
  { url: 'https://p.scdn.co/mp3-preview/482cf9985443c2e4907eff3c81f1107616a42ef1?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Follow Me' },
  { url: 'https://p.scdn.co/mp3-preview/83b2d8de11586a6c8c156ee46cbe8e131e0e9f9f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'All The Things She Said' },
  { url: 'https://p.scdn.co/mp3-preview/d6fc23418ef4a090922decfe6a47c7bc87c1d762?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Grenade' },
  { url: 'https://p.scdn.co/mp3-preview/bb0a310830636ebf8e5f6a1fa03d129a9724f7ec?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Viva La Vida' },
  { url: 'https://p.scdn.co/mp3-preview/1012fc6985ded238df0fceb806d34deb3f1e4328?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'I\'m Like A Bird' },
  { url: 'https://p.scdn.co/mp3-preview/7c91c6dc291142a9a489eb9be0a261b489028933?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'If I Ain\'t Got You' },
  { url: 'https://p.scdn.co/mp3-preview/5c4c61c2e44da71d54c6f232573b44355d1ac06e?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'You\'ve Got The Love' },
  { url: 'https://p.scdn.co/mp3-preview/128893055a1125f5f401947349b80e1cdc230302?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Grace Kelly' },
  { url: 'https://p.scdn.co/mp3-preview/1d9582bc88459ff25f3d2948ef397ff01768a8ad?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Lights - Single Version' },
  { url: 'https://p.scdn.co/mp3-preview/c808e35b385571cbda7ccf893c9c568b83a0390d?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'How to Save a Life' },
  { url: 'https://p.scdn.co/mp3-preview/84b0ad9f6dddec182acb3e52fd9c1b97567c5ffb?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Can\'t Fight The Moonlight' },
  { url: 'https://p.scdn.co/mp3-preview/e194d189aa0d958ae001506e82ddfcbf62988e2f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Milkshake' },
  { url: 'https://p.scdn.co/mp3-preview/01acb992765814da4cbcd7080b7933aedd723b26?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'The Reason' },
  { url: 'https://p.scdn.co/mp3-preview/406ce8fc608ab6186b716977fad1151f4be1b179?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Chasing Cars' },
  { url: 'https://p.scdn.co/mp3-preview/a83eedd6b982d4afdc2ceaeb458f471118ad78aa?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Wake Me Up When September Ends' } ];
/* harmony export (immutable) */ __webpack_exports__["a"] = songs;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__songs_js__ = __webpack_require__(0);


$(document).ready(() => {
  let level;
  let duration = 0;

  $(".settings-difficulty").click((e) => {
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


  $( "#play" ).on("click", () => {
    play();
  });

  const play = () => {
    var audio = document.getElementById("audio");
    audio.play();
    $( "#play" ).remove();
  };



  $("#new-song").click((e) => {
    var song = __WEBPACK_IMPORTED_MODULE_0__songs_js__["a" /* songs */][Math.floor(Math.random()* __WEBPACK_IMPORTED_MODULE_0__songs_js__["a" /* songs */].length)];
    console.log(song);
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


/***/ })
/******/ ]);