// button for several functions
// ratings to work 
// save everything to local storage
// how to get values to work with input


// List Array for Table

  let list = [
    { id: 1, song: "Way Maker", author: "Sinach", ratings:[], chord: "https://docs.google.com/document/d/1Fp2Z1xj5vCCoJ57bMtZwC65-l_F7wKZMRmTLDsA3gDw/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1ygDCxhA21EyPA4jlLt6cP388DIprcoENNkFBQ0rUbBc/edit?usp=sharing", likes: "", play: "./clips/WayMaker.m4a"},
    { id: 2, song: "Breakthrough", author: "Eddie James", ratings:[], chord: "https://docs.google.com/document/d/1OlpqVUuK51BXAYagRe2quklaMPi3olh4YqDRwuuoDRs/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1QplYCoFFmbAro1ZMsrpQ9OSWcF1dL5U0nuShUKfW5yc/edit?usp=sharing", likes: "", play:"./clips/Breakthrough.m4a"},
    { id: 3, song: "Let the Heavens Open", author: "Christina D'Clario", ratings: [], chord: "https://docs.google.com/document/d/10HpkABDQJh5IFvRV8povJS7cItvWPz_Q2FQ7d2Krv0w/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1lOcdiujBd0gb4-VGWT6biaAhtKfBMyclpkxsP_u2JLI/edit?usp=sharing", likes: "", play: ""},
    { id: 4, song: "See a Victory", author: "Elevation Worship", ratings:[], chord: "https://docs.google.com/document/d/13BzAmQ1pNpz5Gk0pnDgGZVdbWqsJMRqcX_qzhOxQEhs/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1UcsrWD7bbmCKs1daKF2h5XTV2vyJb_Vu6sXPgjJbbZc/edit?usp=sharing", likes: "", play: "./clips/SeeAVictory.m4a"},
    { id: 5, song: "Famous For", author: "Tauren Wells", ratings:[], chord: "https://docs.google.com/document/d/1J1KZPsw3buciV2wgWO3BTSIAwzShp6i4wdxZkEpyqQc/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/16MVm3tbT-giv7lkW536GOii9j07PvfpAG1Yl0YywzbQ/edit?usp=sharing", likes: "", play: "./clips/FamousFor.m4a"},
    { id: 6, song: "Glorious Day", author: "Kristian Stanfill", ratings:[], chord: "https://docs.google.com/document/d/1o8Xqc4lT34gDsZ0AmofeO5FUBJOnlDW7h9M3gXxcac4/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1gZZIR0SOd9YrC6kpBaGOQmf-LRyrS1zpcJuTkv6naTw/edit?usp=sharing", likes: "", play: "./clips/GloriousDay.m4a"},
    { id: 7, song: "Throne Room", author: "Charity Gayle", ratings:[], chord: "https://docs.google.com/document/d/1gD44LVEkI8_ihOm5s1QF1Y2wTNeMDSgiBCDNFZI3HgE/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1Gc1XAJsqqI1Upc0xlK8EWcgRxVoZY5mZCSeuuByFZaU/edit?usp=sharing", likes: "", play: "./clips/ThroneRoom.m4a"},
    { id: 8, song: "He's Alive", author: "Eddie James", ratings:[], chord: "https://docs.google.com/document/d/1t6zzatpxl4uWqcw47251H7wbQSRqo0g8aH9gL8bChxg/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/18zkixkHsBUbfJnZU9x6tz_mKMpK8Zc_UVWn4H_nDyFc/edit?usp=sharing", likes: "", play: ""},
    { id: 9, song: "Ever Be", author: "Aaron Shust", ratings:[], chord: "https://docs.google.com/document/d/1Y-Uv6Lq33T52qy7lK5I-HckHdM2PSvNZsyYoud_bQ_A/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1M7qpMa2NZ-gvBMGjp4G7o8W4tGfaG98QvG97w504Cx8/edit?usp=sharing", likes: "", play: "./clips/EverBe.m4a"},
    { id: 10, song: "Do It Again", author: "Elevation Worship", ratings:[], chord: "https://docs.google.com/document/d/1pi58zvl_DnRy8PTkTKqDZ-rNI-SQQk6QRIBl9QNKyc4/edit?usp=sharing", spanishChord: "https://docs.google.com/document/d/1yulnR3F-dvQ60TPOral2Uvf-cTkE0w2OSCe4uGhQGIs/edit?usp=sharing", likes: "", play: "./clips/ThroneRoom.m4a"},
  ];
    
  document.addEventListener("DOMContentLoaded", (event) => {var table = document.getElementById("myTable");
    list.map( (e) => {
    var row = document.createElement('tr');
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
  
    cell1.innerHTML = e.song;
    cell2.innerHTML = e.author;
    cell3.innerHTML = '<div class="stars-outer"><div class="stars-inner"></div></div><span class="number-rating></span>';
    cell4.innerHTML = '<button id= "chord" onclick = "songChords(this)"value ='+e.chord+'>Chord</button>';
    cell5.innerHTML = '<button id= "spanishChord" onclick = "spanishChords(this)" value = '+e.spanishChord+'>Spanish</button>';
    cell6.innerHTML = '<button id= "likes" onclick = "songLikes(this)" value = '+e.likes+'>Like</button>';
    cell7.innerHTML = '<button id = "play" onclick = "musicClip(this)" value='+e.play+'><audio id="play"></audio>Clip</button>';
    cell8.innerHTML = '<p id="clickCount"></p>'
    table.appendChild(row);
    })})


    // from cell6 removed
  //    <i class ="fa fa-thumbs-up"></i>

    // function renderDynamicTable(){
    //   const table = document.createElement('table');
    //   const rows = list.map( (song, index + 1) => {
    //     let row = 
    //   })
    // }

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
    display.innerHTML = ('Total Likes', list[clickCount].likes);
    localStorage.setItem('Total Likes', list[clickCount].likes);
    list[clickCount].likes++;
    // count restarts on page refresh
  }

  // Clips
  function musicClip(music) {
    window.open(music.value);
  }

  // let thumb = true;

  // function songLikes(element){
  //     if(thumb){
  //         currentElement = element.querySelector('.fa-thumbs-up');
  //         currentElement.style.color = "green";
  //         localStorage.setItem('links', JSON.stringify(list));
  
  //     }else{
  //         const currentElement = element.querySelector('.fa-thumbs-up');
  //         currentElement.style.color = "red";
  //         localStorage.setItem('links', JSON.stringify(list));
  //     }
  //     thumb = !thumb;
  // }
  
    // window.addEventListener('DOMContentLoaded', e => {
    //     currentElement.style.color = localStorage.getItem("key");
    // });


  // These are the arrays where we would play
  // list[0].play to access each array

  


  // let music = document.getElementById('play'); 
 
  

  // play audio on condition that the individual button is clicked
      // if else if
  // pause audio on condition that the individual button is clicked
      // if else if
  // array for doing that for each button and will select this to ensure that it's only when this button is clicked
      // event Listener
  // can also do forEach

  // Ratings 
  // Default Ratings
  // const ratings = {
  // song1: 1.0,
  // song2: 1.0,
  // song3: 1.0,
  // song4: 1.0,
  // song5: 1.0,
  // song6: 1.0,
  // song7: 1.0,
  // song8: 1.0,
  // song9: 1.0, 
  // song10: 1.0
  // }

  // // // Total Stars
  // const starsTotal = 5;

  // // // Run getRatings when DOM loads
  // document.addEventListener('DOMContentLoaded', getRatings);

  // // // Form Elements
  // const songSelect = document.getElementById('song-select');
  // const ratingControl = document.getElementById('rating-control');

  // let song;

  // // // Song select change
  // songSelect.addEventListener('change', (e) => {
  //   song = e.target.value;
  //   // Enable rating control input
  //   ratingControl.disabled = false;
  //   ratingControl.value = ratings[song];
  // });

  // // Rating control change
  // ratingControl.addEventListener('blur', (e) => {
  //   const rating = e.target.value;

  //   // Make sure 5 or under
  //   if ((rating > 5) || (rating < 1)) {
  //     alert('Please rate 1 - 5');
  //     return;
  //   }
  //   // Change rating
  //   ratings[song] = rating;
    
  //   getRatings();

  // });

  // // Get ratings
  // function getRatings() {
  //   for (let rating in ratings) {
  //     // Get percentage
  //     const starPercentage = (ratings[rating] / starsTotal) * 100;

  //     // Round to nearest 10
  //     const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

  //     // Set width of stars-inner to percentage
  //     document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

  //     document.querySelector(`${rating-control} #number-rating`).style.width = starPercentageRounded;

  //     // Add number rating
  //     document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
  //   }
  // }






  // save ratings
  // function save() {
  //   // targeting the value that is entered by the user
  //   var new_rate = document.getElementById('rating-control').value;
  //   // if local storage is empty, add a new value with array
  //   if(localStorage.getItem('rate') == null){
  //     localStorage.setItem('rate', '[]');
  //   }
  //   // obtain old data and add new data
  //   var old_rate = JSON.parse(localStorage.getItem('rate'));
  //   // push new data on to the old data
  //   old_rate.push(new_rate);

  //   // save both datas to local storage
  //   localStorage.setItem('rate', JSON.stringify(old_rate));
  // }



  //sort Songs by Name
  // function songSort() {
  //   var table, rows, moving, i, horizontal, vertical, shouldMove;
  //   table = document.getElementById("sortTable");
  //   moving = true;
  //   /*loop that continues until no switch*/
  //   while (moving) {
  //     //start by saying: no moving is done:
  //     moving = false;
  //     rows = table.rows;
  //     /*Look through all rows in the table except first:*/
  //     for (i = 1; i < (rows.length - 1); i++) {
  //       //no switch
  //       shouldMove = false;
  //       /*Compare elements*/
  //       horizontal = rows[i].getElementsByTagName("TD")[0];
  //       vertical = rows[i + 1].getElementsByTagName("TD")[0];
  //       //check if the two rows should move places:
  //       if (horizontal.innerHTML.toLowerCase() > vertical.innerHTML.toLowerCase()) {
  //         //if so, mark as a move and break the loop:
  //         shouldMove = true;
  //         break;
  //       }
  //     }
  //     if (shouldMove) {
  //       /*Ensure that a move has been done*/
  //       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
  //       moving = true;
  //     }
  //    }
  //   }
    
    //sort Songs by Author
    // function authorSort() {
    //     var table, rows, moving, i, horizontal, vertical, shouldMove;
    //     table = document.getElementById("sortTable");
    //     moving = true;
    //     /*loop that continues until no switch*/
    //     while (moving) {
    //       //start by saying: no moving is done:
    //       moving = false;
    //       rows = table.rows;
    //       /*Look through all rows in the table except first:*/
    //       for (i = 1; i < (rows.length - 1); i++) {
    //         //no switch
    //         shouldMove = false;
    //         /*Compare elements*/
    //         horizontal = rows[i].getElementsByTagName("TD")[1];
    //         vertical = rows[i + 1].getElementsByTagName("TD")[1];
    //         //check if the two rows should move places:
    //         if (horizontal.innerHTML.toLowerCase() > vertical.innerHTML.toLowerCase()) {
    //           //if so, mark as a move and break the loop:
    //           shouldMove = true;
    //           break;
    //         }
    //       }
    //       if (shouldMove) {
    //         /*Ensure that a move has been done*/
    //         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    //         moving = true;
    //       }
    //     }
    // }
  

  //  // Likes
  //  // Song 1 Like
   
  //  let button = document.getElementById("view-like1");
  //     let clickCount1 = 0;
  //     let display1 = document.getElementById("click-count1");
  //     if (localStorage.getItem("Way Maker")) {
  //        clickCount1 = parseInt(localStorage.getItem("Way Maker"));
  //     }
  //     button.addEventListener("click", function() {
  //        clickCount1++;
  //        if (clickCount1 < 2){
  //         display1.innerHTML = clickCount1 + " like";
  //       }else {
  //         display1.innerHTML = clickCount1 + " likes";
  //       }
  //        localStorage.setItem("Way Maker", clickCount1);
  //     });

  // // Song 2 Like

  // let button2 = document.getElementById("view-like2");
  //     let clickCount2 = 0;
  //     let display2 = document.getElementById("click-count2");
  //     if (localStorage.getItem("Breakthrough")) {
  //       clickCount2 = parseInt(localStorage.getItem("Breakthrough"));
  //    }
  //    button2.addEventListener("click", function() {
  //       clickCount2++;
  //       if (clickCount2 < 2){
  //         display2.innerHTML = clickCount2 + " like";
  //       }else {
  //         display2.innerHTML = clickCount2 + " likes";
  //       }
  //       localStorage.setItem("Breakthrough", clickCount2);
  //    });

  //    // Song 3 Like

  //    let button3 = document.getElementById("view-like3");
  //     let clickCount3 = 0;
  //     let display3 = document.getElementById("click-count3");
  //     if (localStorage.getItem("Let The Heavens Open")) {
  //       clickCount3 = parseInt(localStorage.getItem("Let The Heavens Open"));
  //    }
  //    button3.addEventListener("click", function() {
  //     clickCount3++;
  //     if (clickCount3 < 2){
  //       display3.innerHTML = clickCount3 + " like";
  //     }else {
  //       display3.innerHTML = clickCount3 + " likes";
  //     }
  //     localStorage.setItem("Let The Heavens Open", clickCount3);
  //    });

  //    // Song 4 Like

  //    let button4 = document.getElementById("view-like4");
  //     let clickCount4 = 0;
  //     let display4 = document.getElementById("click-count4");
  //     if (localStorage.getItem("See A Victory")) {
  //       clickCount4 = parseInt(localStorage.getItem("See A Victory"));
  //    }
  //    button4.addEventListener("click", function() {
  //       clickCount4++;
  //       if (clickCount4 < 2){
  //         display4.innerHTML = clickCount4 + " like";
  //       }else {
  //         display4.innerHTML = clickCount4 + " likes";
  //       }
  //       localStorage.setItem("See A Victory", clickCount4);
  //    });

  //    //Song 5 Like

  //    let button5 = document.getElementById("view-like5");
  //    let clickCount5 = 0;
  //    let display5 = document.getElementById("click-count5");
  //    if (localStorage.getItem("Famous For")) {
  //      clickCount5 = parseInt(localStorage.getItem("Famous For"));
  //   }
  //   button5.addEventListener("click", function() {
  //      clickCount5++;
  //      if (clickCount5 < 2){
  //        display5.innerHTML = clickCount5 + " like";
  //      }else {
  //        display5.innerHTML = clickCount5 + " likes";
  //      }
  //      localStorage.setItem("Famous For", clickCount5);
  //   });

  //    //Song 6 Like

  //    let button6 = document.getElementById("view-like6");
  //    let clickCount6 = 0;
  //    let display6 = document.getElementById("click-count6");
  //    if (localStorage.getItem("Glorious Day")) {
  //      clickCount6 = parseInt(localStorage.getItem("Glorious Day"));
  //   }
  //   button6.addEventListener("click", function() {
  //      clickCount6++;
  //      if (clickCount6 < 2){
  //        display6.innerHTML = clickCount6 + " like";
  //      }else {
  //        display6.innerHTML = clickCount6 + " likes";
  //      }
  //      localStorage.setItem("Glorious Day", clickCount6);
  //   });

  //   //Song 7 Like

  //   let button7 = document.getElementById("view-like7");
  //   let clickCount7 = 0;
  //   let display7 = document.getElementById("click-count7");
  //   if (localStorage.getItem("Throne Room")) {
  //     clickCount7 = parseInt(localStorage.getItem("Throne Room"));
  //  }
  //  button7.addEventListener("click", function() {
  //     clickCount7++;
  //     if (clickCount7 < 2){
  //       display7.innerHTML = clickCount7 + " like";
  //     }else {
  //       display7.innerHTML = clickCount7 + " likes";
  //     }
  //     localStorage.setItem("Throne Room", clickCount7);
  //  });

  //     //Song 8 Like

  //     let button8 = document.getElementById("view-like8");
  //     let clickCount8 = 0;
  //     let display8 = document.getElementById("click-count8");
  //     if (localStorage.getItem("He's Alive")) {
  //       clickCount8 = parseInt(localStorage.getItem("He's Alive"));
  //    }
  //    button8.addEventListener("click", function() {
  //       clickCount8++;
  //       if (clickCount8 < 2){
  //         display8.innerHTML = clickCount8 + " like";
  //       }else {
  //         display8.innerHTML = clickCount8 + " likes";
  //       }
  //       localStorage.setItem("He's Alive", clickCount8);
  //    });

  //     //Song 9 Like

  //     let button9 = document.getElementById("view-like9");
  //     let clickCount9 = 0;
  //     let display9 = document.getElementById("click-count9");
  //     if (localStorage.getItem("Ever Be")) {
  //       clickCount9 = parseInt(localStorage.getItem("Ever Be"));
  //   }
  //   button9.addEventListener("click", function() {
  //       clickCount9++;
  //       if (clickCount9 < 2){
  //         display9.innerHTML = clickCount9 + " like";
  //       }else {
  //         display9.innerHTML = clickCount9 + " likes";
  //       }
  //       localStorage.setItem("Ever Be", clickCount9);
  //   });

  //     //Song 10 Like

  //     let button10 = document.getElementById("view-like10");
  //     let clickCount10 = 0;
  //     let display10 = document.getElementById("click-count10");
  //     if (localStorage.getItem("Do It Again")) {
  //       clickCount10 = parseInt(localStorage.getItem("Do It Again"));
  //   }
  //   button10.addEventListener("click", function() {
  //       clickCount10++;
  //       if (clickCount10 < 2){
  //         display10.innerHTML = clickCount10 + " like";
  //       }else {
  //         display10.innerHTML = clickCount10 + " likes";
  //       }
  //       localStorage.setItem("Do It Again", clickCount10);
  //   });






    // function songLikes(x) {
    //   x.classList.toggle("fa-thumbs-down")
    // }


  


