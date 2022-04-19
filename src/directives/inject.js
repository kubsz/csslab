export const inject = (node, className = '.overlay') => {
	const target = document.querySelector(className);

	if (!target) return;

	target.insertAdjacentElement('afterbegin', node);

	return {
		destroy() {
			node.remove();
		}
	};
};
