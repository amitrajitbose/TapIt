var rightAns;
var score=0;
var levelCount=0;
var qCount=0;
var timer=30;
var timeLimit=10200;

function startGame(){
    document.getElementById('Two').style.display='block'; 
    document.getElementById('timeLeft').innerHTML=timer;
    startA();
}

function timeUp(){
    clearInterval(countInterval);
    var arenas=document.querySelectorAll('.arena');
      var aa;
      for(aa=0;aa<3;aa++){
          arenas[aa].style.display='none';
      }

    document.getElementById('reset').style.display='block';
    document.getElementById('timeUpText').style.display='block';
    document.getElementById('tapText').style.display='none';
    document.getElementById('toClick').style.display='none';
}

function startA(){
    //qCount=0;
    countInterval=setInterval(function(){
		timer--;
		document.getElementById('timeLeft').innerHTML=timer;
	},1000);
    showNumbersA();
    
    document.getElementById('score').innerHTML=score;
    timer=Math.floor(30);
    //document.getElementById('timeLeft').innerHTML=timer;
	
    timeOut=setTimeout(function(){
        //alert("Lose");
        timeUp();
	},30000);
    
}
function startB(){
    //qCount=0;
    timer=45;
    clearTimeout(timeOut);
    showNumbersB();
    timeOut=setTimeout(function(){
          //alert("Times Up");
            timeUp();
	},45000);
}
function startC(){
    //qCount=0;
    timer=60;
    showNumbersC();
    clearTimeout(timeOut);
    timeOut=setTimeout(function(){
        //alert("Lose");
        timeUp();
	},60000);
}
function alertStat(i){
    var dv=document.getElementById('toClick');
    if(i==1){
       // alert("Right");
    // document.getElementById('toClick').className="";
        dv.className="rightAns";
        setTimeout(function(){ dv.className=""; }, 510);
    }else{
        //alert("Wrong");
       dv.className="wrongAns";
        setTimeout(function(){ dv.className=""; }, 510);
        /*
        $("#toClick").animate({marginLeft: '0px'}, "medium");
        $("#toClick").animate({marginLeft: '20px'}, "medium");
        $("#toClick").animate({marginLeft: '-20px'}, "medium");
        $("#toClick").animate({marginLeft: '0px'}, "medium");
        */
    }
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var numa=[1,2,3,4,5,6,7,8,9];
var numb=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
var numc=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

levelCount=0;

function showNumbersA(){
    levelCount=0;
    qCount++;
    if(qCount==9){
        //alert("Level Up");
        var dv=document.getElementById('timeLeftOut');
        dv.className="levelUp";
        setTimeout(function(){ dv.className=""; }, 510);
        startB();
    }else{
      numList=shuffle(numa);
      rightAns=Math.floor(Math.random() * numList.length);
      document.getElementById('toClick').innerHTML=numList[rightAns];
      console.log(rightAns);
      var arenas=document.querySelectorAll('.arena');
      var aa;
      for(aa=0;aa<3;aa++){
          arenas[aa].style.display='none';
      }
      document.getElementById('gameArenaa').style.display='block';
      
      for(i in numList){
          var idd="ta0"+i;
          document.getElementById(idd).innerHTML=numList[i];
      }
    }
}

function showNumbersB(){
    levelCount=1;
    qCount++;
    if(qCount==25){
        var dv=document.getElementById('timeLeftOut');
        dv.className="levelUp";
        setTimeout(function(){ dv.className=""; }, 510);
        startC();
        //alert("LevelUp");
    }else{
      numList=shuffle(numb);
      rightAns=Math.floor(Math.random() * numList.length);
      document.getElementById('toClick').innerHTML=numList[rightAns];
      console.log(rightAns);
      var arenas=document.querySelectorAll('.arena');
      var aa;
      for(aa=0;aa<3;aa++){
          arenas[aa].style.display='none';
      }
      document.getElementById('gameArenab').style.display='block';
      
      for(i in numList){
          if(i<10)
            var idd="tb0"+i;
          else
              var idd="tb"+i;
          document.getElementById(idd).innerHTML=numList[i];
      }
    }
}

function showNumbersC(){
    levelCount=2;
    qCount++;
    if(qCount==50){
        endGame();
    }else{
      
      numList=shuffle(numc);
      rightAns=Math.floor(Math.random() * numList.length);
      document.getElementById('toClick').innerHTML=numList[rightAns];
      console.log(rightAns);
      var arenas=document.querySelectorAll('.arena');
      var aa;
      for(aa=0;aa<3;aa++){
          arenas[aa].style.display='none';
      }
      document.getElementById('gameArenac').style.display='block';
      
      for(i in numList){
          if(i<10)
            var idd="tc0"+i;
          else
              var idd="tc"+i;
         
          document.getElementById(idd).innerHTML=numList[i];
      }
    }
}

function endGame(){
    //alert("Game Ended.");
    clearInterval(countInterval);
    clearTimeout(timeOut);
    var arenas=document.querySelectorAll('.arena');
      var aa;
      for(aa=0;aa<3;aa++){
          arenas[aa].style.display='none';
      }

    document.getElementById('reset').style.display='block';
    document.getElementById('endGameText').style.display='block';
    document.getElementById('tapText').style.display='none';
    document.getElementById('toClick').style.display='none';
}

function checkAns(ansId){
    //alert("Level "+levelCount+"   "+ansId);
    var ans=parseInt(ansId.slice(2,4));
    console.log(" ans:- "+ans);
    if(ans===rightAns){
        //alert('Right');
        alertStat(1);
        score+=10;
        if(levelCount==0)
            showNumbersA();
        else if(levelCount==1)
            showNumbersB();
        else
            showNumbersC();
    }
    else{
        //alert('Wrong');
        alertStat(0);
        if(score>5)
            score-=5;
    }
    document.getElementById('score').innerHTML=score;
}

function reset(){
    score=0;
    levelCount=0;
    qCount=0;
    //alert("Home");
    timer=30;
    document.getElementById('reset').style.display='none';
    document.getElementById('timeUpText').style.display='none';
    document.getElementById('endGameText').style.display='none';
    document.getElementById('toClick').style.display='block';
    document.getElementById('tapText').style.display='block';
    document.getElementById('Two').style.display='none';
    document.getElementById('One').style.display='block';
}

