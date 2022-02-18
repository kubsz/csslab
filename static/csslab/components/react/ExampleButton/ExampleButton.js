import styles from './ExampleButton.module.scss';

const ExampleButton = ({ text }) => {
	return (
		<div class={styles.button} style={{ backgroundColor: color }}>
			{text}
		</div>
	);
};

export default ExampleButton;
