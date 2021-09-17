url = "https://queue.square-9.com/data/support-page.json";
//let myAudio = new Audio(chrome.runtime.getURL("coin.wav"));
var coin = new Audio("coin.wav");
let lastCount = 0;
let newCount = 0;

setInterval(function () {
    fetch(url)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        newCount = data.currentQueueCountiOS;
        console.log(data.currentQueueCountiOS);
        if (newCount > lastCount) {
            coin.play();
            console.log('New case in queue!')
        }
        lastCount = newCount;
      });
  }, 5000);