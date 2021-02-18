function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Zeq4jZojpD":
        Script1();
        break;
  }
}

function Script1()
{
  function zeros(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var fin="Done";
var player = GetPlayer();
var count = player.GetVar("Timer_duration");
var minutes, seconds, timer, totalTime;
var counter = setInterval(timer, 1000);

function timer() {
    count = count - 1;
    minutes = zeros(Math.floor(count / 60));
    seconds = zeros(count % 60);
    if (count == 0){
        player.SetVar("TImer_complete",fin);
}
    if (count < 0) {
        clearInterval(counter);
        return;
    }
    totalTime = minutes + ':' + seconds;
    player.SetVar("Timer",totalTime);
}

}

