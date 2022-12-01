import { S as SvelteComponent, i as init, s as safe_not_equal, V as assign, k as svg_element, W as set_svg_attributes, a as insert, X as get_spread_update, n as noop, d as detach, Y as exclude_internal_props, q as element, r as space, f as create_component, Z as text, l as attr, v as toggle_class, o as append, m as mount_component, C as action_destroyer, b as transition_in, t as transition_out, j as destroy_component, x as run_all, y as component_subscribe, M as theme } from './index.js';

/* ~icons/mdi/twitter.svelte generated by Svelte v3.53.1 */

function create_fragment$5(ctx) {
	let svg;
	let raw_value = `<path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"/>` + "";

	let svg_levels = [
		{ viewBox: "0 0 24 24" },
		{ width: "1.2em" },
		{ height: "1.2em" },
		/*$$props*/ ctx[0]
	];

	let svg_data = {};

	for (let i = 0; i < svg_levels.length; i += 1) {
		svg_data = assign(svg_data, svg_levels[i]);
	}

	return {
		c() {
			svg = svg_element("svg");
			set_svg_attributes(svg, svg_data);
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			svg.innerHTML = raw_value;
		},
		p(ctx, [dirty]) {
			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
				{ viewBox: "0 0 24 24" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
			]));
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(svg);
		}
	};
}

function instance$5($$self, $$props, $$invalidate) {
	$$self.$$set = $$new_props => {
		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
	};

	$$props = exclude_internal_props($$props);
	return [$$props];
}

class Twitter extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});
	}
}

/* ~icons/mdi/grease-pencil.svelte generated by Svelte v3.53.1 */

function create_fragment$4(ctx) {
	let svg;
	let raw_value = `<path fill="currentColor" d="M18.62 1.5c-.51 0-1.02.19-1.41.59l-6.46 6.46l4.2 4.19l6.46-6.45c.79-.79.79-2.05 0-2.83l-1.37-1.37c-.39-.4-.9-.59-1.42-.59m-8.82 8l-6.57 6.57l.7.7c-.53.47-1.04 1.01-1.55 1.52c-.78.79-.78 2.05 0 2.83c.78.78 2.04.78 2.83 0c.51-.49 1.04-1.04 1.52-1.54l.7.69L14 13.7"/>` + "";

	let svg_levels = [
		{ viewBox: "0 0 24 24" },
		{ width: "1.2em" },
		{ height: "1.2em" },
		/*$$props*/ ctx[0]
	];

	let svg_data = {};

	for (let i = 0; i < svg_levels.length; i += 1) {
		svg_data = assign(svg_data, svg_levels[i]);
	}

	return {
		c() {
			svg = svg_element("svg");
			set_svg_attributes(svg, svg_data);
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			svg.innerHTML = raw_value;
		},
		p(ctx, [dirty]) {
			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
				{ viewBox: "0 0 24 24" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
			]));
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(svg);
		}
	};
}

function instance$4($$self, $$props, $$invalidate) {
	$$self.$$set = $$new_props => {
		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
	};

	$$props = exclude_internal_props($$props);
	return [$$props];
}

class Grease_pencil extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});
	}
}

/* ~icons/ic/round-workspaces.svelte generated by Svelte v3.53.1 */

function create_fragment$3(ctx) {
	let svg;
	let raw_value = `<path fill="currentColor" d="M6 13c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4zm6-10C9.8 3 8 4.8 8 7s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4zm6 10c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4z"/>` + "";

	let svg_levels = [
		{ viewBox: "0 0 24 24" },
		{ width: "1.2em" },
		{ height: "1.2em" },
		/*$$props*/ ctx[0]
	];

	let svg_data = {};

	for (let i = 0; i < svg_levels.length; i += 1) {
		svg_data = assign(svg_data, svg_levels[i]);
	}

	return {
		c() {
			svg = svg_element("svg");
			set_svg_attributes(svg, svg_data);
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			svg.innerHTML = raw_value;
		},
		p(ctx, [dirty]) {
			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
				{ viewBox: "0 0 24 24" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
			]));
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(svg);
		}
	};
}

function instance$3($$self, $$props, $$invalidate) {
	$$self.$$set = $$new_props => {
		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
	};

	$$props = exclude_internal_props($$props);
	return [$$props];
}

class Round_workspaces extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
	}
}

/* ~icons/mdi/github.svelte generated by Svelte v3.53.1 */

