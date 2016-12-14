$(document).ready(function() {


  // START GAME AND ANIMATE BLOCKS

  $("#start").click(animateBlocks)

  function resizeRandom(object, min, max) {
    object.animate({
      left: Math.floor((Math.random() * (max-min)) + min) + 400+"px",
      top: Math.floor((Math.random() * (max-min)) + min)
    }, 1050);
  }

  function animateBlocks() {
    resizeRandom($("#yellow"), 10, 400);
    resizeRandom($("#red"), 10, 400);
    resizeRandom($("#blue"), 10, 400);
    resizeRandom($("#green"), 10, 400);
    setTimeout(animateBlocks, 1050);
  }

  // OTHER IDEAS TO ANIMATE BLOCKS

  // function animateBlocks (){
  //   $(".block").animate({
  //     width: "400px",
  //     opacity: 0.5,
  //     marginLeft: "0.8in",
  //     fontSize: "3em",
  //     borderWidth: "10px"
  //   }, 1500 );

  //  $(".block").animate({
  //     width: "200",
  //     opacity: 1.0,
  //     marginLeft: "0in",
  //     fontSize: "100%",
  //     borderWidth: "3px"
  //   }, 1500 );

  //  setTimeout(animateBlocks, 5000);
  // };


  //SCORE

    var i = 20

    window.setInterval(function() {

      var collisionGreen = collision($('#cat'), $('#green'));
      var collisionRed = collision($('#cat'), $('#red'));
      var collisionBlue = collision($('#cat'), $('#blue'));
      var collisionYellow = collision($('#cat'), $('#yellow'));

      // $('#result-green').text(collisionGreen);

      if (collisionGreen == true || collisionRed == true || collisionBlue == true || collisionYellow == true) {
        i -= 1;
        $("#score").html("score: " + i);
      }
  }, 200);



  // WIN? (DETECT COLLISION OF CAT WITH MOUSE)

  var won = false;

  window.setInterval(function() {
    var collisionStatus = collision($('#cat'), $('#mouse'));

    // $('#result').text(collisionStatus);
    if (collisionStatus == true) {
        // alert("You won! Your score is " + i);

      if (!won) alert ("You won! Your score is " + i);
      won = true;
      setTimeout(function() {
        location.reload();
      }, 200);
    };
  }, 200);




  // DETECT COLLISION

  function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
  }

});

// MAKE CAT MOVE

function keyPress(e){
    var keynum;

    if(window.event) { // IE
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera
      keynum = e.which;
    }

    if (keynum == 39) {
      $("#cat").animate({
        left: "+=10"
      }, 10);
    }

    if (keynum == 37) {
      $("#cat").animate({
        left: "-=10"
      }, 10);
    }

    if (keynum == 38) {
      $("#cat").animate({
        top: "-=10"
      }, 10);
    }

    if (keynum == 40) {
      $("#cat").animate({
        top: "+=10"
      }, 10);
    }
  }

  // OTHER IDEAS TO MAKE CAT MOVE

  //   var x = 0

  // $("#right").click(function () {

  //   $("#cat").animate ({
  //     left: x += 30
  //   }, 50);
  // });

  // $("#left").click(function () {
  //   $("#cat").animate ({
  //     left: x -= 30
  //   }, 50);

  //   // var posCat = $("#cat").position();
  //   // var posMouse = $("#mouse").position();
  //   // $("#position").html("Position of the cat: " + posCat.left + " and position of mouse: " + posMouse.left);
  //  });




  // $("#cat").draggable();