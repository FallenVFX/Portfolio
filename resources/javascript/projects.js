const sections = document.getElementsByClassName('section-title');

for (let i = 0; i < sections.length; i++) {
	sections[i].addEventListener('click', function () {
		this.classList.toggle('active');
		let content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
			sections[i].getElementsByTagName('i')[0].style.transform = 'rotate(0deg)';
		} else {
			content.style.maxHeight = content.scrollHeight + 'px';
			sections[i].getElementsByTagName('i')[0].style.transform =
				'rotate(90deg)';
		}
	});
}