function create_fragment$2(ctx) {
	let svg;
	let raw_value = `<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>` + "";

	let svg_levels = [
		{ viewBox: "0 0 24 24" },
		{ width: "1.2em" },
		{ height: "1.2em" },
		/*$$props*/ ctx[0]
	];

	let svg_data = {};

	for (let i = 0; i < svg_levels.length; i += 1) {
		svg_data = assign(svg_data, svg_levels[i]);
	}

	return {
		c() {
			svg = svg_element("svg");
			set_svg_attributes(svg, svg_data);
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			svg.innerHTML = raw_value;
		},
		p(ctx, [dirty]) {
			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
				{ viewBox: "0 0 24 24" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
			]));
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(svg);
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	$$self.$$set = $$new_props => {
		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
	};

	$$props = exclude_internal_props($$props);
	return [$$props];
}

class Github extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
	}
}

/* ~icons/mdi/dev-to.svelte generated by Svelte v3.53.1 */

function create_fragment$1(ctx) {
	let svg;
	let raw_value = `<path fill="currentColor" d="M7.73 11.93c0 1.72-.02 1.83-.23 2.07c-.19.17-.38.23-.76.23l-.51.01l-.03-2.27l-.02-2.27h.52c.35 0 .6.07.77.21c.24.21.26.25.26 2.02M22 7.5v9c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2v-9c0-1.11.89-2 2-2h16c1.11 0 2 .89 2 2M8.93 11.73c-.03-1.84-.05-1.99-.29-2.39c-.4-.68-.85-.84-2.36-.84H5v7h1.21c1.33 0 1.89-.17 2.29-.71c.41-.53.5-.98.43-3.06m4.19-3.23h-1.48c-1.49 0-1.5 0-1.71.28S9.7 9.21 9.7 12v2.96l.27.27c.25.27.31.27 1.71.27h1.44v-1.19l-1.09-.04l-1.1-.03V12.6l.68-.03l.66-.04v-1.19h-1.39V9.7h2.24V8.5m5.88.06c0-.06-.3-.06-.66-.06l-.68.06l-.59 2.35c-.38 1.48-.62 2.27-.67 2.13c-.08-.27-1.14-4.44-1.14-4.49c0-.05-.31-.05-.68-.05h-.69l.41 1.55c.2.87.59 2.28.81 3.15c.34 1.35.46 1.65.75 1.94c.2.22.45.36.61.36c.33 0 .76-.34.9-.73C17.5 14.5 19 8.69 19 8.56Z"/>` + "";

	let svg_levels = [
		{ viewBox: "0 0 24 24" },
		{ width: "1.2em" },
		{ height: "1.2em" },
		/*$$props*/ ctx[0]
	];

	let svg_data = {};

	for (let i = 0; i < svg_levels.length; i += 1) {
		svg_data = assign(svg_data, svg_levels[i]);
	}

	return {
		c() {
			svg = svg_element("svg");
			set_svg_attributes(svg, svg_data);
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			svg.innerHTML = raw_value;
		},
		p(ctx, [dirty]) {
			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
				{ viewBox: "0 0 24 24" },
				{ width: "1.2em" },
				{ height: "1.2em" },
				dirty & /*$$props*/ 1 && /*$$props*/ ctx[0]
			]));
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(svg);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	$$self.$$set = $$new_props => {
		$$invalidate(0, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
	};

	$$props = exclude_internal_props($$props);
	return [$$props];
}

class Dev_to extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
	}
}

const PurusProfile_svelte_svelte_type_style_lang = '';

/* src/svelte/components/apps/PurusProfile/PurusProfile.svelte generated by Svelte v3.53.1 */

