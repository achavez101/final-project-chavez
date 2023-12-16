

    // Initial Ratings
    const ratings = {
    song1: 1.0,
    song2: 1.0,
    song3: 1.0,
    song4: 1.0,
    song5: 1.0,
    song6: 1.0,
    song7: 1.0,
    song8: 1.0,
    song9: 1.0, 
    song10: 1.0
    }

  // Total Stars
  const starsTotal = 5;

  // Run getRatings when DOM loads
  document.addEventListener('DOMContentLoaded', getRatings);

  // Form Elements
  const productSelect = document.getElementById('product-select');
  const ratingControl = document.getElementById('rating-control');
 

  // Storing Rate Value in local storage
  //inner html with key selection ideas
  window.addEventListener('load', () => {
    const rate1 = document.querySelector('#rating-control');
    const rateUpdate1= localStorage.getItem('rateUpdate1')  || '';
      rate1.value = rateUpdate1;
      rate1.addEventListener('change', (e) => {
        //setItem(keyName, keyValue)
        localStorage.setItem('rateUpdate1', e.target.value);
      })
  })



  let product;

  // Product select change
  productSelect.addEventListener('change', (e) => {
    product = e.target.value;
    // Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
  });

  // Rating control change
  ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;

    // Make sure 5 or under
    if (rating > 5) {
      alert('Please rate 1 - 5');
      return;
    }

    // Change rating
    ratings[product] = rating;

    getRatings();
  });

  // Get ratings
  function getRatings() {
    for (let rating in ratings) {
      // Get percentage
      const starPercentage = (ratings[rating] / starsTotal) * 100;

      // Round to nearest 10
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

      // Set width of stars-inner to percentage
      document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

      // Add number rating
      document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
  }

  //sort Songs by Name
  function songSort() {
    var table, rows, moving, i, horizontal, vertical, shouldMove;
    table = document.getElementById("sortTable");
    moving = true;
    /*loop that continues until no switch*/
    while (moving) {
      //start by saying: no moving is done:
      moving = false;
      rows = table.rows;
      /*Look through all rows in the table except first:*/
      for (i = 1; i < (rows.length - 1); i++) {
        //no switch
        shouldMove = false;
        /*Compare elements*/
        horizontal = rows[i].getElementsByTagName("TD")[0];
        vertical = rows[i + 1].getElementsByTagName("TD")[0];
        //check if the two rows should move places:
        if (horizontal.innerHTML.toLowerCase() > vertical.innerHTML.toLowerCase()) {
          //if so, mark as a move and break the loop:
          shouldMove = true;
          break;
        }
      }
      if (shouldMove) {
        /*Ensure that a move has been done*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        moving = true;
      }
     }
    }
    
    //sort Songs by Author
    function authorSort() {
        var table, rows, moving, i, horizontal, vertical, shouldMove;
        table = document.getElementById("sortTable");
        moving = true;
        /*loop that continues until no switch*/
        while (moving) {
          //start by saying: no moving is done:
          moving = false;
          rows = table.rows;
          /*Look through all rows in the table except first:*/
          for (i = 1; i < (rows.length - 1); i++) {
            //no switch
            shouldMove = false;
            /*Compare elements*/
            horizontal = rows[i].getElementsByTagName("TD")[1];
            vertical = rows[i + 1].getElementsByTagName("TD")[1];
            //check if the two rows should move places:
            if (horizontal.innerHTML.toLowerCase() > vertical.innerHTML.toLowerCase()) {
              //if so, mark as a move and break the loop:
              shouldMove = true;
              break;
            }
          }
          if (shouldMove) {
            /*Ensure that a move has been done*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            moving = true;
          }
        }
    }
    // English Chord Links
   function songChords(link) {
    window.open(link.value);
   }

   // Spanish Chord Links
   function spanishChords(link) {
    window.open(link.value);
   }

   // Likes
   // Song 1 Like
   
   let button = document.getElementById("view-like1");
      let clickCount1 = 0;
      let display1 = document.getElementById("click-count1");
      if (localStorage.getItem("clickCount1")) {
         clickCount1 = parseInt(localStorage.getItem("clickCount1"));
      }
      button.addEventListener("click", function() {
         clickCount1++;
         if (clickCount1 < 2){
          display1.innerHTML = clickCount1 + " like";
        }else {
          display1.innerHTML = clickCount1 + " likes";
        }
         localStorage.setItem("clickCount1", clickCount1);
      });

  // Song 2 Like

  let button2 = document.getElementById("view-like2");
      let clickCount2 = 0;
      let display2 = document.getElementById("click-count2");
      if (localStorage.getItem("clickCount2")) {
        clickCount2 = parseInt(localStorage.getItem("clickCount2"));
     }
     button2.addEventListener("click", function() {
        clickCount2++;
        if (clickCount2 < 2){
          display2.innerHTML = clickCount2 + " like";
        }else {
          display2.innerHTML = clickCount2 + " likes";
        }
        localStorage.setItem("clickCount2", clickCount2);
     });

     // Song 3 Like

     let button3 = document.getElementById("view-like3");
      let clickCount3 = 0;
      let display3 = document.getElementById("click-count3");
      if (localStorage.getItem("clickCount3")) {
        clickCount3 = parseInt(localStorage.getItem("clickCount3"));
     }
     button3.addEventListener("click", function() {
      clickCount3++;
      if (clickCount3 < 2){
        display3.innerHTML = clickCount3 + " like";
      }else {
        display3.innerHTML = clickCount3 + " likes";
      }
      localStorage.setItem("clickCount3", clickCount3);
     });

     // Song 4 Like

     let button4 = document.getElementById("view-like4");
      let clickCount4 = 0;
      let display4 = document.getElementById("click-count4");
      if (localStorage.getItem("clickCount4")) {
        clickCount4 = parseInt(localStorage.getItem("clickCount4"));
     }
     button4.addEventListener("click", function() {
        clickCount4++;
        if (clickCount4 < 2){
          display4.innerHTML = clickCount4 + " like";
        }else {
          display4.innerHTML = clickCount4 + " likes";
        }
        localStorage.setItem("clickCount4", clickCount4);
     });

     //Song 5 Like

     let button5 = document.getElementById("view-like5");
     let clickCount5 = 0;
     let display5 = document.getElementById("click-count5");
     if (localStorage.getItem("clickCount5")) {
       clickCount5 = parseInt(localStorage.getItem("clickCount5"));
    }
    button5.addEventListener("click", function() {
       clickCount5++;
       if (clickCount5 < 2){
         display5.innerHTML = clickCount5 + " like";
       }else {
         display5.innerHTML = clickCount5 + " likes";
       }
       localStorage.setItem("clickCount5", clickCount5);
    });

     //Song 6 Like

     let button6 = document.getElementById("view-like6");
     let clickCount6 = 0;
     let display6 = document.getElementById("click-count6");
     if (localStorage.getItem("clickCount6")) {
       clickCount6 = parseInt(localStorage.getItem("clickCount6"));
    }
    button6.addEventListener("click", function() {
       clickCount6++;
       if (clickCount6 < 2){
         display6.innerHTML = clickCount6 + " like";
       }else {
         display6.innerHTML = clickCount6 + " likes";
       }
       localStorage.setItem("clickCount6", clickCount6);
    });

    //Song 7 Like

    let button7 = document.getElementById("view-like7");
    let clickCount7 = 0;
    let display7 = document.getElementById("click-count7");
    if (localStorage.getItem("clickCount7")) {
      clickCount7 = parseInt(localStorage.getItem("clickCount7"));
   }
   button7.addEventListener("click", function() {
      clickCount7++;
      if (clickCount7 < 2){
        display7.innerHTML = clickCount7 + " like";
      }else {
        display7.innerHTML = clickCount7 + " likes";
      }
      localStorage.setItem("clickCount7", clickCount7);
   });

      //Song 8 Like

      let button8 = document.getElementById("view-like8");
      let clickCount8 = 0;
      let display8 = document.getElementById("click-count8");
      if (localStorage.getItem("clickCount8")) {
        clickCount8 = parseInt(localStorage.getItem("clickCount8"));
     }
     button8.addEventListener("click", function() {
        clickCount8++;
        if (clickCount8 < 2){
          display8.innerHTML = clickCount8 + " like";
        }else {
          display8.innerHTML = clickCount8 + " likes";
        }
        localStorage.setItem("clickCount8", clickCount8);
     });

      //Song 9 Like

      let button9 = document.getElementById("view-like9");
      let clickCount9 = 0;
      let display9 = document.getElementById("click-count9");
      if (localStorage.getItem("clickCount9")) {
        clickCount9 = parseInt(localStorage.getItem("clickCount9"));
    }
    button9.addEventListener("click", function() {
        clickCount9++;
        if (clickCount9 < 2){
          display9.innerHTML = clickCount9 + " like";
        }else {
          display9.innerHTML = clickCount9 + " likes";
        }
        localStorage.setItem("clickCount9", clickCount9);
    });

      //Song 10 Like

      let button10 = document.getElementById("view-like10");
      let clickCount10 = 0;
      let display10 = document.getElementById("click-count10");
      if (localStorage.getItem("clickCount10")) {
        clickCount10 = parseInt(localStorage.getItem("clickCount10"));
    }
    button10.addEventListener("click", function() {
        clickCount10++;
        if (clickCount10 < 2){
          display10.innerHTML = clickCount10 + " like";
        }else {
          display10.innerHTML = clickCount10 + " likes";
        }
        localStorage.setItem("clickCount10", clickCount10);
    });




    // Local Storage for rating


    // Rating Sort
    // function ratingSort() {
    //         // Initial Ratings
    //     ratings.sort(function(a,b) {return a-b});
    //     var x = document.getElementById("num");
    //     x.innerHTML = ratings.sort();

    // }



// const items = [
//   { song: "Way Maker", author: "Sinach" },
//   { song: "Breakthrough", author: "Eddie James" },
//   { song: "Let the Heavens Open", author: "Christina D'Clario"},
//   { song: "See a Victory", author: "Elevation Worship"},
//   { song: "Famous For", author: "Tauren Wells"},
//   { song: "Glorious Day", author: "Kristian Stanfill"},
//   { song: "Throne Room", author: "Charity Gayle"},
//   { song: "He's Alive", author: "Eddie James"},
//   { song: "Ever Be", author: "Aaron Shust"},
//   { song: "Do It Again", author: "Elevation Worship"},
// ];



//document.querySelectorAll(".items").forEach(a=>a.style.display = "initial");


// document.getElementsByTagName('td')[0] = items.song[0];
// document.getElementsByTagName("TD")[1] = items.author[0];
//console.log(document.getElementsByTagName("TD")[0] = items.song[0]);

// function getItems() {
//   document.querySelector(`.${items} .items`).innerHTML = items.song[0];
// }



// // sort by value
// items.sort((a, b) => a.value - b.value);

// // sort by name
// items.sort((a, b) => {
//   const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// });