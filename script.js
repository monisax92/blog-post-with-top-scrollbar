const btnScrollTop = document.querySelector('.scroll-top');
let root = document.documentElement;

const handleScroll = () => {
	let scrollY = window.scrollY;
	let bodyHeight = document.body.offsetHeight; //or document.body.getBoundingClientRect().height
	let viewHeight = window.innerHeight;

	let scrollPercent = (scrollY / (bodyHeight - viewHeight)) * 100;

	root.style.setProperty('--scroll-width', `${scrollPercent}%`);

	if (scrollPercent >= 80) {
		btnScrollTop.classList.add('active-btn');
	} else {
		btnScrollTop.classList.remove('active-btn');
	}
};

const scrollUp = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth'
	});
};

window.addEventListener('scroll', handleScroll);
btnScrollTop.addEventListener('click', scrollUp);
