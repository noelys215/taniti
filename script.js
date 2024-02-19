document.addEventListener('DOMContentLoaded', () => {
	const toggles = document.querySelectorAll('.faq-toggle');

	toggles.forEach((toggle) => {
		toggle.addEventListener('click', () => {
			const answer = toggle.nextElementSibling;
			const icon = toggle.querySelector('.faq-icon');
			answer.classList.toggle('active');

			// Change the icon from '+' to '-' and vice versa
			if (answer.classList.contains('active')) {
				icon.textContent = '-';
			} else {
				icon.textContent = '+';
			}
		});
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.getElementById('hamburger');
	const navbar = document.getElementById('navbar');
	const close = document.getElementById('close');

	const toggleNavbar = () => {
		const isNavbarOpen = navbar.style.left === '0px';
		navbar.style.left = isNavbarOpen ? '-100%' : '0px';
	};

	hamburger.addEventListener('click', toggleNavbar);
	close.addEventListener('click', toggleNavbar);
});

function toggleModal(show) {
	var modal = document.getElementById('myModal');
	modal.style.display = show ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
	const submitButton = document.getElementById('submitAlert');
	const form = document.querySelector('.trip-form');

	submitButton.addEventListener('click', (e) => {
		e.preventDefault();
		alert('Request Submitted Successfully!');
		form.reset();
	});
});
