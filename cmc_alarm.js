var beep = require('beepbeep');
var d0 = new Date();
var t0 = d0.getTime();


var sec =0;

function getYoutubeLikeToDisplay(millisec) {
        var seconds = (millisec/1000).toFixed(0);
       sec = seconds;
        var minutes = Math.floor(seconds / 60);
        var hours = "";
        if (minutes > 59) {
            hours = Math.floor(minutes / 60);
            hours = (hours >= 10) ? hours : "0" + hours;
            minutes = minutes - (hours * 60);
            minutes = (minutes >= 10) ? minutes : "0" + minutes;
        }
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : "0" + seconds;
        if (hours != "") {
            return hours + ":" + minutes + ":" + seconds;
        }
        return minutes + ":" + seconds;
    }

     function function_for_time_array (array_slot){
        var ticker = setInterval( function () {
        var d2 = new Date();
        var t2 = d2.getTime();
        var time = getYoutubeLikeToDisplay(t2-t0);
            aaa = time;
          return time;

        },500);
    }
function_for_time_array(0);

var time_sync = setInterval(function(){

	modulo_sec = sec % 10;

},100);


function MyFunction (MyVariable){
if(MyVariable==5){

  console.log("in MyFunction");
}


}


var time_display = setInterval(function(){
  //console.log(sec);
  console.log(modulo_sec);
  MyFunction(modulo_sec);
  beep(8);

},1000);
