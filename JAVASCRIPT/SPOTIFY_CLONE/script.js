

async function getSongs() {
    const a = await fetch("http://127.0.0.1:5500/JAVASCRIPT/SPOTIFY_CLONE/songs/")

    let response = await a.text();
    console.log(response);

    let div = document.createElement("div");
    div.innerHTML = response;

    let as = div.getElementsByTagName("a");

    let songs = [];

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }
    }

    return songs;

}

const playMusic = (track)=>{
    let audio = new Audio( "/songs/"  + track)
    audio.play()
}

async function main() {

    let currentSong;

    let songs = await getSongs();
    console.log(songs);

// commented code only removed %20 and below code removes all %26 and %2c also so used

    // let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    // for (const song of songs) {
    //     songUL.innerHTML = songUL.innerHTML + `<li> ${song.replaceAll("%20", " ") }</li>`
    // }

// SHOWS ALL SONGS IN PLAYLIST

    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];

    for (const song of songs) {
        let formattedSong = song.replaceAll("%20", " ")
            .replaceAll("%2C", " ")
            .replaceAll("%26", " ");

        songUL.innerHTML += `<li>
                                    <img class="invert" src="music.svg" alt="">

                            <div class="info">
                                <div>${formattedSong}</div>
                            </div>

                            <div class="playnow">
                                <span>Play Now!</span>
                                <img class="invert" src="play.svg" alt="Play" style="width: 30px; height: 30px;">
                            </div>
 </li>`;
    }


    // Attach an event listener to each song



    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click " , element=>{
            console.log(e);
            // playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
        })
    });


    // play first song
    var audio = new Audio(songs[0]); // index of the song to be played
    // audio.play();
}

main();



