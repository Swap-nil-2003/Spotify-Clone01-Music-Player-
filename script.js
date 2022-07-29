console.log("Welcome to Spotify!");
let songs= [
    {songName:"Mortals - Warriyo", filePath: "Songs/1.mp3", coverPath: "covers/mortals.jpg"},
    {songName:"Bhool Bhulaiyaa 2", filePath: "Songs/2.mp3", coverPath: "covers/BB2.jpg"},
    {songName:"Ajj Din Chadheya", filePath: "Songs/3.mp3", coverPath: "covers/lak.jpg"},
    {songName:"Dil Dooba", filePath: "Songs/4.mp3", coverPath: "covers/dd.jpg"},
    {songName:"Bas Ek Pal", filePath: "Songs/5.mp3", coverPath: "covers/bep.jpg"},
    {songName:"Brown Rang", filePath: "Songs/6.mp3", coverPath: "covers/br.jpg"},
    {songName:"Chota Sa Fasaana", filePath: "Songs/7.mp3", coverPath: "covers/kw.jpg"},
    {songName:"Milne Hai Mujhse Aayi", filePath: "Songs/8.mp3", coverPath: "covers/aa.jpg"},
]

let songIndex =0;
let songIndex1=0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));

songItems.forEach((element,i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =  songs[i].songName;
})
//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        let songItemPlay= document.getElementById(`${songIndex}`);
        songItemPlay.classList.remove('fa-circle-play');
        songItemPlay.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        let songItemPlay= document.getElementById(`${songIndex}`);
        songItemPlay.classList.add('fa-circle-play');
        songItemPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
//Listening Events
audioElement.addEventListener('timeupdate',()=>{
   
    //Update Seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

  const makeAllPlays= ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
      })
  }
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

      })

 })
 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7)
    {
        songIndex = 0;
        songIndex1=7;
    }
    else{
        songIndex +=1;
        songIndex1=songIndex-1
    }
        let songItemPlay= document.getElementById(`${songIndex}`);
        let songItemPlay1= document.getElementById(`${songIndex1}`);
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songItemPlay.classList.remove('fa-circle-play');
        songItemPlay.classList.add('fa-circle-pause');
        songItemPlay1.classList.add('fa-circle-play');
        songItemPlay1.classList.remove('fa-circle-pause');

 })
 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex = 7;
        songIndex1=0;
    }
    else{
        songIndex -=1;
        songIndex1=songIndex+1;
    }
        let songItemPlay= document.getElementById(`${songIndex}`);
        let songItemPlay1= document.getElementById(`${songIndex1}`);
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songItemPlay.classList.remove('fa-circle-play');
        songItemPlay.classList.add('fa-circle-pause');
        songItemPlay1.classList.add('fa-circle-play');
        songItemPlay1.classList.remove('fa-circle-pause');
 })
