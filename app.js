
    // Initial Ratings
    const ratings = {
    song1: 4.7,
    song2: 3.4,
    song3: 2.3,
    song4: 3.6,
    song5: 4.1,
    song6: 3.5,
    song7: 4.5,
    song8: 1.7,
    song9: 2.2, 
    song10: 3.3
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

    // Rating Sort
    // function ratingSort() {
    //         // Initial Ratings
    //     ratings.sort(function(a,b) {return a-b});
    //     var x = document.getElementById("num");
    //     x.innerHTML = ratings.sort();

    // }