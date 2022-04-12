const toggle_nav = () =>{
	const nav = document.querySelector('#nav');
	const burger = document.querySelector('.fa-bars');
	const main = document.querySelector("#main_wrapper");

	burger.addEventListener('click', ()=>{
		nav.classList.toggle("check");
	});

	main.addEventListener("click", ()=>{
		if(nav.classList.contains("check")){
			nav.classList.remove("check");
		}
	})
}

toggle_nav();