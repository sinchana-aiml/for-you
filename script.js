let popInterval;
let currentAudio = null;

function randomColor() {
  return `hsl(${Math.random() * 360},100%,50%)`;
}

function createPop() {
  const pop = document.createElement("div");
  pop.classList.add("pop");

  const types = ["square", "circle", "heart", "star", "streak"];
  const type = types[Math.floor(Math.random() * types.length)];
  pop.classList.add(type);

  pop.style.left = Math.random() * 100 + "vw";
  pop.style.animationDuration = Math.random() * 3 + 2 + "s";
  pop.style.background = randomColor();

  document.body.appendChild(pop);

  setTimeout(() => pop.remove(), 6000);
}

function startContinuousPops() {
  popInterval = setInterval(() => {
    for (let i = 0; i < 8; i++) {
      createPop();
    }
  }, 300);
}

function playSong(num) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  currentAudio = document.getElementById(
    num === 1 ? "audio1" : "audio2"
  );

  currentAudio.play();

  currentAudio.onended = () => {
    document.getElementById("text").innerText = "That’s it 😊";
  };
}
