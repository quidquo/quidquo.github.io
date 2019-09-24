var score = 0;
var cursor = document.getElementById('cursor');
var gameOver=false;

document.onmousemove = function (e) {
    $("#cursor").css({
        top:   (e.pageY)-$("#cursor").height()/2,
        left:  (e.pageX)-$("#cursor").width()/2
     });
};

var text =["Quidquo.org originally had a spotlight feature.", "My wife didn't like it.", "She said it looked like a 1990s geocities site.", "So I put it here.", "Use it to find the dark money.", "But don't let the dirty politicians catch you!", "You are safe if they enter your spotlight,", "but not if they catch your cursor!","Click here to begin!"];
var counter = 0;
var elem = document.getElementById("text");
var inst = setInterval(change, 3500);
var clockMaker;

function timer() {
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
clockMaker = setInterval(setTime, 1000);


function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
}

function change() {
    elem.innerHTML = text[counter];
    counter++;
    if (counter >= text.length) {
      counter = 0;
       clearInterval(inst);
    }
  }

    function makeNewPosition(){
        var h = $(window).height() - 50;
        var w = $(window).width() - 50;
        
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
        
        return [nh,nw];    
    }
    
    function movePols(){
        var oldq = $('.dirtyPol').offset();
        var newq = makeNewPosition();
        var speed = calcSpeed([oldq.top, oldq.left], newq);
        
        $('.dirtyPol').animate({ top: newq[0], left: newq[1] }, speed, function(){
            if(gameOver===false){
                movePols();}      
        });
        
    };
    
    function calcSpeed(prev, next) {
        
        var x = Math.abs(prev[1] - next[1]);
        var y = Math.abs(prev[0] - next[0]);
        
        var greatest = x > y ? x : y;
        
        var speedModifier = 0.1;
    
        var speed = Math.ceil(greatest/speedModifier);
    
        return speed;
    
}

function moveMoney(){
    var newMon = makeNewPosition();
    $("#egg").css({
        top: newMon[0],
        left: newMon[1]
});
}

function addPol(){
    var newPol = document.createElement("DIV");
    newPol.setAttribute("class","dirtyPol");
    newPol.setAttribute("onmouseover","mouseOver()");
    document.body.appendChild(newPol);
        movePols();
}

$(".title").click(function(){
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    clearInterval(inst);
    score=0;
    document.getElementById("scoreboard").innerHTML = score;
     gameOver=false;
     $(".title").hide();
     $("#egg").show();
     $("#scoreboard").show();
     $("#timer").show();
     addPol();
     moveMoney();
     timer();
});

var delay=100, setTimeoutConst;
$("#egg").hover(function(){
    setTimeoutConst = setTimeout(function() {
        moveMoney();
        score += 1;
        document.getElementById("scoreboard").innerHTML = score;
        addPol();
      }, delay);
    }, function() {
      clearTimeout(setTimeoutConst);
  });

function mouseOver(){
    gameOver=true;
    $("#egg").hide();
    $('.dirtyPol').remove();
    clearInterval(clockMaker);
    document.getElementById("text").innerHTML = "You kept "+score+" dark monies out of the hands of diry politicians!";
    document.getElementById("click").innerHTML = "Click here to play again";
    $(".title").show();
};