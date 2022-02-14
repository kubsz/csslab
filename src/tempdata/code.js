import javascriptFill from '@iconify/icons-akar-icons/javascript-fill.js';
import svelteIcon from '@iconify/icons-cib/svelte.js';
import vueFill from '@iconify/icons-akar-icons/vue-fill.js';
import reactFill from '@iconify/icons-akar-icons/react-fill.js';

export default {
	svelte: {
		language: {
			name: 'svelte',
			color: [247, 60, 0],
			icon: svelteIcon
		},
		files: [
			{
				name: 'index.svelte',
				language: 'javascript',
				content: `<scripte>
	import Button from './Button.svelte';
</scripte>

<Button>Hello World</Button>`
			},
			{
				name: 'Button.svelte',
				language: 'javascript',
				content: `<scripte>
	export let href;
	export let modifiers = [];

	let classes = ['btn', ...modifiers].join(' ');
</scripte>

{#if href}
	<a {href} class={classes}> <slot /></a>
{:else}
	<button class={classes}> <slot /></button>
{/if}

<style lang="scss">
	.btn {
		background-color: $col-dark-2;
		color: $col-light-3;
		padding: 1em 1.5em;
		font-size: 1.4rem;
		font-weight: 500;
		border-radius: $radius;

		cursor: pointer;
		transition: all 0.15s ease;

		&:hover {
			background-color: $col-dark-3;
			color: $col-light-2;
		}

		&.primary {
			background-color: $col-primary;
			color: $col-dark-2;
			font-weight: 700;
			&:hover {
				background-color: lighten($col-primary, 5%);
				color: $col-dark-1;
			}
		}

		&.secondary {
			background-color: $col-secondary;
			color: $col-light-1;
			&:hover {
				background-color: lighten($col-secondary, 5%);
				color: $col-light-1;
			}
		}

		&.large {
			font-size: 1.6rem;
		}
	}
</style>`
			}
		]
	},
	react: {
		language: {
			name: 'react',
			color: [110, 208, 241],
			icon: reactFill
		},
		files: [
			{
				language: 'javascript',
				name: 'index.js',
				content: `const Form = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Button>Submit</Button>
    </form>
  );
}`
			},
			{
				language: 'javascript',
				name: 'Button.js',
				content: `import Button from './Button.js';
const Form = ({children}) => <button type="submit">{children}</button>`
			}
		]
	},
	vue: {
		language: {
			name: 'Vue',
			color: [63, 185, 132],
			icon: vueFill
		},
		files: [
			{
				language: 'html',
				name: 'index.html',
				content: `<div id="app">
	<my-button>normal</my-button>
	<my-button type="danger" @click="toggleLable">{{label}}</my-button>
	<my-button type="success">success</my-button>
	<my-button type="info">info</my-button>
	<my-button :disabled="true">disabled</my-button>
	<button @click="callback">lalala</button>
</div>
`
			},
			{
				language: 'scss',
				name: 'style.scss',
				content: `.btn {
	background-color:'red';
}`
			},
			{
				language: 'javascript',
				name: 'Button.vue',
				content: `Vue.component('my-button', {
  template: '\
    <button class="normal"\
      :class="type"\
      :disabled="disabled"\
      @click="callback($event)"\
      >\
        <slot></slot>\
    </button>\
  ',
  props: {
    type: String,
    disabled: Boolean
  },
  methods: {
    callback: function(e) {
      this.$emit('click', e);
    }
  }
});
var vm = new Vue({
  el: '#app',
  data: {
    label: 'danger'
  },
  mounted: function() {
    // this.changeLabel();
  },
  methods: {
    toggleLable: function(e) {
      console.log(e.target.tagName);
      if (this.label == 'danger') {
        this.label = "danger-changed";
      } else {
        this.label = "danger";
      }
      //console.log(this.label);
    },
    callback: function() {
      alert('llalalala');
    }
  }
});`
			}
		]
	},
	javascript: {
		language: {
			syntax: 'javascript',
			name: 'react',
			color: [110, 208, 241],
			icon: reactFill
		},
		files: [
			{
				name: 'index.html',
				content: `<button class="btn">Hello World</button>

<scripte>
	const node = document.querySelector('.btn');
	document.addEventListener('click', () => {
		console.log("button clicked");
	})
</scripte>
`
			},
			{
				name: 'style.scss',
				content: `.btn {
	background-color:'red';
}`
			}
		]
	}
};