//   const like = document.querySelectorAll('likes');
//   let count = 0;

//   function songLikes() {
//     like.forEach((count) => {
//       count.addEventListener('click', () => {
//         if(localStorage.getItem('likes') == null){
//           localStorage.setItem('likes', '[]');
//           count++;
//         }
//         if (localStorage.getItem('likes')) {
//           count = parseInt(localStorage.getItem('likes'));
//        }

//       })
//     })
//   }


//   const ratingElements = document.querySelectorAll('div.rating')

// ratingElements.forEach(ratingElement => {
//     const countUpButton = ratingElement.querySelector('button.countUp')
//     // const countDownButton = ratingElement.querySelector('button.countDown')
//     const counterDisplayElement = ratingElement.querySelector('count')

//     countUpButton.addEventListener('click', function() {
//         const currentCount = Number(counterDisplayElement.innerHTML);
//         counterDisplayElement.innerHTML = String(currentCount + 1);
//     })

//     // countDownButton.addEventListener('click', function() {
//     //     const currentCount = Number(counterDisplayElement.innerHTML);
//     //     counterDisplayElement.innerHTML = String(currentCount - 1);
//     // })
// })



  // // Audio Section
  // let audio1 = document.getElementById("play1").children[0];
  // let isPlaying1 = false;
  // audio1.pause();

  // function songPlay1() {
  //   if (isPlaying1) {
  //     audio1.pause();
  //   } else {
  //     audio1.play();
  //   }
  //   isPlaying1 = !isPlaying1;
  // }  


  // let audio2 = document.getElementById("play2").children[0];
  // let isPlaying2 = false;
  // audio2.pause();

  // function songPlay2() {
  //   if (isPlaying2) {
  //     audio2.pause();
  //   } else {
  //     audio2.play();
  //   }
  //   isPlaying2 = !isPlaying2;
  // }  


  // let audio3 = document.getElementById("play3").children[0];
  // let isPlaying3 = false;
  // audio3.pause();

  // function songPlay3() {
  //   if (isPlaying3) {
  //     audio3.pause();
  //   } else {
  //     audio3.play();
  //   }
  //   isPlaying3 = !isPlaying3;
  // }  


  // let audio4 = document.getElementById("play4").children[0];
  // let isPlaying4 = false;
  // audio4.pause();

  // function songPlay4() {
  //   if (isPlaying4) {
  //     audio4.pause();
  //   } else {
  //     audio4.play();
  //   }
  //   isPlaying4 = !isPlaying4;
  // }  

  // let audio5 = document.getElementById("play5").children[0];
  // let isPlaying5 = false;
  // audio5.pause();

  // function songPlay5() {
  //   if (isPlaying5) {
  //     audio5.pause();
  //   } else {
  //     audio5.play();
  //   }
  //   isPlaying5 = !isPlaying5;
  // }  

  // let audio6 = document.getElementById("play6").children[0];
  // let isPlaying6 = false;
  // audio6.pause();

  // function songPlay6() {
  //   if (isPlaying6) {
  //     audio6.pause();
  //   } else {
  //     audio6.play();
  //   }
  //   isPlaying6 = !isPlaying6;
  // }  

  // let audio7 = document.getElementById("play7").children[0];
  // let isPlaying7 = false;
  // audio7.pause();

  // function songPlay7() {
  //   if (isPlaying7) {
  //     audio7.pause();
  //   } else {
  //     audio7.play();
  //   }
  //   isPlaying7 = !isPlaying7;
  // }  

  // let audio8 = document.getElementById("play8").children[0];
  // let isPlaying8 = false;
  // audio8.pause();

  // function songPlay8() {
  //   if (isPlaying8) {
  //     audio8.pause();
  //   } else {
  //     audio8.play();
  //   }
  //   isPlaying8 = !isPlaying8;
  // }  

  // let audio9 = document.getElementById("play9").children[0];
  // let isPlaying9 = false;
  // audio9.pause();

  // function songPlay9() {
  //   if (isPlaying9) {
  //     audio9.pause();
  //   } else {
  //     audio9.play();
  //   }
  //   isPlaying9 = !isPlaying9;
  // }  


  // let audio10 = document.getElementById("play10").children[0];
  // let isPlaying10 = false;
  // audio10.pause();

  // function songPlay10() {
  //   if (isPlaying10) {
  //     audio10.pause();
  //   } else {
  //     audio10.play();
  //   }
  //   isPlaying10 = !isPlaying10;
  // }  


  // function pauseSong9() {
  //     let music = new Audio('Ever Be - Rec.m4a');
  //     music.pause();
  // }



// function myFunction() {
//   var table = document.getElementById("myTable");
//   list.map( (e) => {
//   var row = document.createElement('tr');
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   var cell3 = row.insertCell(2);
//   var cell4 = row.insertCell(3);
  
//   cell1.innerHTML = e.song;
//   cell2.innerHTML = e.author;
//   cell3.innerHTML = e.ratings;
//   table.appendChild(row);
//   })

// }


// <tr id="0">
// <td>items[0].song</td>
// <td>items[0].author</td>
// <td>items[0].ratings.reduce()</td>
// </tr>


// how do I make it work and fit into my table?
// how do I target those values in that way?

// parse it
// list[0].rating
// can set average rating 
// can map through to get average of an array

// turn class into id