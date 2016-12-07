$(document).ready(function() {
  // $("#start").click(setInterval(animateOutIn,4000))
  // window.setInterval(animateOutIn, 5000);


  $("#start").click(animateOutIn)
  $("#out").click(animateOut)
  $("#in").click(animateIn)



  window.setInterval(function() {
    $('#result').text(collision($('#cat'), $('#mouse')));
    // if (collision($('#cat'), $('#mouse'))) {
    //   alert("You won!");
    // }
  }, 200);


  $("#cat").draggable();


  var i = 0

  $(".block").mouseover(function(){
    i += 1;
    $("#score").html("score: -" + i);
  })

  var x = 0


  $("#right").click(function () {

    $("#cat").animate ({
      left: x += 30,
    }, 50);
  });

  $("#left").click(function () {
    $("#cat").animate ({
      left: x -= 30,
    }, 50);

    // var posCat = $("#cat").position();
    // var posMouse = $("#mouse").position();
    // $("#position").html("Position of the cat: " + posCat.left + " and position of mouse: " + posMouse.left);
   });





  function animateOut () {
    $(".block").animate({
      width: "400px",
      opacity: 0.5,
      marginLeft: "0.8in",
      fontSize: "3em",
      borderWidth: "10px"
    }, 1500 );
  };

  function animateIn (){
    $(".block").animate({
      width: "200",
      opacity: 1.0,
      marginLeft: "0in",
      fontSize: "100%",
      borderWidth: "3px"
    }, 1500 );
  };


  function animateOutIn (){
    $(".block").animate({
      width: "400px",
      opacity: 0.5,
      marginLeft: "0.8in",
      fontSize: "3em",
      borderWidth: "10px"
    }, 1500 );

   $(".block").animate({
      width: "200",
      opacity: 1.0,
      marginLeft: "0in",
      fontSize: "100%",
      borderWidth: "3px"
    }, 1500 );

   setTimeout(animateOutIn, 5000);
  };


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
