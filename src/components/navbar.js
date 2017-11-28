// BURGER

	const burger = document.querySelector('.burger')
	burger.addEventListener('click', () => {
		if(burger.classList.contains('burger')){
			burger.classList.remove('burger')
			burger.classList.add('burger-is-open')
		}else{
			burger.classList.remove('burger-is-open')
			burger.classList.add('burger')
		}
	})