export const clickOutside = (node) => {
	const handleClick = (e) => {
		if (e.target.closest('.disable_clickoutside')) return;
		if (node && !node.contains(e.target) && !e.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('clickOutside', node));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
};
