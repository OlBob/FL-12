let number,
  askAgain,
  prize = {
    min: 25,
    mid: 50,
    max: 100
  },
  tPrize = 0,
  numOfTries = 3,
  range = {
    min: 0,
    max: 8
  },
  coef = 2,
  count = 0,
  guess = true,
  random = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
//atep1
let askToPlay = confirm('Do you want to play a game?');
if (!askToPlay) {
  alert('You did not become a billionaire, but can.');
} else {
  while (count < numOfTries) {
    number = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    guess = prompt(`
      Choose a roulette pocket number from ${range.min} to ${range.max}
      Attempts left: ${numOfTries - count}
      Total prize: ${tPrize}
      Possible prize on current attempt: ${prize.max}
    `);
    if (isNaN(Number.parseInt(guess)) || !isFinite(guess)){
      count = ++numOfTries;
      break;
    }
    if (Number(guess) === number){
      if (count === 0){
        tPrize += prize.max;
      } else if (count === 1){
        tPrize += prize.mid;
      } else if (count === coef){
        tPrize += prize.min;
      } 
      askAgain = confirm(`Congratulation, you won! Your prize is: ${tPrize}$. Do you want to continue?`);
      if (!askAgain){
        count = numOfTries;
        alert(`Thank you for your participation. Your prize is: ${tPrize}$`);
        askAgain = confirm(`Do you want to play again?`)
        !askAgain ? alert(`Thank you for your participation. Your prize is: ${tPrize}$`) : count = 0;
      } else {
          prize.min *= coef;
          prize.mid *= coef;
          prize.max *= coef;
          range.max += 4;
          count = 0;
      }
    } else {
      count++;
      if (count === numOfTries){
        alert(`Thank you for your participation. Your prize is: ${tPrize}$`);
        askAgain = confirm(`Do you want to play again?`)
        !askAgain ? alert(`Thank you for your participation. Your prize is: ${tPrize}$`) : count = 0;
      }
    } 
  } 
}