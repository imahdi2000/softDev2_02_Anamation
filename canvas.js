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
  c.addEventListener("click",reset);
};

var run = function(){
 stop();
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
   context.stroke();
   requestID = window.requestAnimationFrame(  drawC );
   console.log(requestID);
 };
 drawC();

};

var reset = function(){
  s = 0;
  x = 0;
  run();
}


c.addEventListener("click",run);
//st.addEventListener("click",stop);

 //----------------------------------
