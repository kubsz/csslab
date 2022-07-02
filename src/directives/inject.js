export default (node, config) => {
	const target = document.querySelector(config.selector);

	if (!target) return;

	node.style.cssText = config.style || '';

	target.insertAdjacentElement('afterbegin', node);

	return {
		destroy() {
			node.remove();
		}
	};
};