function create_fragment(ctx) {
	let section1;
	let header;
	let t1;
	let aside;
	let nav;
	let a0;
	let blogicon;
	let t2;
	let t3;
	let a1;
	let worksicon;
	let t4;
	let t5;
	let hr;
	let t6;
	let a2;
	let twittericon;
	let t7;
	let t8;
	let a3;
	let githubicon;
	let t9;
	let t10;
	let a4;
	let devtoicon;
	let t11;
	let t12;
	let section0;
	let current;
	let mounted;
	let dispose;
	blogicon = new Grease_pencil({});
	worksicon = new Round_workspaces({});
	twittericon = new Twitter({});
	githubicon = new Github({});
	devtoicon = new Dev_to({});

	return {
		c() {
			section1 = element("section");
			header = element("header");
			header.innerHTML = `<span class="svelte-bwjt80">About the Developer</span>`;
			t1 = space();
			aside = element("aside");
			nav = element("nav");
			a0 = element("a");
			create_component(blogicon.$$.fragment);
			t2 = text(" Blog");
			t3 = space();
			a1 = element("a");
			create_component(worksicon.$$.fragment);
			t4 = text(" Works");
			t5 = space();
			hr = element("hr");
			t6 = space();
			a2 = element("a");
			create_component(twittericon.$$.fragment);
			t7 = text("\n        Twitter");
			t8 = space();
			a3 = element("a");
			create_component(githubicon.$$.fragment);
			t9 = text(" Github");
			t10 = space();
			a4 = element("a");
			create_component(devtoicon.$$.fragment);
			t11 = text(" Dev.to");
			t12 = space();
			section0 = element("section");

			section0.innerHTML = `<img height="200" width="200" src="/purus-profile/puru.webp" alt="Puru Vijay Profile pic" class="svelte-bwjt80"/> 

    <br/> 

    <h1 class="svelte-bwjt80">Hi, I&#39;m Puru</h1> 

    <h2 class="svelte-bwjt80">I&#39;m the creator of macOS Web, which you&#39;re on right now
      <img src="/emojis/wink.png" alt="Wink emoji" class="emoji svelte-bwjt80"/></h2> 

    <br/><br/> 

    <p class="svelte-bwjt80">I am a fullstack web developer, with an infinite amount of love for frontend web development,
      esp JavaScript, TypeScript, and for frontend frameworks like Svelte, Vue and React
      <img src="/emojis/star-struck.png" alt="Star Struck face emoji" class="emoji svelte-bwjt80"/></p> 

    <br/><br/> 

    <p class="svelte-bwjt80">However, my love for tech doesn&#39;t end there. I enjoy writing backend APIs, scripts, working
      with databases, and my fav platforms are NodeJS, Deno and Go</p>`;

			attr(header, "class", "titlebar app-window-drag-handle svelte-bwjt80");
			attr(a0, "href", "https://www.puruvj.dev/blog");
			attr(a0, "class", "svelte-bwjt80");
			attr(a1, "href", "https://www.puruvj.dev/works");
			attr(a1, "class", "svelte-bwjt80");
			attr(hr, "class", "svelte-bwjt80");
			attr(a2, "href", "https://www.puruvj.dev/twitter");
			attr(a2, "class", "svelte-bwjt80");
			attr(a3, "href", "https://www.puruvj.dev/github");
			attr(a3, "class", "svelte-bwjt80");
			attr(a4, "href", "https://www.puruvj.dev/devto");
			attr(a4, "class", "svelte-bwjt80");
			attr(nav, "class", "svelte-bwjt80");
			attr(aside, "class", "svelte-bwjt80");
			toggle_class(aside, "light", /*$theme*/ ctx[0].scheme === 'light');
			attr(section0, "class", "content svelte-bwjt80");
			attr(section1, "class", "container svelte-bwjt80");
		},
		m(target, anchor) {
			insert(target, section1, anchor);
			append(section1, header);
			append(section1, t1);
			append(section1, aside);
			append(aside, nav);
			append(nav, a0);
			mount_component(blogicon, a0, null);
			append(a0, t2);
			append(nav, t3);
			append(nav, a1);
			mount_component(worksicon, a1, null);
			append(a1, t4);
			append(nav, t5);
			append(nav, hr);
			append(nav, t6);
			append(nav, a2);
			mount_component(twittericon, a2, null);
			append(a2, t7);
			append(nav, t8);
			append(nav, a3);
			mount_component(githubicon, a3, null);
			append(a3, t9);
			append(nav, t10);
			append(nav, a4);
			mount_component(devtoicon, a4, null);
			append(a4, t11);
			append(section1, t12);
			append(section1, section0);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(external.call(null, a0)),
					action_destroyer(external.call(null, a1)),
					action_destroyer(external.call(null, a2)),
					action_destroyer(external.call(null, a3)),
					action_destroyer(external.call(null, a4))
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*$theme*/ 1) {
				toggle_class(aside, "light", /*$theme*/ ctx[0].scheme === 'light');
			}
		},
		i(local) {
			if (current) return;
			transition_in(blogicon.$$.fragment, local);
			transition_in(worksicon.$$.fragment, local);
			transition_in(twittericon.$$.fragment, local);
			transition_in(githubicon.$$.fragment, local);
			transition_in(devtoicon.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(blogicon.$$.fragment, local);
			transition_out(worksicon.$$.fragment, local);
			transition_out(twittericon.$$.fragment, local);
			transition_out(githubicon.$$.fragment, local);
			transition_out(devtoicon.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(section1);
			destroy_component(blogicon);
			destroy_component(worksicon);
			destroy_component(twittericon);
			destroy_component(githubicon);
			destroy_component(devtoicon);
			mounted = false;
			run_all(dispose);
		}
	};
}

function external(node) {
	node.rel = 'noopener noreferrer';
	node.target = '_blank';
}

function instance($$self, $$props, $$invalidate) {
	let $theme;
	component_subscribe($$self, theme, $$value => $$invalidate(0, $theme = $$value));
	return [$theme];
}

class PurusProfile extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export { PurusProfile as default };
