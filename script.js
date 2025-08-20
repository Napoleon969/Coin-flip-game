  let score = {
                wins: 0,
                losses: 0
            }

        score = JSON.parse(localStorage.getItem('score'));
        if (!score){
            score = {
                wins: 0,
                losses: 0
            }
        }
        let scoreText = document.querySelector('.score');
        scoreText.innerHTML = `Wins: ${score.wins} ,Losses: ${score.losses}`
        let coin = document.querySelector('.coin');
        let coinDiv = document.querySelector('#flip-space')
        const btnDiv = document.querySelector('.buttons-div');
        let resultText = document.querySelector('.result');
        let retryBtn = document.querySelector('#retry');
function choose(button) {
            let gottenValue = Math.random()
            let compChoice =''
            let guess = button.id;
            let result = ''
            
            btnDiv.style.animation = 'buttonsLeave 0.7s 1 linear forwards';

            //How computer generates its move
            gottenValue < 1/2 ? compChoice = 'heads': compChoice = 'tails';
            //how computer compares it's move with user's guess
            if (compChoice != guess)  {
                result = 'YOU LOSE'
                score.losses++
            } else {
                result = 'YOU WIN'
                score.wins++
            };
            //This part shows the flip-space and flips the coin
           setTimeout(() => {
            coin.style.animation = `flip${compChoice} 5s 1 ease-out forwards`;
            coinDiv.style.display = 'inline-block';

            }, 1500);

            //This part shows the result
            setTimeout(() => {
                resultText.innerHTML = `${result}!`
                resultText.style.animation = 'show-result 0.5s 1 linear forwards';
            },6500);

            //This part brings out the retry button
            setTimeout(() => {
                retryBtn.style.animation = 'show-retry 0.5s 1 linear forwards';
            }, 8000);
            //This part delays the score
            setTimeout(() => {
                scoreText.innerHTML = `Wins: ${score.wins} ,Losses: ${score.losses}`
            }, 8200);

            localStorage.setItem('score', JSON.stringify(score));
            


}
     // the reset function
      function reset(){
          score={wins: 0, losses: 0};
          scoreText.innerHTML = `Wins: ${score.wins} ,Losses: ${score.losses}`
          console.log(`Game has been reset!`)
           coin.style.animation = `coinDip 1s 1 linear forwards`;
        resultText.style.animation = 'remove-result 0.5s 1 linear forwards';
        // resultText.innerHTML = '';
        btnDiv.style.animation = 'buttonsEnter 1s 1 linear forwards';
        setTimeout(() => {
             coinDiv.style.display = 'none';
             coin.style.animation = `none`;
        }, 1000);
        retryBtn.style.animation = 'none';
      }

     function retry()  {
        coin.style.animation = `coinDip 1s 1 linear forwards`;
        resultText.style.animation = 'remove-result 0.5s 1 linear forwards';
        // resultText.innerHTML = '';
        btnDiv.style.animation = 'buttonsEnter 1s 1 linear forwards';
        setTimeout(() => {
             coinDiv.style.display = 'none';
             coin.style.animation = `none`;
        }, 1000);
        // resultText.style.animation = 'none';
        retryBtn.style.animation = 'remove-retry 0.5s 1 linear forwards';
        
      }
   //fixing this part of the code, take two
let scoreBtn = document.querySelector('.score-btn');

// function revealScore() {
//      if (scoreText.style.left === '-500px') {
//         scoreText.style.animation = 'showScore 1s 1 linear forwards';
//     } else {
//         scoreText.style.animation = 'removeScore 1s 1 linear forwards';
//     }
// }
