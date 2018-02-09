var c = document.getElementById("slate");
var context = c.getContext('2d');
var color = "green";
var r;
var s = 0;
var st = document.getElementById("stop");
context.strokestyle = color;
var requestID;
var x = 0;
var grow = true;

var clearC = function(){
  context.clearRect(0,0,500,500);
};

var stop = function(){
  window.cancelAnimationFrame(requestID);
};

var run = function(){
 stop();
 reset();
 var drawC = function(){
   clearC();
   context.beginPath();
   context.arc(250,250,x,0,2 * Math.PI);
   if (x == 250){
     grow = false;
   }
   if (x == 0){
     grow = true;
   }
   if (grow){
     x++;
   }
   else{
     x--;
   }
   context.fill();
  // context.stroke();
   requestID = window.requestAnimationFrame(  drawC );
   //console.log(requestID);
 };
 drawC();
};

var reset = function(){
  s = 0;
  x = 0;
};

//---------------------------------------------
var x1 = 250;
var y1 = 200;
var touchx = 1;
var touchy = 1;

var reset2 = function(){
   x1 = 250;
   y1 = 200;
   touchx = 1;
   touchy = 1;
};

var edgeTouchx = function(x1){
  if (x1 > 490){
    touchx = 0;
  }
  if (x1 < -5){
    touchx = 1;
  }
  //console.log(touchx);
};

var edgeTouchy = function(y1){
  if (y1 > 490){
    touchy = 0;
  }
  if (y1 < -5){
    touchy = 1;
  }
};


var run2 = function(){
  stop();
  reset2();
  var drawR = function(){
    clearC();
    edgeTouchy(y1);
    edgeTouchx(x1);
    if (touchx == 1){
      x1 = x1 + (Math.random() * 3);
    }
    if ( touchx == 0){
      x1 = x1 - (Math.random() * 3);
    }
    if (touchy == 1){
      y1 = y1 + (Math.random() * 2);
    }
    if (touchy == 0){
      y1 = y1 - (Math.random() * 2);
    }
    //console.log(x1);
    context.beginPath();
    context.fillRect(x1,y1,20,20);
    requestID = window.requestAnimationFrame(  drawR );
  };

  drawR();
};
