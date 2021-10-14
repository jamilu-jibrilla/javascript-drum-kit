function animationEnd(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

function playClickSound(e) {
  let getAttr = e.target.parentElement.getAttribute("data-key");
  let musicAudio = document.querySelector(`audio[data-key="${getAttr}"]`);
  musicAudio.currentTime = 0;
  musicAudio.play();
  const currentKey = document.querySelector(`div[data-key="${getAttr}"]`);
  currentKey.classList.add("playing");
}

function playKeyboardSound(e) {
  const musicAudio = document.querySelector(`audio[data-key="${e.which}"]`);
  if (!musicAudio) return;
  musicAudio.currentTime = 0;
  musicAudio.play();
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => {
    const dataAttribute = key.getAttribute("data-key");
    if (dataAttribute == e.which) {
      key.classList.add("playing");
    }
  });
}

const keys = Array.from(document.querySelectorAll(".key"));

keys.forEach((key) =>
  key.firstElementChild.addEventListener("click", playClickSound)
);
keys.forEach((key) => key.addEventListener("transitionend", animationEnd));
window.addEventListener("keypress", playKeyboardSound);
