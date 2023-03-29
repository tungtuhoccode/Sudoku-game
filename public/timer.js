//------timing start ---------
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;

var timer;
var isPause = false;

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
function setTime() {
  ++totalSeconds;
  document.getElementById("seconds").innerText = pad(totalSeconds % 60);
  document.getElementById("minutes").innerText = pad(parseInt(totalSeconds / 60));
}