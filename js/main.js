function toggle() {
	const dropdownItem = document.querySelector('.nav__nav-item--dropdown');
	const navDropdown = document.querySelector('.nav__dropdown');

	dropdownItem.addEventListener('click', () => {
		if(navDropdown.style.display == 'block')
			navDropdown.style.display = 'none';
		else
			navDropdown.style.display = 'block';
	});
}