let tog = 1;
let rollingSound = new Audio("rpg-dice-rolling-95182.mp3");
let winSound = new Audio("winharpsichord-39642.mp3");

let p1sum = 0;
let p2sum = 0;
let totalTime = 5 * 60; // 5 minutes in seconds
let timerInterval;

function startTimer() {
  timerInterval = setInterval(function () {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById(
      "timer"
    ).innerText = `Time Left: ${minutes}:${seconds}`;

    if (totalTime <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
    totalTime--;
  }, 1000);
}

function endGame() {
  alert("Time's up! Game over.");
  // Code to end the game, reset the board, or whatever is needed
}


const facts = {
  2: "The Preamble of the Indian Constitution starts with 'We, the people of India...'",
  3: "The Indian Constitution was adopted on 26th November 1949.",
  5: "The Constitution of India is the longest written constitution of any country in the world.",
  6: "India’s Constitution contains 470 Articles divided into 25 Parts.",
  7: "Dr. B.R. Ambedkar is known as the chief architect of the Indian Constitution.",
  9: "The concept of Fundamental Rights was inspired by the U.S. Bill of Rights.",
  11: "The Directive Principles of State Policy are borrowed from the Irish Constitution.",
  12: "India is a Sovereign, Socialist, Secular, and Democratic Republic.",
  13: "The 42nd Amendment added 'Socialist' and 'Secular' to the Preamble.",
  15: "The President of India is the ceremonial head of state.",
  16: "The Indian Parliament is bicameral, consisting of Lok Sabha and Rajya Sabha.",
  17: "The Right to Equality is one of the six fundamental rights.",
  19: "The Governor is the head of a state in India.",
  20: "The Supreme Court is the highest judicial authority in India.",
  22: "The Constitution originally had 8 Schedules; now it has 12.",
  23: "The 73rd Amendment gave constitutional status to Panchayati Raj institutions.",
  25: "The Right to Freedom includes the freedom of speech and expression.",
  27: "The Indian Constitution allows for Single Citizenship.",
  29: "The Fundamental Duties were added by the 42nd Amendment.",
  31: "The 86th Amendment Act made education a fundamental right for children aged 6-14.",
  33: "The Vice President of India is also the Chairperson of the Rajya Sabha.",
  34: "The Election Commission of India is responsible for conducting elections.",
  35: "India has a federal system with a unitary bias.",
  37: "The Finance Commission is constituted to allocate financial resources between the Centre and states.",
  39: "The National Human Rights Commission was established in 1993.",
  40: "The 52nd Amendment introduced the Anti-Defection Law.",
  41: "The Right to Property was removed as a Fundamental Right by the 44th Amendment.",
  43: "The Council of Ministers, headed by the Prime Minister, aids and advises the President.",
  44: "The Indian Constitution can be amended by the Parliament under Article 368.",
  46: "The Attorney General of India is the chief legal advisor to the government.",
  47: "The Right to Constitutional Remedies allows citizens to move court for enforcement of rights.",
  49: "The Comptroller and Auditor General audits the accounts of the government.",
  51: "India follows a Parliamentary system of government.",
  52: "Emergency provisions in the Constitution allow for the suspension of Fundamental Rights.",
  53: "The Indian Constitution incorporates the separation of powers doctrine.",
  54: "The National Commission for SCs and STs safeguards their rights.",
  55: "Fundamental Rights are enforceable by the courts.",
  57: "The Election Commission is a permanent constitutional body.",
  59: "The Constitution provides for both union and state legislatures.",
  60: "Amendments to the Indian Constitution require a special majority.",
  61: "The 61st Amendment reduced the voting age from 21 to 18.",
  63: "The Chief Justice of India is appointed by the President.",
  65: "The Union Public Service Commission conducts civil services exams.",
  66: "Directive Principles aim to create social and economic conditions for citizen welfare.",
  68: "The 92nd Amendment added Bodo, Dogri, Maithili, and Santhali languages to the 8th Schedule.",
  69: "Delhi is given special status under Article 239AA.",
  70: "Fundamental Rights are guaranteed to all citizens of India.",
  72: "The Governor’s role includes overseeing state administration.",
  73: "The Indian Constitution grants the power to pardon by the President.",
  74: "The 74th Amendment gave constitutional status to municipalities.",
  75: "The Constitution establishes the rule of law in India.",
  77: "The Constitution guarantees protection from discrimination.",
};

function displayFact(tileNumber) {
  if (facts[tileNumber]) {
    document.getElementById("fact").innerText = facts[tileNumber];
  } else {
    document.getElementById("fact").innerText = "No fact for this tile.";
  }
}

function play(player, psum, correction, num) {
  let sum;
  if (psum == "p1sum") {
    p1sum = p1sum + num;

    if (p1sum > 100) {
      p1sum = p1sum - num;
      // sum = p1sum
    }

    if (p1sum == 1) {
      p1sum = 38;
    }
    if (p1sum == 4) {
      p1sum = 14;
    }
    if (p1sum == 8) {
      p1sum = 30;
    }
    if (p1sum == 21) {
      p1sum = 42;
    }
    if (p1sum == 28) {
      p1sum = 76;
    }
    if (p1sum == 32) {
      p1sum = 10;
    }
    if (p1sum == 36) {
      p1sum = 6;
    }
    if (p1sum == 48) {
      p1sum = 26;
    }
    if (p1sum == 50) {
      p1sum = 67;
    }
    if (p1sum == 62) {
      p1sum = 18;
    }
    if (p1sum == 71) {
      p1sum = 92;
    }
    if (p1sum == 80) {
      p1sum = 99;
    }
    if (p1sum == 88) {
      p1sum = 24;
    }
    if (p1sum == 95) {
      p1sum = 56;
    }
    if (p1sum == 97) {
      p1sum = 78;
    }

      sum = p1sum;
        displayFact(sum);
  }

  if (psum == "p2sum") {
    p2sum = p2sum + num;

    if (p2sum > 100) {
      p2sum = p2sum - num;
      // sum = p1sum
    }

    if (p2sum == 1) {
      p2sum = 38;
    }
    if (p2sum == 4) {
      p2sum = 14;
    }
    if (p2sum == 8) {
      p2sum = 30;
    }
    if (p2sum == 21) {
      p2sum = 42;
    }
    if (p2sum == 28) {
      p2sum = 76;
    }
    if (p2sum == 32) {
      p2sum = 10;
    }
    if (p2sum == 36) {
      p2sum = 6;
    }
    if (p2sum == 48) {
      p2sum = 26;
    }
    if (p2sum == 50) {
      p2sum = 67;
    }
    if (p2sum == 62) {
      p2sum = 18;
    }
    if (p2sum == 71) {
      p2sum = 92;
    }
    if (p2sum == 80) {
      p2sum = 99;
    }
    if (p2sum == 88) {
      p2sum = 24;
    }
    if (p2sum == 95) {
      p2sum = 56;
    }
    if (p2sum == 97) {
      p2sum = 78;
    }

      sum = p2sum;
      displayFact(sum);
  }

  document.getElementById(`${player}`).style.transition = `linear all .5s`;

  if (sum < 10) {
    document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`;
    document.getElementById(`${player}`).style.top = `${
      -0 * 62 - correction
    }px`;
  } else if (sum == 100) {
    winSound.play();
    if (player == "p1") {
      alert("Red Won !!");
    } else if (player == "p2") {
      alert("Yellow Won !!");
    }
    location.reload();
  } else {
    numarr = Array.from(String(sum));
    n1 = eval(numarr.shift());
    n2 = eval(numarr.pop());
    // console.log(n1, n2)

    if (n1 % 2 != 0) {
      if (n2 == 0) {
        document.getElementById(`${player}`).style.left = `${9 * 62}px`;
        document.getElementById(`${player}`).style.top = `${
          (-n1 + 1) * 62 - correction
        }px`;
      } else {
        document.getElementById(`${player}`).style.left = `${
          (9 - (n2 - 1)) * 62
        }px`;
        document.getElementById(`${player}`).style.top = `${
          -n1 * 62 - correction
        }px`;
      }
    } else if (n1 % 2 == 0) {
      if (n2 == 0) {
        document.getElementById(`${player}`).style.left = `${0 * 62}px`;
        document.getElementById(`${player}`).style.top = `${
          (-n1 + 1) * 62 - correction
        }px`;
      } else {
        document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`;
        document.getElementById(`${player}`).style.top = `${
          -n1 * 62 - correction
        }px`;
      }
    }
  }
}

document.getElementById("diceBtn").addEventListener("click", function () {
  rollingSound.play();
  num = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  document.getElementById("dice").innerText = num;

  if (tog % 2 != 0) {
    document.getElementById("tog").innerText = "Yellow's Turn : ";
    play("p1", "p1sum", 0, num);
  } else if (tog % 2 == 0) {
    document.getElementById("tog").innerText = "Red's Turn : ";

    play("p2", "p2sum", 55, num);
  }

  tog = tog + 1;
});
