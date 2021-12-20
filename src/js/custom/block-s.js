$(document).ready(() => {
	/* Настройки */
	const mobileMenu = $(".page__menu-mobile");
	const controllerMenu = $(".menu-main__controller");
	const link = $(".menu-mobile__item-link");
	const closeMenu = $(".menu-mobile__closebox");
	const page = $(".page");

	controllerMenu.on("click", () => {
		if (!mobileMenu.hasClass("page__menu-mobile_open")) {
			mobileMenu.addClass("page__menu-mobile_open");
			mobileMenu.removeClass("page__menu-mobile_close");
			page.addClass("page_menu_open");
		}
	});

	closeMenu.on("click", () => {
		if (mobileMenu.hasClass("page__menu-mobile_open")) {
			mobileMenu.removeClass("page__menu-mobile_open");
			mobileMenu.addClass("page__menu-mobile_close");
			page.removeClass("page_menu_open");
			page.addClass("page_menu_close");
		}
	});

	link.on("click", () => {
		if (mobileMenu.hasClass("page__menu-mobile_open")) {
			mobileMenu.removeClass("page__menu-mobile_open");
			mobileMenu.addClass("page__menu-mobile_close");
			page.removeClass("page_menu_open");
			page.addClass("page_menu_close");
		}
	});
});
