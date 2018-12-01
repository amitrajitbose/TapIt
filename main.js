var rightAns;
var score=0;
var levelCount=0;
var qCount=0;
var timer=0;
var timeLimit=10200;
function startA(){
    //qCount=0;
    showNumbersA();
    timer=Math.floor(30);
    document.getElementById('timeLeft').innerHTML=timer;
	countInterval=setInterval(function(){
		timer--;
		document.getElementById('timeLeft').innerHTML=timer;
	},1000);
    timeOut=setTimeout(function(){
        
          clearTimeout(timeOut);
          clearInterval(countInterval);
	      if(score<3){
            alert("Lose");
        }else{
            startB();
        }
	},30000);
}
function startB(){
    //qCount=0;
    showNumbersB();
    timer=Math.floor(45);
    document.getElementById('timeLeft').innerHTML=timer;
	countInterval=setInterval(function(){
		timer--;
		document.getElementById('timeLeft').innerHTML=timer;
	},1000);
    timeOut=setTimeout(function(){
        
          clearTimeout(timeOut);
          clearInterval(countInterval);
	      if(score<3){
            alert("Lose");
        }else{
            startB();
        }
	},45000);
}
function startC(){
    //qCount=0;
    showNumbersC();
    timer=Math.floor(60);
    document.getElementById('timeLeft').innerHTML=timer;
	countInterval=setInterval(function(){
		timer--;
		document.getElementById('timeLeft').innerHTML=timer;
	},1000);
    timeOut=setTimeout(function(){
        
          clearTimeout(timeOut);
          clearInterval(countInterval);
	      if(score<3){
            alert("Lose");
        }else{
            startB();
        }
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

currentLevel=0;

function showNumbersA(){
    currentLevel=0;
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
        var idd="ta"+i;
        document.getElementById(idd).innerHTML=numList[i];
    }
}

function showNumbersB(){
    currentLevel=1;
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
        var idd="tb"+i;
        document.getElementById(idd).innerHTML=numList[i];
    }
}

function showNumbersC(){
    currentLevel=2;
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
        var idd="tc"+i;
        document.getElementById(idd).innerHTML=numList[i];
    }
}

function checkAns(ansId){
    //alert("Level "+currentLevel+"   "+ansId);
    var ans=parseInt(ansId.slice(2,3));
    console.log(" ans:- "+ans);
    if(ans===rightAns){
        //alert('Right');
        alertStat(1);
        score+=1;
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
        score-=1;
    }
}

