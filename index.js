

var readlinesync = require('readline-sync');


var chalk = require('chalk');


var userName = readlinesync.question("What is your name ?");


console.log(chalk.green('Welcome ')+chalk.yellowBright(userName)+'!');



console.log('');
console.log('Welcome to '+chalk.bold.bgRed('Marvel')+chalk.bold.red.bgWhite('Studios') + ' Quiz!');

console.log('');
console.log('');
console.log('');



console.log(chalk.whiteBright.bgYellow('You need to score at least 12 to save the universe!'));

console.log('');




console.log('*************'+chalk.bold.green.bgBlack('Wakanda Forever!')+'*****************');








var score = 0; 

 // console.log(chalk.bgYellow('Your Final Score is',score));

function incrementIfCorrect(userAns,correctAns)
{
 // console.log(userAns,correctAns);

var answer_lowercase = userAns.toLowerCase();
if(answer_lowercase == correctAns.answer.toLowerCase() || answer_lowercase == correctAns.answer2.toLowerCase() ||
answer_lowercase == correctAns.answer3.toLowerCase())
{

score++;
console.log(chalk.green('Correct!'));
}
else
{
  console.log(chalk.red('You got that wrong! Correct Answer is '+correctAns.answer));
}
console.log('');
console.log('Your current score is ',score);



}



// var answerOne = readlinesync.question(questionOne.question);

// incrementIfCorrect(questionOne,answerOne);


// console.log(score);



var questions  = [
questionOne  = {

  question:'Where is Wakanda located ?',
  answer:'Africa',
    answer2:'null',
  answer3:'null'
  
}
,
questionTwo = {
  question:'WHAT IS THE NAME OF THE MARVEL COMIC LEGEND WHO HAS MADE AN APPEARANCE IN ALL THE FILMS OF THE MARVEL CINEMATIC UNIVERSE?',
  answer:'Stan lee',
   answer2:'null',
  answer3:'null'
},
questionThree = {
  question:'How many total infinity stones are there in MCU?(Please enter in text format.eg:if your answer is 2 then enter two)',
  answer:'five',
   answer2:'null',
  answer3:'null'

}
,
questionFour  = {

  question:'Whom did Thanos sacrifice in order to get the possesion of soul stone ?',
  answer:'Gamora',
   answer2:'null',
  answer3:'null'
}
,
questionFive = {
  question:'Who besides Thor and cap has lifted the Mjolnir hammer in the movie',
  answer:'Vision',
   answer2:'odin',
  answer3:'null'
},
questionSix= {
  question:"Who sacrificed himself at the end of Avenger's Endgame to save the universe ?",
  answer:'Tony Stark',
  answer2:'Iron Man',
  answer3:'Ironman'

},
questionSeven = {

  question:"In the POST-CREDITS scene of Marvel's THE AVENGERS, What type of Restaurant are the Avengers shown eating ?",
  answer:'Shawarma',
   answer2:'shawarma joint',
  answer3:'null'
}
,
questionEight = {
  question:"Which actor played Hulk's role before Mark Ruffalo ?",
  answer:'Edward Norton',
   answer2:'edward',
  answer3:'null'
},
questionNine = {
  question:'Which color infinity Stone can be used to manipulate time ?',
  answer:'Green',
   answer2:'null',
  answer3:'null'

},
questionTen = {
  question:'Who is the love interest of Vision ?',
  answer:'Wanda',
   answer2:'Scarlet WItch',
  answer3:'wanda maximoff'

}
,
questionEleven = {
  question:'What is the real name of Captain America ?',
  answer:'Steve Rogers',
   answer2:'null',
  answer3:'null'

}

,
questionTwelve = {
  question:'What is the real name of QuickSilver ?',
  answer:'Peter',
   answer2:'Peter maximoff',
  answer3:'peitro'

}

,
questionThirteen = {
  question:'Who played the character of Thanos is Avengers Endgame ?',
  answer:'Josh Brolin',
   answer2:'Josh',
  answer3:'null'

}

,
questionFourteen = {
  question:'Whom did Dr.Strange bargain in his movie ?',
  answer:'Dormmamu',
   answer2:'null',
  answer3:'null'

}

,
questionFifteen = {
  question:'Who is the president of MCU ?',
  answer:'Kevin Feige',
   answer2:'Kevin',
  answer3:'feige'

}




];




for(var i=0;i<questions.length;i++)
{

  var userAns = readlinesync.question(questions[i].question);
console.log('');
  incrementIfCorrect(userAns,questions[i]);
console.log('***********************************');

}

console.log(''
)

console.log(''
)

console.log(''
)

console.log(''
)
  console.log(chalk.bgYellow('Your Final Score is',score));



if(score <= 5)
{

  console.log(chalk.red.bgWhite('The Universe is over!!'));
}
else if(score == 6 || score <=11)
{


 console.log(chalk.red.bgWhite('You were close to saving the universe! Better luck next time!'));

}
if(score >= 12)
{

console.log('Congrats! You just saved the univese!')

}


// console.log(chalk.bold.rgb(10, 100, 200)('Hello ') + chalk.green('Saish!'));




