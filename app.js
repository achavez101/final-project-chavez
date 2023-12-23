// List Array for Table

  let list = [
    { id: 1, song: "Way Maker", author: "Sinach",  chord: "https://docs.google.com/document/d/1Fp2Z1xj5vCCoJ57bMtZwC65-l_F7wKZMRmTLDsA3gDw/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1ygDCxhA21EyPA4jlLt6cP388DIprcoENNkFBQ0rUbBc/edit?usp=sharing", likes: "", play: "./clips/WayMaker.m4a"},
    { id: 2, song: "Breakthrough", author: "Eddie James", chord: "https://docs.google.com/document/d/1OlpqVUuK51BXAYagRe2quklaMPi3olh4YqDRwuuoDRs/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1QplYCoFFmbAro1ZMsrpQ9OSWcF1dL5U0nuShUKfW5yc/edit?usp=sharing", likes: "", play:"./clips/Breakthrough.m4a"},
    { id: 3, song: "Let the Heavens Open", author: "Christina D'Clario", chord: "https://docs.google.com/document/d/10HpkABDQJh5IFvRV8povJS7cItvWPz_Q2FQ7d2Krv0w/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1lOcdiujBd0gb4-VGWT6biaAhtKfBMyclpkxsP_u2JLI/edit?usp=sharing", likes: "", play: ""},
    { id: 4, song: "See a Victory", author: "Elevation Worship", chord: "https://docs.google.com/document/d/13BzAmQ1pNpz5Gk0pnDgGZVdbWqsJMRqcX_qzhOxQEhs/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1UcsrWD7bbmCKs1daKF2h5XTV2vyJb_Vu6sXPgjJbbZc/edit?usp=sharing", likes: "", play: "./clips/SeeAVictory.m4a"},
    { id: 5, song: "Famous For", author: "Tauren Wells", chord: "https://docs.google.com/document/d/1J1KZPsw3buciV2wgWO3BTSIAwzShp6i4wdxZkEpyqQc/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/16MVm3tbT-giv7lkW536GOii9j07PvfpAG1Yl0YywzbQ/edit?usp=sharing", likes: "", play: "./clips/FamousFor.m4a"},
    { id: 6, song: "Glorious Day", author: "Kristian Stanfill", chord: "https://docs.google.com/document/d/1o8Xqc4lT34gDsZ0AmofeO5FUBJOnlDW7h9M3gXxcac4/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1gZZIR0SOd9YrC6kpBaGOQmf-LRyrS1zpcJuTkv6naTw/edit?usp=sharing", likes: "", play: "./clips/GloriousDay.m4a"},
    { id: 7, song: "Throne Room", author: "Charity Gayle",  chord: "https://docs.google.com/document/d/1gD44LVEkI8_ihOm5s1QF1Y2wTNeMDSgiBCDNFZI3HgE/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1Gc1XAJsqqI1Upc0xlK8EWcgRxVoZY5mZCSeuuByFZaU/edit?usp=sharing", likes: "", play: "./clips/ThroneRoom.m4a"},
    { id: 8, song: "He's Alive", author: "Eddie James",  chord: "https://docs.google.com/document/d/1t6zzatpxl4uWqcw47251H7wbQSRqo0g8aH9gL8bChxg/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/18zkixkHsBUbfJnZU9x6tz_mKMpK8Zc_UVWn4H_nDyFc/edit?usp=sharing", likes: "", play: ""},
    { id: 9, song: "Ever Be", author: "Aaron Shust",  chord: "https://docs.google.com/document/d/1Y-Uv6Lq33T52qy7lK5I-HckHdM2PSvNZsyYoud_bQ_A/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1M7qpMa2NZ-gvBMGjp4G7o8W4tGfaG98QvG97w504Cx8/edit?usp=sharing", likes: "", play: "./clips/EverBe.m4a"},
    { id: 10, song: "Do It Again", author: "Elevation Worship", chord: "https://docs.google.com/document/d/1pi58zvl_DnRy8PTkTKqDZ-rNI-SQQk6QRIBl9QNKyc4/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1yulnR3F-dvQ60TPOral2Uvf-cTkE0w2OSCe4uGhQGIs/edit?usp=sharing", likes: "", play: "./clips/ThroneRoom.m4a"},
  ];
    
  document.addEventListener("DOMContentLoaded", (event) => {var table = document.getElementById("myTable");
    list.map( (e) => {
    // mapping table to give one table column at a time
    var row = document.createElement('tr');
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
  
    // adding each value to the HTML page
    cell1.innerHTML = e.song;
    cell2.innerHTML = e.author;
    cell3.innerHTML = '<button id= "chord" onclick = "songChords(this)"value ='+e.chord+'>Chord</button>';
    cell4.innerHTML = '<button id= "spanishChord" onclick = "spanishChords(this)" value = '+e.spanishChord+'>Spanish</button>';
    cell5.innerHTML = '<button id= "likes" onclick = "songLikes(this)" value = '+e.likes+'> <i class ="fa fa-thumbs-up"></i> </button>';
    cell6.innerHTML = '<button id = "play" onclick = "musicClip(this)" value='+e.play+'><audio id="play"></audio>Clip</button>';
    cell7.innerHTML = '<p id="clickCount"></p>';
    table.appendChild(row);
    })})

// English Chord Links
function songChords(link) {
  window.open(link.value);
  }

  // Spanish Chord Links
  function spanishChords(link) {
  window.open(link.value);
  }

  // Function for Likes
  function songLikes(likeButton) {
    likeButton = document.getElementById('likes');
    let clickCount = 0;
    let display = document.getElementById('clickCount');
    // if(localStorage.getItem("likes") == []){
    //   clickCount++;
    // }

    localStorage.setItem('Total Likes', list[clickCount].likes);
    display.innerHTML = ('Total Likes', list[clickCount].likes);
    list[clickCount].likes++;
  }

  // Clips
  function musicClip(music) {
    window.open(music.value);
  }
  //sort Songs by Name
  var songArray = list.sort(function (a,b) {
    var name1 = a.song.toLowerCase();
    var name2 = b.song.toLowerCase();
    if(name1 < name2) {
      return -1;
    }
    else if(name1 > name2) {
      return 1;
    }
    return 0;
  });