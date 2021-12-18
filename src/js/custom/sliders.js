$(document).ready(() => {
	/*reviews*/
	const models = document.querySelector(".models__slider.swiper");
	const modelsBox = models.closest(".models__inner");
	const modelsPagination = modelsBox.querySelector(".models__pagination");
	console.log("-> ee", modelsPagination);
	const optionModels = getOptionModels(modelsPagination);
	sliderGen(models, optionModels);
});

const sliderGen = (block, option) => {
	new Swiper(block, option);
};

const getOptionModels = (paginationEl) => {
	return {
		slidesPerView: 1,
		initialSlide: 1,
		loop: true,
		centeredSlides: true,
		spaceBetween: 30,
		/*autoHeight: true,*/
		navigation: false,
		pagination: {
			el: paginationEl,
			type: "bullets",
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			994: {
				slidesPerView: 3,
			},
		},
	};
};
