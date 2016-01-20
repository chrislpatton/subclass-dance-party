$(document).ready(function(){
  window.dancers = [];
  window.lights = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position


    // var makeBlinkyDancer = function(top, left, timeBetweenSteps)
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });


  $(".addFadingDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name-two");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    // var makeBlinkyDancer = function(top, left, timeBetweenSteps)
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  // line up dancers
    $(".lineUpDancers").on("click", function(event){
      $('.dancer').css('left', '100px'); // Need this to sort to line up.
      _.each(window.dancers, function(dancer){
        if(dancer.__proto__.constructor === carltonDancer){
          dancer.top = 500;
        } else if (dancer.__proto__.constructor === hoosDancer) {
          dancer.top = 1200;
        } else if (dancer.__proto__.constructor === tomDancer) {
          dancer.top = 600;
        } else if (dancer.__proto__.constructor === pumpGirlDancer) {
          dancer.top = 1000;
        } else if (dancer.__proto__.constructor === bluesClueDancer){
          dancer.top = 850;
        } 
        // else {
        //   dancer.top = 200;
        // }
        dancer.setPosition(this.top,this.left);
      });

  });

  $(".addBouncyDancer").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name-three");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    // var makeBlinkyDancer = function(top, left, timeBetweenSteps)
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 2000);

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

    $(".addBouncyDancer").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name-three");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 3000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
    
  $(".addCarltonDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name-four");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  
 
 $(".addHoosDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name-five");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
 
 $(".addBluesCluesDancer").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name-seven");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  $(".addpumpGirlDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name-sixx");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  
  $(".addTomDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name-eight");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  
  $('.addLights').on('click', function(){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name-six");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var light = new dancerMakerFunction();

      window.lights.push(light);
    
    $('.ground').append(light.$node).show('slow');
  });

  

    $('body').on('click', '.dancer',function(){
      // Connect or interact with the nearest dot
      // Use difference between height and width to 
      // calculate the shortest hypotenuse.
      var selectedCoordinates = [$(this).position().top, $(this).position().left];
      var allLefts = _.pluck(window.dancers, 'left');
      var allTops = _.pluck(window.dancers, 'top');
      // all coordinates includes the selected coordinates itself, return the 2nd nearest besides the dot itself.
      var allCoordinates = _.zip(allTops,allLefts);
      // allCoordinates.push(selectedCoordinates); // push selected dot to last arr element.

      // find nearest element
      var allHypotenuse = _.map(allCoordinates, function(pair){
        return Math.sqrt(Math.pow(pair[0]-selectedCoordinates[0],2)+Math.pow(pair[1]-selectedCoordinates[1],2));
      });

      allCoordinates = _.zip(allCoordinates, allHypotenuse);
      allCoordinates = allCoordinates.sort(function(a, b){return a[1]-b[1]});
      //find current dot in window.dancer and its nearest and use setPosition to interact in object terms
      _.each(window.dancers, function(dancer){
        if(Math.abs(dancer.left - allCoordinates[0][0][1]) <5 ){ // finding the clicked dot object
          // if current x coordinate has been occupied, place dancer further to the right by a-thirds of width.
          if(_.contains(_.pluck(window.dancers, 'left')), (allCoordinates[1][0][1]+dancer.$node.width()/3)){
            dancer.left = allCoordinates[1][0][1]+(dancer.$node.width()/3)*2;
          } else {
            dancer.left = allCoordinates[1][0][1]+dancer.$node.width()/3;  // move it next to its nearest object
          }
          dancer.top = allCoordinates[1][0][0];
          dancer.setPosition(this.top,this.left);
        } else if (Math.abs(dancer.left - allCoordinates[1][0][1]) <5 ){ //do something to the nearest dot
        }
      });
     
    });

    $('body').on('mouseover', '.dancer',function(){
      $(this).addClass('open');
    });

     $('body').on('mouseout', '.dancer',function(){
      $(this).removeClass('open');
    });

    $('.removeDancer').on('click', function(){
      var arr = ['bounceOut', 'rollOut', 'rotateOutUpRight'];
      var randDancer = _.random(0,window.dancers.length-1);
      $('.dancer').removeAttr('class').addClass('animated bounceOut dancer');
      setTimeout(function(){
        $('.dancer').remove();
        $('.lights').remove();
        $('.lightsGreen').remove();
        $('.lightsWhite').remove();
    },800);
  });
    $('.playMusic').on('click', function(count){
      mySound.play();
    });
     $('.stopMusic').on('click', function(){
      mySound.mute();

    });
    // play sound
    var mySound = new buzz.sound("./lib/mj", { formats:['mp3']});
});
