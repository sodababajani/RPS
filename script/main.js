const restart = document.querySelector('.submit');
const result = document.getElementById('result');
restart.addEventListener('click',()=>{
	restart.innerText = 'PLAY AGAIN';
	result.innerText = 'DRAW';
	game();
	restart.addEventListener('click', () => {
		window.location.reload();
	})
})

const game = () =>{
    let ai_score = 0;
    let youer_score = 0;
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissor = document.querySelector('.scissor');
    const user_action = [rock, paper, scissor];
    const computer_action = ['rock', 'paper', 'scissors'];
    const playGame = () =>{
        user_action.forEach(action => {
            action.addEventListener('click', () => {
                const actionList = action.classList;
                const actionClassName = actionList[0];
                const num = Math.floor(Math.random()*3);
                const computer_choice = computer_action[num];
                winner(actionClassName, computer_choice)
            })
        })
    }



