var cursor = document.getElementById('cursor');

document.onmousemove = function (e) {
    $("#cursor").css({
        left:  (e.pageX)-$("#cursor").width()/2,
        top:   (e.pageY)-$("#cursor").height()/2
     });
};

var text =["Quidquo.org originally had a spotlight feature.", "My wife didn't like it.", "She said it looked like a 1990s geocities site.", "So I put it here.", "Use it to find the dark money.", "But don't let the dirty politicians catch you!", "Click here to begin!"];
var counter = 0;
var elem = document.getElementById("text");
var inst = setInterval(change, 3500);

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
        var newq = makeNewPosition();
        var oldq = $('#dirtyPol').offset();
        var speed = calcSpeed([oldq.top, oldq.left], newq);
        
        $('#dirtyPol').animate({ top: newq[0], left: newq[1] }, speed, function(){
          movePols();        
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

 $(".title").click(function(){
    clearInterval(inst);
     $(".title").hide();
     movePols();
     moveMoney();
});