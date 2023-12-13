

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

  // Init product
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
    // Links
   function songChords(link) {
    window.open(link.value);
   }


    // save to local storage
    




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