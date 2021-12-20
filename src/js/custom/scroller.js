$(document).ready(() => {
	const $page = $(".page");

	$page.on("click", "[data-to]", (item) => {
		const $item = $(item.target.closest("[data-to]"));
		const targetClass = $item.attr("data-to");
		const target = $(`.${targetClass}`);
		$("html, body").animate(
			{ scrollTop: target.offset().top - 10 },
			"fast"
		);
	});
});
