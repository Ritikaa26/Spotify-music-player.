console.log ("welcome to spotify");
// intialize the variables
// let songIndex = 0;
// let audioElement = new Audio ('song3.mp3');
// let masterplay = document.getElementById('masterplay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let songItem = Array.from(document.getElementsByClassName('songItem'));

// let songs =[
//     {songName: "Bones(imagine dragon)" , filePath: "song3.mp3" , coverPath: "cover.jpg"},
//     {songName: "apna bana le" , filePath: "song2.mp3" , coverPath: "cover 1.jpg"},
//     {songName: "deva deva" , filePath: "song3.mp3" , coverPath: "cover 2.jpg"},
//     {songName:" lover" , filePath: "song4.mp3" , coverPath: "cover 4.jpg"},
//     {songName: "closer" , filePath: "song5.mp3" , coverPath: "cover 5.jpg"},
// ]
// //     let songItem = Array.from(document.getElementsByClassName('songItem'));
//     songItem.array.forEach((element, i) => {
        
//         element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//         element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
        
//     })
//     //audioElement. play();
//     //handle play/pause click
// let masterPlay = document.getElementById('playing');
// masterplay.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterplay.classList.remove('fa-play-circle');
//         masterplay.classList.add('fa-pause-circle');
//         gif . style. opacity =1;
//         audioElement.addEventListener('timeupdate', () => {
//             time.innerHTML = audioElement.currentTime;
//     })
//     else{
//         audioElement.pause();
//         masterplay.classList.remove('fa-pause-circle');
//         masterplay.classList.add('fa-play-circle');
//         gif.style.opacity = 0 ;
//         for (let z = 0; z < index.length; z++) {
//             index[z].classList.add('fa-play-circle');
//         }
//     }

// })
// // listen to events

// myProgressBar.addEventListener('timeupdate', ()=> {
//     console.log('timeupdate');
// })
// myProgressBar.addEventListener('change',()=>{
//     audioElement.currentTime =myProgressBar.value *audioElement.duration/100;
// })
// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.add('fa-play-circle');
//         element.classList.remove('fa-pause-circle');

        
//     })
// }



//    Array.from (document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         makeAllPlays();
//         songIndex =  parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = 'songs/${songIndex+1}.mp3';
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif . style. opacity =1;
    
//         masterplay.classList.remove('fa-play-circle');
//         masterplay.classList.add('fa-pause-circle');
//     })
// })
// document.getElementById('next').addEventListener('click',()=>{
//     if(songIndex >= 4){
//         songIndex=0;
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterplay.classList.remove('fa-play-circle');
//         masterplay.classList.add('fa-pause-circle');
//     })
//     document.getElementById('previous').addEventListener('click',()=>{
//         if(_songIndex<=0){
//             songIndex=4;
//         }
//         else{
//             songIndex -= 1;
//         }
//         audioElement.src = `songs/${songIndex+1}.mp3`;
//             audioElement.currentTime = 0;
//             audioElement.play();
//             masterplay.classList.remove('fa-play-circle');
//             masterplay.classList.add('fa-pause-circle');
//         })

// console.log("welcome to spotify");

// let songIndex = 0;
// let audioElement = new Audio('song1.mp3');
// let masterplay = document.getElementById('masterplay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let songItem = Array.from(document.getElementsByClassName('songItem'));

// let songs = [
//     { songName: "Bones (Imagine Dragon)", filePath: "song1.mp3", coverPath: "cover.jpg" },
//     { songName: "Apna Bana Le", filePath: "song2.mp3", coverPath: "cover1.jpg" },
//     { songName: "Deva Deva", filePath: "song3.mp3", coverPath: "cover2.jpg" },
//     { songName: "Lover", filePath: "song4.mp3", coverPath: "cover4.jpg" },
//     { songName: "Closer", filePath: "song5.mp3", coverPath: "cover5.jpg" },
// ];

// songItem.forEach((element, i) => {
//     const img = element.getElementsByTagName("img")[0];
//     const songNameElement = element.getElementsByTagName("span")[0];

//     img.src = songs[i].coverPath;
//     songNameElement.innerText = songs[i].songName;

//     element.addEventListener('click', () => {
//         makeAllPlays();
//         songIndex = i;
//         playSong();
//     });
// });

// masterplay.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         playSong();
//     } else {
//         audioElement.pause();
//         masterplay.classList.remove('fa-pause-circle');
//         masterplay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// });

// myProgressBar.addEventListener('timeupdate', () => {
//     myProgressBar.value = (audioElement.currentTime / audioElement.duration) * 100;
// });

// myProgressBar.addEventListener('change', () => {
//     audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
// });

// function makeAllPlays() {
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.classList.add('fa-play-circle');
//         element.classList.remove('fa-pause-circle');
//     });
// }

// function playSong() {
//     makeAllPlays();
//     audioElement.src = songs[songIndex].filePath;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     gif.style.opacity = 1;
//     masterplay.classList.remove('fa-play-circle');
//     masterplay.classList.add('fa-pause-circle');
//     document.getElementById(songIndex).classList.remove('fa-play-circle');
//     document.getElementById(songIndex).classList.add('fa-pause-circle');
// }

        

        
        