//Age in days

//get actual number of days in a month (30/31/28 etc)

function getBirthYear(){
    var birthyear = prompt("Enter your birth year: ");
    return birthyear;
}
function daysInMonth(month,year){
    return new Date(year,month,0).getDate();
}

function daysInYear(year){
     var days = 0 ;
     for(var month = 0; month < 12; month++){
         days += daysInMonth(month,year);
     }
     return days;
}

function ageInDays(){
    const thisYear = new Date().getFullYear();

    var agedays = (thisYear - getBirthYear()) * daysInYear(thisYear);
    var h1 = document.createElement('h1');
    
    var textAnswer = document.createTextNode('You are ' + agedays + ' days old');
  
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    
    document.getElementById('flex-box-result').appendChild(h1);


    //console.log(agedays);

}
function age(){
    
    const thisYear = new Date().getFullYear();
    var age =  (thisYear - getBirthYear());
    var h1 = document.createElement('h1');

    var textAnswer1 = document.createTextNode('You are ' + age + ' years old');

    h1.setAttribute('id','age');
    h1.appendChild(textAnswer1);

    document.getElementById('flex-box-result-age').appendChild(h1);

}

function resetIt(){
    document.getElementById('ageInDays').remove();
    document.getElementById('age').remove();

}
//Cat Memes
function generateMeme(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-meme-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}
//RPS
function rpsGame(yourChoice){
//console.log(yourChoice);
{  var humanChoice,botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsTnt());
    //console.log('ComputerChoice',botChoice);

    result = decideWinner(humanChoice,botChoice);
    //console.log(result);

    message = finalMessage(result);
   // console.log(message);

    rpsFrontEnd(yourChoice.id,botChoice,message);
}

