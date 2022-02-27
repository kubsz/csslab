<script>
	import { scale } from 'svelte/transition';
	import handWave from '@iconify/icons-mdi/hand-wave.js';
	import emailSolid from '@iconify/icons-clarity/email-solid.js';
	import lockAlt from '@iconify/icons-bxs/lock-alt.js';
	import userIcon from '@iconify/icons-bxs/user.js';

	import ModalHeader from '../misc/ModalHeader.svelte';
	import IconInput from '../general/IconInput.svelte';
	import Modal from '../general/Modal.svelte';
	import Button from '../general/Button.svelte';

	export let isOpen;
</script>

{#if isOpen}
	<Modal>
		<ModalHeader
			icon={handWave}
			title="Join CSSLab!"
			subtext="Sign up below to become a part of CSSLab today! Enter some brief credentials and we'll get you started"
		/>
		<form class="form">
			<div class="form-section f-100">
				<IconInput icon={userIcon} placeholder="Enter your username..." label="Username" on:update={(e) => console.log(e)} />
			</div>
			<div class="form-section f-100">
				<IconInput icon={emailSolid} placeholder="Enter your email address..." label="Email Address" on:update={(e) => console.log(e)} />
			</div>
			<div class="form-section f-100">
				<IconInput icon={lockAlt} placeholder="Enter your password..." label="Password" on:update={(e) => console.log(e)} />
			</div>
			<div class="form-section f-100">
				<IconInput icon={lockAlt} placeholder="Confirm your password..." label="Confirm Password" on:update={(e) => console.log(e)} />
			</div>
			<div class="form-section f-100">
				<Button modifiers={['block', 'secondary']}>Submit</Button>
			</div>
		</form>
	</Modal>
{/if}

<style lang="scss">
	.form {
		padding: $gutter $gutter $gutter $gutter;
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
