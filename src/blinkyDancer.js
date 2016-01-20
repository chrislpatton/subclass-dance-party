var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this,top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.$node = $('<span class="default dancer"></span>');


  this.oldStep = this.step;
    this.step = function(){
    this.oldStep();
    this.$node.toggle();
    
  };
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

var makeFadingDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this,top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = this.step;

  this.$node = $('<span class="animated shake extra dancer"></span>');
  this.setPosition(this.top, this.left);

  this.step = function(){
    this.oldStep();
    this.$node.fadeToggle();
  };
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.

};
makeFadingDancer.prototype = Object.create(makeDancer.prototype);
makeFadingDancer.prototype.constructor = makeFadingDancer;


var makeBouncyDancer = function(top, left, timeBetweenSteps){
    makeDancer.call(this,top, left, timeBetweenSteps);


    this.oldStep = this.step;
    this.$node = $('<span class="animated bounce bouncy dancer "></span>');
    this.setPosition(this.top, this.left);

    this.step = function(){
    this.oldStep();
    this.$node.fadeToggle();
  };
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;


var makeLights = function(){
  this.$node = $('<span class="lights animated infinite swing"></span>');

  var lightSource = this.$node; //cache this.$node context for inner function's access.
  setInterval(function(){
    if(lightSource.hasClass('lights')){
        lightSource.addClass('lightsWhite').removeClass('lights');            
    }else if(lightSource.hasClass('lightsWhite')){
        lightSource.addClass('lightsGreen').removeClass('lightsWhite');
    } else {
      lightSource.addClass('lights').removeClass('lightsGreen');
    }
  }
  ,1000);
};


makeLights.prototype.constructor = makeLights;

