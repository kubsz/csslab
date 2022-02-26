<script>
	import { scale } from 'svelte/transition';
	import handWave from '@iconify/icons-mdi/hand-wave.js';
	import emailAdd from '@iconify/icons-mdi/email-add.js';
	import lockAdd from '@iconify/icons-mdi/lock-add';

	import ModalHeader from '../misc/ModalHeader.svelte';
	import IconInput from '../general/IconInput.svelte';
	import Modal from '../general/Modal.svelte';
	import Button from '../general/Button.svelte';

	export let isOpen;
	export let test;
</script>

{#if isOpen}
	<Modal>
		<ModalHeader
			icon={handWave}
			title="Hello Again!"
			subtext="Welcome back to CSSLab. Enter your credentials to continue to have full access to CSSLab"
		/>
		<form class="form">
			<div class="form-section f-100">
				<IconInput icon={emailAdd} placeholder="Enter your username..." label="Username" on:update={(e) => console.log(e)} />
			</div>
			<div class="form-section f-100">
				<IconInput icon={lockAdd} placeholder="Enter your password..." label="Password" on:update={(e) => console.log(e)} />
			</div>
			<div class="form-section f-100">
				<Button modifiers={['block', 'secondary']}>Login</Button>
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
