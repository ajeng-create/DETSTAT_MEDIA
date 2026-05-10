function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5eC6Ujr1y7q":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="DETSTAT BG.mp3";
audio.load();
audio.play();
audio.volume=0.2;
}

