const sectors = [
  { color: "#FFBC03", text: "#333333", label: "Parliament" },
  { color: "#FF5A10", text: "#333333", label: "President" },
  { color: "#FFBC03", text: "#333333", label: "Council of Ministers" },
  { color: "#FF5A10", text: "#333333", label: "Supreme Court" },
  { color: "#FFBC03", text: "#333333", label: "High Courts" },
  { color: "#FF5A10", text: "#333333", label: "Subordinate Courts" },
  { color: "#FFBC03", text: "#333333", label: "Comptroller and Auditor-General" },
  { color: "#FF5A10", text: "#333333", label: "Election Commission" },
];

const questions = {
  "Parliament": "The Indian Parliament is one of the largest legislative bodies in the world.",
  "President": "The President of India is also the supreme commander of the Indian Armed Forces.",
  "Council of Ministers": "The Prime Minister of India leads the Council of Ministers.",
  "Supreme Court": "The Supreme Court of India is known as the 'Guardian of the Constitution.'",
  "High Courts": "India's High Courts were established in the 19th century, with the first being in Calcutta, Bombay, and Madras.",
  "Subordinate Courts": "Subordinate Courts include District Courts, which are the primary courts at the district level.",
  "Comptroller and Auditor-General": "The Comptroller and Auditor-General ensures that public funds are used efficiently and for the intended purpose.",
  "Election Commission": "The Election Commission of India was established in 1950 and is responsible for conducting free and fair elections."
};

const events = {
  listeners: {},
  addListener: function (eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
  },
  fire: function (eventName, ...args) {
    if (this.listeners[eventName]) {
      for (let fn of this.listeners[eventName]) {
        fn(...args);
      }
    }
  },
};

const rand = (m, M) => Math.random() * (M - m) + m;
const tot = sectors.length;
const spinEl = document.querySelector("#spin");
const ctx = document.querySelector("#wheel").getContext("2d");
const dia = ctx.canvas.width;
const rad = dia / 2;
const PI = Math.PI;
const TAU = 2 * PI;
const arc = TAU / sectors.length;
const friction = 0.991;
let angVel = 0;
let ang = 0;
let spinButtonClicked = false;

const getIndex = () => Math.floor(tot - (ang / TAU) * tot) % tot;

function drawSector(sector, i) {
  const ang = arc * i;
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = sector.color;
  ctx.moveTo(rad, rad);
  ctx.arc(rad, rad, rad, ang, ang + arc);
  ctx.lineTo(rad, rad);
  ctx.fill();
  ctx.translate(rad, rad);
  ctx.rotate(ang + arc / 2);
  ctx.textAlign = "right";
  ctx.fillStyle = sector.text;
  ctx.font = "bold 20px 'Lato', sans-serif";
  ctx.fillText(sector.label, rad - 10, 10);
  ctx.restore();
}

function rotate() {
  const sector = sectors[getIndex()];
  ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
  spinEl.textContent = !angVel ? "SPIN" : sector.label;
  spinEl.style.background = sector.color;
  spinEl.style.color = sector.text;
}

function frame() {
  if (!angVel && spinButtonClicked) {
    const finalSector = sectors[getIndex()];
    events.fire("spinEnd", finalSector);
    spinButtonClicked = false;
    return;
  }
  angVel *= friction;
  if (angVel < 0.002) angVel = 0;
  ang += angVel;
  ang %= TAU;
  rotate();
}

function engine() {
  frame();
  requestAnimationFrame(engine);
}

function init() {
  sectors.forEach(drawSector);
  rotate();
  engine();
  spinEl.addEventListener("click", () => {
    if (!angVel) angVel = rand(0.25, 0.45);
    spinButtonClicked = true;
  });
}

init();

events.addListener("spinEnd", (sector) => {
  console.log(`You landed on: ${sector.label}`);
  const question = questions[sector.label];
  if (question) {
    setTimeout(() => {
      alert(`Fact about ${sector.label}:\n\n${question}`);
    }, 1000);
  }
});