document.addEventListener("DOMContentLoaded", function () {

	const swiper = new Swiper('.swiper-container', {
		spaceBetween: 20,
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
});
