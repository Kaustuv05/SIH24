let cards = document.querySelectorAll('#card-inner');
let firstclick = false;
let counter = 0;
let cardPair = [];
let timerInterval;
isAnimating = false;

const pairs={
    'article21.png' : 'righttolife.png',
    'article370.png' : 'jk.png',
    'aug15.png' : 'independence.png',
    'cm.png' : 'stategov.png',
    'fon.png' : 'mahatmagandhi.png',
    'jan26.png' : 'republic.png',
    '6funrights.png' : 'funrights.png',
    '18yrs.png' : 'votingage.png',
    '552mem.png' : 'loksabhastrength.png',
    'foic.png' : 'ambedkar.png', 
    'presdur.png' : '5yrs.png',
    'statepol.png' : 'p4c.png'
};

cards.forEach((card)=>{
    card.state = 'unclicked';
});

shuffle();

for(let i=0;i<cards.length;i++){
    cards[i].addEventListener('click', ()=>{
        if(isAnimating || cards[i].state==='blocked')return;
        if(!firstclick)time();
        firstclick = true;

        if(cards[i].state == 'unclicked'){
            cards[i].style.transform = 'rotateY(180deg)';
            cards[i].state = 'clicked';
            counter++;
            cardPair.push(cards[i]);
            check();
        }

        else if(cards[i].state == 'clicked'){
            cards[i].style.transform = 'rotateY(0deg)';
            cards[i].state = 'unclicked';
            counter--;
            cardPair=[];
        }
    });
};

function check(){
    if(counter==2){
        isAnimating = true;
        let img1 = cardPair[0].querySelector('img').src.split('/').pop().toLowerCase();
        let img2 = cardPair[1].querySelector('img').src.split('/').pop().toLowerCase();

        if((pairs[img1] && pairs[img1]===img2) || (pairs[img2] && pairs[img2]===img1)){
            matched();
        }
        else{
            unmatched(cardPair[0], cardPair[1]);
        }
    }
}

function matched(){
    setTimeout(()=>{
    cardPair[0].state = 'blocked';
    cardPair[1].state = 'blocked';
    counter = 0;
    cardPair=[];
    let score = parseInt(document.querySelector("#score").innerHTML,10);
    score++;
    document.querySelector("#score").innerHTML = score;

    if(score===12){
        stopTimer();
        
    }
    isAnimating = false;
},500);

}
function stopTimer(){
    clearInterval(timerInterval)
}

function unmatched(x,y){
    setTimeout(()=>{
        x.style.transform = 'rotateY(0deg)';
        y.style.transform = 'rotateY(0deg)';
        x.state = 'unclicked';
        y.state = 'unclicked';
        counter=0;
        cardPair=[];
        isAnimating = false;
    }, 500);
    
}

function time(){
    let secs=0;
    let mins=0;
    let SS;
    let MM;
    timerInterval = setInterval(() => {
        secs++
        if(secs==60){secs=0; mins++;}

        SS = secs < 10 ? `0${secs}`:`${secs}`;
        MM = mins<10 ? `0${mins}`:`${mins}`;

        document.querySelector("#time").innerHTML = `${MM}:${SS}`;
    },1000);
}

function shuffle(){
    let images = document.querySelectorAll('img');
    let srcs = ['6funrights.png', '18yrs.png', '552mem.png', 'article21.png', 'article370.png', 'aug15.png', 'cm.png', 'fon.png', 'funrights.png', 'independence.png', 'jk.png', 'jan26.png', 'loksabhastrength.png', 'mahatmagandhi.png', 'republic.png', 'righttolife.png', 'stategov.png', 'votingage.png','5yrs.png', 'presdur.png', 'foic.png', 'ambedkar.png', 'statepol.png', 'p4c.png'];

    for(let i=srcs.length-1;i>=0;i--){
        let j =Math.floor(Math.random() * (i+1));
        let temp = srcs[i];
        srcs[i] = srcs[j];
        srcs[j] = temp;
     }
     for(let i=0;i<images.length;i++){
        images[i].src = srcs[i];
     }
}