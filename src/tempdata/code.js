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
		}
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
