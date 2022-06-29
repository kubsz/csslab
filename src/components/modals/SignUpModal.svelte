<script>
	import { scale } from 'svelte/transition';

	import axios from 'axios';

	import handWave from '@iconify/icons-mdi/hand-wave.js';
	import emailSolid from '@iconify/icons-clarity/email-solid.js';
	import lockAlt from '@iconify/icons-bxs/lock-alt.js';
	import userIcon from '@iconify/icons-bxs/user.js';

	import ModalHeader from '../misc/ModalHeader.svelte';
	import IconInput from '../general/IconInput.svelte';
	import Modal from '../general/Modal.svelte';
	import Button from '../general/Button.svelte';

	import { validateEmail } from '../../lib/utils';

	export let isOpen;
	export let formData = {
		username: {
			value: '',
			label: 'Username',
			placeholder: 'Enter username...',
			icon: userIcon,
			validation: { min: 3, max: 16 }
		},
		email: {
			value: '',
			label: 'Email',
			placeholder: 'Enter email address...',
			icon: emailSolid,
			validation: { min: 5, max: 128, type: 'email' }
		},
		password: {
			value: '',
			label: 'Password',
			placeholder: 'Enter password...',
			icon: lockAlt,
			validation: { min: 8, max: 64, type: 'password' }
		},
		password2: {
			value: '',
			label: 'Confirm Password',
			placeholder: 'Enter password confirmation...',
			icon: lockAlt,
			validation: { min: 8, max: 64, type: 'password' }
		}
	};

	let error = null;

	const handleBlur = (blurredKey) => {
		for (const key of Object.keys(formData)) {
			const { validation, value, label } = formData[key];

			const rules = [
				{
					message: `${label} is using incorrect format, please enter a valid email.`,
					conditions: [validation.type === 'email' && !validateEmail(value)]
				},
				{
					message: `${label} is too short.`,
					conditions: [value.length < validation.min]
				},
				{
					message: `${label} is too long.`,
					conditions: [value.length > validation.max]
				},
				{
					message: `Passwords are not the same`,
					conditions: [['password', 'password2'].indexOf(key) > -1 && formData.password.value !== formData.password2.value]
				}
			];

			if (blurredKey !== key && !value) continue;

			const brokenRule = rules.find((x) => x.conditions.indexOf(true) > -1);

			if (!brokenRule) {
				formData[key] = { ...formData[key], error: false, errorMessage: null };
				continue;
			}

			formData[key] = { ...formData[key], error: true, errorMessage: brokenRule.message };
		}
	};

	const handleSubmit = async () => {
		const endpoint = '/api/auth/register';

		const {
			username: { value: username },
			email: { value: email },
			password: { value: password }
		} = formData;

		try {
			const response = await axios.post(endpoint, { username, email, password });

			if (response.status !== 200) throw Error('error registering');

			window.location.reload();
		} catch (err) {
			console.log(err);
			error = err.message;
		}
	};
</script>

{#if isOpen}
	<Modal>
		<ModalHeader
			icon={handWave}
			title="Join CSSLab!"
			subtext="Sign up below to become a part of CSSLab today! Enter some brief credentials and we'll get you started"
		/>
		<form class="form" on:submit|preventDefault={handleSubmit}>
			{#each Object.keys(formData) as formKey}
				<div class="form-section f-100">
					<IconInput
						icon={userIcon}
						placeholder={formData[formKey].placeholder}
						label={formData[formKey].label}
						bindValue={formData[formKey].value}
						type={formData[formKey].validation.type}
						on:update={({ detail: { value } }) => (formData[formKey].value = value)}
						on:blur={() => handleBlur(formKey)}
						error={formData[formKey].error}
						errorMessage={formData[formKey].errorMessage}
						validation={formData[formKey].validation}
					/>
				</div>
			{/each}
			<div class="form-section f-100">
				<Button modifiers={['block', 'secondary']}>Submit</Button>
			</div>
		</form>
	</Modal>
{/if}

<style lang="scss">
	.form {
		padding: $gutter;
		display: flex;
		flex-flow: row wrap;
		gap: $gutter * 1.5;
		width: 100%;

		.form-section {
			&.f-100 {
				width: 100%;
			}
		}
	}
</style>
