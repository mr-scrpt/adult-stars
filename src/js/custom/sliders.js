$(document).ready(() => {
	/*models*/
	const models = document.querySelector(".models__slider.swiper");
	const modelsBox = models.closest(".models__inner");
	const modelsPagination = modelsBox.querySelector(".models__pagination");
	const optionModels = getOptionModels(modelsPagination);
	sliderGen(models, optionModels);

	/* result */

	const result = document.querySelector(".result__slider-box.swiper");
	const resultBox = result.closest(".result__inner");
	const resultPagination = resultBox.querySelector(".result__pagination");
	const optionResult = getOptionResult(resultPagination);
	sliderGen(result, optionResult);
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

const getOptionResult = (paginationEl) => {
	return {
		slidesPerView: 1,
		/*initialSlide: 1,*/
		/*loop: true,*/
		/*centeredSlides: true,*/
		spaceBetween: 30,
		/*autoHeight: true,*/
		navigation: false,
		pagination: {
			el: paginationEl,
			type: "bullets",
			clickable: true,
		},
		breakpoints: {
			560: {
				slidesPerView: 2,
			},
			994: {
				slidesPerView: 3,
			},
		},
	};
};
