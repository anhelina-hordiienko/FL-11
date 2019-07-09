const initialMaxRandomValue = 8;
const one = 1;
const roundRandomMultiplier = 4;
const maxNumberOfAttempts = 3;
let prizeForGuessAtAttemptForRound = [100, 50, 25];
const prizeRoundMultiplier = 2;
const startGame = confirm('Do you want to play a game?');
if (!startGame) {
  alert('You did not become a billionaire, but can.');
} else {
  let shouldContinuePlay = false;
  let prize = 0;
  let roundNumber = 0;
  do {
    const roundMaxRandomValue = initialMaxRandomValue + roundNumber * roundRandomMultiplier;
    // need to add 1 to include top value
    const randomValue = Math.floor(Math.random() * (roundMaxRandomValue + one));
    let isWin = false;

    for (let currentAttemptNumber = 0; currentAttemptNumber < maxNumberOfAttempts; currentAttemptNumber++) {
      const possiblePrizeAtRoundForAttempt = prizeForGuessAtAttemptForRound[currentAttemptNumber];
      const guessString = prompt(`
      Choose a roulette pocket number from 0 to ${roundMaxRandomValue}\n
      Attempts left: ${maxNumberOfAttempts - currentAttemptNumber}\n
      Total prize: ${prize}$\n
      Possible prize on current attempt: ${possiblePrizeAtRoundForAttempt}$
      `);
      const guessNumber = parseInt(guessString);

      if (guessNumber === randomValue) {
        isWin = true;
        prize += possiblePrizeAtRoundForAttempt;
        break;
      }
    }
    if (!isWin) {
      prize = 0;
      roundNumber = 0;
      prizeForGuessAtAttemptForRound = [100, 50, 25]
      alert(`Thank you for your participation. Your prize is: ${prize}$`)
      shouldContinuePlay = confirm('Do you want to play again?')
    } else {
      shouldContinuePlay = confirm(`Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`)
      // update data for new round
      if (shouldContinuePlay) {
        roundNumber++;
        for (let prizeAttemptNumber=0; prizeAttemptNumber<prizeForGuessAtAttemptForRound.length; prizeAttemptNumber++) {
          prizeForGuessAtAttemptForRound[prizeAttemptNumber] = prizeForGuessAtAttemptForRound[prizeAttemptNumber] * 2;
        }
      } else {
        alert(`Thank you for your participation. Your prize is: ${prize}$`)
        prize = 0;
        roundNumber = 0;
        prizeForGuessAtAttemptForRound = [100, 50, 25]
        shouldContinuePlay = confirm('Do you want to play again?')
      }
    }
  } while (shouldContinuePlay);
}
