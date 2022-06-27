<script>
	import { scale } from 'svelte/transition';

	import axios from 'axios';

	import handWave from '@iconify/icons-mdi/hand-wave.js';
	import lockAlt from '@iconify/icons-bxs/lock-alt.js';
	import userIcon from '@iconify/icons-bxs/user.js';

	import ModalHeader from '../misc/ModalHeader.svelte';
	import Form from '../general/Form.svelte';
	import Modal from '../general/Modal.svelte';

	export let isOpen;

	let error = null;

	const formData = {
		username: {
			value: '',
			label: 'Username',
			placeholder: 'Enter username...',
			icon: userIcon,
			validation: { min: 3, max: 16 }
		},
		password: {
			value: '',
			label: 'Password',
			placeholder: 'Enter password...',
			icon: lockAlt,
			validation: { min: 8, max: 64 }
		}
	};

	const handleBlur = (blurredKey) => {
		// for (const key of Object.keys(formData)) {
		// 	const { validation, value, label } = formData[key];
		// 	if (blurredKey !== key && !value) continue;
		// 	const rules = [
		// 		{
		// 			message: `${label} is too short.`,
		// 			conditions: [value.length < validation.min]
		// 		},
		// 		{
		// 			message: `${label} is too long.`,
		// 			conditions: [value.length > validation.max]
		// 		}
		// 	];
		// 	const brokenRule = rules.find((x) => x.conditions.indexOf(true) > -1);
		// 	if (!brokenRule) {
		// 		formData[key] = { ...formData[key], error: false, errorMessage: null };
		// 		continue;
		// 	}
		// 	formData[key] = { ...formData[key], error: true, errorMessage: brokenRule.message };
		// }
	};

	const handleSubmit = async () => {
		const endpoint = '/api/auth/login';

		const {
			username: { value: identifier },
			password: { value: password }
		} = formData;

		try {
			const response = await axios.post(endpoint, { identifier, password });

			console.log(response.data);

			document.location.reload();
		} catch (err) {
			error = err.response.data.message;
		}
	};
</script>

{#if isOpen}
	<Modal>
		<ModalHeader
			icon={handWave}
			title="Welcome Back!"
			subtext="Great to see you again! Enter your credentials to continue to have full access to CSSLab"
		/>
		<Form {error} elements={formData} on:submit={handleSubmit} on:elementBlur={(e) => handleBlur(e.detail.key)} />
	</Modal>
{/if}
