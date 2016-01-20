// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

 this.$node = $('<span class="animated bounceIn dancer"></span>');
 this.top = top;
 this.left = left;
 this.timeBetweenSteps = timeBetweenSteps;

 this.setPosition();
 this.step();

};

makeDancer.prototype.step = function(){ 
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: this.top,
    left: this.left
  };
      this.$node.css(styleSettings);
  };

