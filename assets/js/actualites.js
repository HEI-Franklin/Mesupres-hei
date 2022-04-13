/*----------slide_1----------*/
function slide_1(){
	const slide_img = document.getElementsByClassName("image_slider");
	const slide_text = document.getElementsByClassName("text_slider");
	const preview_btn = document.querySelector(".preview_btn");
	const next_btn = document.querySelector(".next_btn");

	let index_img = 0;
	let index_text = 0;
	const img_length = slide_img.length;
	const text_length = slide_text.length;


	function delete_active_img(){
		for(let i=0; i<img_length; i++){
			slide_img[i].classList.remove("active_img");
		}
	}

	function delete_active_text(){
		for(let i=0; i<text_length; i++){
			slide_text[i].classList.remove("active_text");
		}
	}

	next_btn.addEventListener('click', () => {
		index_img++;
		index_text++;

		if(index_img >= img_length){
			index_img = 0;
		}

		if(index_text >= text_length){
			index_text = 0;
		}

		delete_active_img();
		delete_active_text();
		slide_img[index_img].classList.add("active_img");
		slide_text[index_text].classList.add("active_text");
	})

	preview_btn.addEventListener('click', () => {
		index_img--;
		index_text--;

		if(index_img < 0){
			index_img = img_length - 1;
		}

		if(index_text < 0){
			index_text = text_length - 1;
		}

		delete_active_img();
		delete_active_text();
		slide_img[index_img].classList.add("active_img");
		slide_text[index_text].classList.add("active_text");
	})


	setInterval( () => {
		index_img++;
		index_text++;

		if(index_img >= img_length){
			index_img = 0;
		}

		if(index_text >= text_length){
			index_text = 0;
		}

		delete_active_img();
		delete_active_text();
		slide_img[index_img].classList.add("active_img");
		slide_text[index_text].classList.add("active_text");
	}, 8000);
}


slide_1();