function randToRpsTnt(){
    return Math.floor(Math.random()*3);
}
}
function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,ComputerChoice){
    var rpsDatabase={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    
    };

    var yourScore = rpsDatabase[yourChoice][ComputerChoice];
    var computerScore = rpsDatabase[ComputerChoice][yourChoice]
    
    return [yourScore,computerScore];
}
function finalMessage([yourScore,computerScore]){
    if(yourScore===1){
        return{'message' : 'You Won','color':'green'};

    }else if(yourScore===0){
        return{'message' : 'You Lost','color':'red'};

    }else{
        return{'message' : 'You Tied','color':'yellow'};

    }
}
function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var ImageDatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv= document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML=" <img src='" + ImageDatabase[humanImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML=" <h1 style='color:"+finalMessage['color']+"; font-size:60px;padding:30px;'>"+finalMessage['message']+ "</h1>"

    botDiv.innerHTML=" <img src='" + ImageDatabase[botImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}


function darkmode(){
    var elem = document.body;
    elem.classList.toggle("dark-mode");
    
}

function promptName(){
	var name = prompt("Enter a string to reverse");
	return name;
}

//Reversing a string
//Using built in methods
function mstringRev() {
	let name = promptName();

	/*var initialString = name.split("");
	var splitArray = initialString.reverse();
	var joinToArr =splitArray.join("");

	OR*/

 	var newString = name.split("").reverse().join("");

     var h4 = document.createElement('h4');
     var textAnswer = document.createTextNode('Using Methods: ' + newString );

     h4.setAttribute('id','mstringRev');
     h4.appendChild(textAnswer);
     document.getElementById('methodRevAns').appendChild(h4);


}

//Using loop
function lstringRev(){

	var name = promptName();
	var newString = " ";

	for(var i = name.length - 1; i >= 0 ; i--){
		newString += name[i];
	}

	 var h4 = document.createElement('h4');
     var textAnswer = document.createTextNode('Using Loops: ' + newString );
     h4.setAttribute('id','lstringRev');
     h4.appendChild(textAnswer);
     document.getElementById('LoopRevAns').appendChild(h4);

}

//Using recursion
function rstringRev(name){
	
	if(name === ""){
		return "";
	}
	else{
    
	return rstringRev(name.substr(1)) + name[0];

	}

}

function printRecusionstr(){

var name = prompt("Enter a string to reverse");

ans =  rstringRev(name);

var h4 = document.createElement('h4');
var textAnswer = document.createTextNode('Using Recursion: ' + ans );

h4.setAttribute('id','rstringRev');
h4.appendChild(textAnswer);
document.getElementById('RecRevAns').appendChild(h4);
}

function rpslzGame(mychoice){

    var humanChoice,humanChoiceNum;

    humanChoice = mychoice.id;

    botChoiceNum = Math.floor(Math.random()*5);

    const hchoice = new Map([
       ["rock2",0] ,
       ["paper2",1],
       ["scissors2",2],
       ["Lizzard2",3],
       ["spock2",4]
    ])

    const bchoice = new Map([
        [0,"rock2"] ,
        [1,"paper2"],
        [2,"scissors2"],
        [3,"Lizzard2"],
        [4,"spock2"]
     ])

    humanChoiceNum = hchoice.get(humanChoice);
    botChoiceImg = bchoice.get(botChoiceNum);
    //console.log(humanChoiceNum);
    //console.log(botChoice);

    //case tie
    if(humanChoiceNum == botChoiceNum){
       // console.log("tied");
        
        message = "tied";
        finalMessage2 ={'message' : 'You Tied','color':'yellow'};

    }
    //case human wins
    if ((humanChoiceNum == 0 && botChoiceNum == 2)||(humanChoiceNum == 0 && botChoiceNum == 3)
    ||(humanChoiceNum == 1 && botChoiceNum == 0)||(humanChoiceNum == 1 && botChoiceNum == 4)
    ||(humanChoiceNum == 2 && botChoiceNum == 1)||(humanChoiceNum == 2 && botChoiceNum == 3)
    ||(humanChoiceNum == 3 && botChoiceNum == 4)||(humanChoiceNum == 3 && botChoiceNum == 1)
    ||(humanChoiceNum == 4 && botChoiceNum == 2)||(humanChoiceNum == 4 && botChoiceNum == 0)){
        //console.log("win")
        
        message = "win";
        finalMessage2 ={'message' : 'You Win','color':'green'};

    }
    //case bot wins
    if ((botChoiceNum == 0 && humanChoiceNum == 2)||(botChoiceNum == 0 && humanChoiceNum == 3)
    ||(botChoiceNum == 1 && humanChoiceNum == 0)||(botChoiceNum == 1 && humanChoiceNum == 4)
    ||(botChoiceNum == 2 && humanChoiceNum == 1)||(botChoiceNum == 2 && humanChoiceNum == 3)
    ||(botChoiceNum == 3 && humanChoiceNum == 4)||(botChoiceNum == 3 && humanChoiceNum == 1)
    ||(botChoiceNum == 4 && humanChoiceNum == 2)||(botChoiceNum == 4 && humanChoiceNum == 0)){
        //console.log("lose")
        
        message="lose";
        finalMessage2 ={'message' : 'You Lose','color':'red'};
    }
    

    rpsFrontEnd2(mychoice.id,botChoiceImg,finalMessage2);

}

function rpsFrontEnd2(humanImageChoice,botImageChoice,finalMessage2){
    var ImageDatabase={
        'rock2':document.getElementById('rock2').src,
        'paper2':document.getElementById('paper2').src,
        'scissors2':document.getElementById('scissors2').src,
        'Lizzard2':document.getElementById('Lizzard2').src,
        'spock2':document.getElementById('spock2').src
    }

    document.getElementById('rock2').remove();
    document.getElementById('paper2').remove();
    document.getElementById('scissors2').remove();
    document.getElementById('Lizzard2').remove();
    document.getElementById('spock2').remove();

    var humanDiv = document.createElement('div');
    var botDiv= document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML=" <img src='" + ImageDatabase[humanImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
    messageDiv.innerHTML=" <h1 style='color:"+finalMessage2['color']+"; font-size:60px;padding:30px;'>"+finalMessage2['message']+ "</h1>"

    botDiv.innerHTML=" <img src='" + ImageDatabase[botImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('flex-box-rpsls-div').appendChild(humanDiv);
    document.getElementById('flex-box-rpsls-div').appendChild(messageDiv);
    document.getElementById('flex-box-rpsls-div').appendChild(botDiv);

}

//change the color of all buttons
var all_buttons = document.getElementsByTagName("button");
//console.log(all_buttons);
all_buttons = Array.from(HTMLAllCollection);

var copyAllButtons=[];

for(let j = 0 ; j < all_buttons.length ; j++){

    copyAllButtons.push(all_buttons[i]);
}
console.log(copyAllButtons);
/*I want to view the copy of the array but it turns out to be empty*/
