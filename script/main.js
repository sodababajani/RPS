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



