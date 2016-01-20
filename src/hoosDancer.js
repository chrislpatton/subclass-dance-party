var hoosDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this,top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.$node = $('<span class="panda"></span>');
var settings = {
  'background-image' : "url('./images/hoos.gif')",
  'border' : 'none',
  'background-repeat': 'no-repeat',
  'z-index': 6,
  height : 300,
  width : 200,
};
  this.$node.css(settings);
  this.oldStep = this.step;
  this.step = function(){
  this.oldStep();
  //this.$node.fadeToggle();
    // this.top = top;
    // this.left = left;
    this.setPosition(this.top, this.left);
  };
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

  //return blinkyDancer;
};

hoosDancer.prototype = Object.create(makeDancer.prototype);
hoosDancer.prototype.constructor = hoosDancer;


