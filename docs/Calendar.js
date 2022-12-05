import { a4 as requiredArgs, a5 as toDate, a6 as toInteger, S as SvelteComponent, i as init, s as safe_not_equal, V as assign, k as svg_element, W as set_svg_attributes, a as insert, X as get_spread_update, n as noop, d as detach, Y as exclude_internal_props, q as element, r as space, l as attr, v as toggle_class, o as append, a7 as update_keyed_each, a1 as destroy_each, y as component_subscribe, M as theme, Z as text, a0 as set_data, a8 as destroy_block, a9 as format, f as create_component, m as mount_component, w as listen, g as group_outros, t as transition_out, c as check_outros, b as transition_in, j as destroy_component, x as run_all } from './index.js';

/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var date = toDate(dirtyDate);
  var amount = toInteger(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var day = date.getDay();
  return day;
}

/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var month = date.getMonth();
  return month;
}

/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  requiredArgs(1, arguments);
  return toDate(dirtyDate).getFullYear();
}

/* ~icons/ic/round-chevron-left.svelte generated by Svelte v3.53.1 */

function create_fragment$3(ctx) {
	let svg;
	let raw_value = `<path fill="currentColor" d="M14.71 6.71a.996.996 0 0 0-1.41 0L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"/>` + "";

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

class Round_chevron_left extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});
	}
}

/* ~icons/ic/round-chevron-right.svelte generated by Svelte v3.53.1 */

function create_fragment$2(ctx) {
	let svg;
	let raw_value = `<path fill="currentColor" d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>` + "";

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

class Round_chevron_right extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
	}
}

const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_OF_THE_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const NUMBER_OF_CELLS_IN_CALENDAR = 42;

function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function getRangeArray(lower, upper) {
  const arr = [];
  for (let i = lower + 1; i <= upper; i++) {
    arr.push(i);
  }
  return arr;
}
function getDisplayDays(selectedDate) {
  const thisMonth = getMonth(selectedDate);
  const prevMonth = thisMonth - 1 < 0 ? 11 : thisMonth - 1;
  const days = isLeapYear(getYear(selectedDate)) ? DAYS_LEAP : DAYS;
  const weekday = getDay(startOfMonth(selectedDate));
  const daysToShowInPrevMonth = weekday === 0 ? 6 : weekday - 1;
  const daysToShowInNextMonth = NUMBER_OF_CELLS_IN_CALENDAR - days[thisMonth] - daysToShowInPrevMonth;
  const daysInPrevMonth = getRangeArray(days[prevMonth] - daysToShowInPrevMonth, days[prevMonth]);
  const daysInThisMonth = getRangeArray(0, days[thisMonth]);
  const daysInNextMonth = getRangeArray(0, daysToShowInNextMonth);
  return {
    daysInPrevMonth,
    daysInThisMonth,
    daysInNextMonth
  };
}

const MonthView_svelte_svelte_type_style_lang = '';

/* src/svelte/components/apps/Calendar/MonthView.svelte generated by Svelte v3.53.1 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[15] = list[i];
	child_ctx[17] = i;
	return child_ctx;
}

// (19:2) {#each DAYS_OF_THE_WEEK as day, i}
function create_each_block_3(ctx) {
	let div;
	let t_value = /*day*/ ctx[15] + "";
	let t;

	return {
		c() {
			div = element("div");
			t = text(t_value);
			attr(div, "class", "weekday svelte-1dqp42b");
			toggle_class(div, "weekend", [5, 6].includes(/*i*/ ctx[17]));
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (23:2) {#each daysInPrevMonth as date (dayKey(date))}
function create_each_block_2(key_1, ctx) {
	let div1;
	let div0;
	let t_value = /*date*/ ctx[8] + "";
	let t;

	return {
		key: key_1,
		first: null,
		c() {
			div1 = element("div");
			div0 = element("div");
			t = text(t_value);
			attr(div0, "class", "date-number svelte-1dqp42b");
			toggle_class(div0, "this-month", false);
			attr(div1, "class", "day svelte-1dqp42b");
			toggle_class(div1, "today", /*isToday*/ ctx[4](/*date*/ ctx[8], false));
			this.first = div1;
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			append(div0, t);
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*daysInPrevMonth*/ 4 && t_value !== (t_value = /*date*/ ctx[8] + "")) set_data(t, t_value);

			if (dirty & /*isToday, daysInPrevMonth*/ 20) {
				toggle_class(div1, "today", /*isToday*/ ctx[4](/*date*/ ctx[8], false));
			}
		},
		d(detaching) {
			if (detaching) detach(div1);
		}
	};
}

// (29:2) {#each daysInThisMonth as date (dayKey(date))}
function create_each_block_1(key_1, ctx) {
	let div1;
	let div0;
	let t_value = /*date*/ ctx[8] + "";
	let t;

	return {
		key: key_1,
		first: null,
		c() {
			div1 = element("div");
			div0 = element("div");
			t = text(t_value);
			attr(div0, "class", "date-number svelte-1dqp42b");
			toggle_class(div0, "this-month", true);
			attr(div1, "class", "day svelte-1dqp42b");
			toggle_class(div1, "today", /*isToday*/ ctx[4](/*date*/ ctx[8], true));
			this.first = div1;
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			append(div0, t);
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*daysInThisMonth*/ 2 && t_value !== (t_value = /*date*/ ctx[8] + "")) set_data(t, t_value);

			if (dirty & /*isToday, daysInThisMonth*/ 18) {
				toggle_class(div1, "today", /*isToday*/ ctx[4](/*date*/ ctx[8], true));
			}
		},
		d(detaching) {
			if (detaching) detach(div1);
		}
	};
}

// (35:2) {#each daysInNextMonth as date (dayKey(date))}
function create_each_block(key_1, ctx) {
	let div1;
	let div0;
	let t0_value = /*date*/ ctx[8] + "";
	let t0;
	let t1;

	return {
		key: key_1,
		first: null,
		c() {
			div1 = element("div");
			div0 = element("div");
			t0 = text(t0_value);
			t1 = space();
			attr(div0, "class", "date-number svelte-1dqp42b");
			toggle_class(div0, "this-month", false);
			attr(div1, "class", "day svelte-1dqp42b");
			toggle_class(div1, "today", /*isToday*/ ctx[4](/*date*/ ctx[8], false));
			this.first = div1;
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			append(div0, t0);
			append(div1, t1);
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*daysInNextMonth*/ 1 && t0_value !== (t0_value = /*date*/ ctx[8] + "")) set_data(t0, t0_value);

			if (dirty & /*isToday, daysInNextMonth*/ 17) {
				toggle_class(div1, "today", /*isToday*/ ctx[4](/*date*/ ctx[8], false));
			}
		},
		d(detaching) {
			if (detaching) detach(div1);
		}
	};
}

function create_fragment$1(ctx) {
	let div;
	let t0;
	let each_blocks_2 = [];
	let each1_lookup = new Map();
	let t1;
	let each_blocks_1 = [];
	let each2_lookup = new Map();
	let t2;
	let each_blocks = [];
	let each3_lookup = new Map();
	let each_value_3 = DAYS_OF_THE_WEEK;
	let each_blocks_3 = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks_3[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
	}

	let each_value_2 = /*daysInPrevMonth*/ ctx[2];
	const get_key = ctx => /*dayKey*/ ctx[5](/*date*/ ctx[8]);

	for (let i = 0; i < each_value_2.length; i += 1) {
		let child_ctx = get_each_context_2(ctx, each_value_2, i);
		let key = get_key(child_ctx);
		each1_lookup.set(key, each_blocks_2[i] = create_each_block_2(key, child_ctx));
	}

	let each_value_1 = /*daysInThisMonth*/ ctx[1];
	const get_key_1 = ctx => /*dayKey*/ ctx[5](/*date*/ ctx[8]);

	for (let i = 0; i < each_value_1.length; i += 1) {
		let child_ctx = get_each_context_1(ctx, each_value_1, i);
		let key = get_key_1(child_ctx);
		each2_lookup.set(key, each_blocks_1[i] = create_each_block_1(key, child_ctx));
	}

	let each_value = /*daysInNextMonth*/ ctx[0];
	const get_key_2 = ctx => /*dayKey*/ ctx[5](/*date*/ ctx[8]);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key_2(child_ctx);
		each3_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].c();
			}

			t0 = space();

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].c();
			}

			t1 = space();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t2 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(div, "class", "container svelte-1dqp42b");
			toggle_class(div, "dark", /*$theme*/ ctx[3].scheme === 'dark');
		},
		m(target, anchor) {
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].m(div, null);
			}

			append(div, t0);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].m(div, null);
			}

			append(div, t1);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div, null);
			}

			append(div, t2);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*DAYS_OF_THE_WEEK*/ 0) {
				each_value_3 = DAYS_OF_THE_WEEK;
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks_3[i]) {
						each_blocks_3[i].p(child_ctx, dirty);
					} else {
						each_blocks_3[i] = create_each_block_3(child_ctx);
						each_blocks_3[i].c();
						each_blocks_3[i].m(div, t0);
					}
				}

				for (; i < each_blocks_3.length; i += 1) {
					each_blocks_3[i].d(1);
				}

				each_blocks_3.length = each_value_3.length;
			}

			if (dirty & /*isToday, daysInPrevMonth*/ 20) {
				each_value_2 = /*daysInPrevMonth*/ ctx[2];
				each_blocks_2 = update_keyed_each(each_blocks_2, dirty, get_key, 1, ctx, each_value_2, each1_lookup, div, destroy_block, create_each_block_2, t1, get_each_context_2);
			}

			if (dirty & /*isToday, daysInThisMonth*/ 18) {
				each_value_1 = /*daysInThisMonth*/ ctx[1];
				each_blocks_1 = update_keyed_each(each_blocks_1, dirty, get_key_1, 1, ctx, each_value_1, each2_lookup, div, destroy_block, create_each_block_1, t2, get_each_context_1);
			}

			if (dirty & /*isToday, daysInNextMonth*/ 17) {
				each_value = /*daysInNextMonth*/ ctx[0];
				each_blocks = update_keyed_each(each_blocks, dirty, get_key_2, 1, ctx, each_value, each3_lookup, div, destroy_block, create_each_block, null, get_each_context);
			}

			if (dirty & /*$theme*/ 8) {
				toggle_class(div, "dark", /*$theme*/ ctx[3].scheme === 'dark');
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
			destroy_each(each_blocks_3, detaching);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].d();
			}

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].d();
			}

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let daysInPrevMonth;
	let daysInThisMonth;
	let daysInNextMonth;
	let $theme;
	component_subscribe($$self, theme, $$value => $$invalidate(3, $theme = $$value));
	let { selectedDate } = $$props;
	const today = new Date();

	function isToday(date, isThisMonth) {
		return selectedDate.getFullYear() === today.getFullYear() && isThisMonth && selectedDate.getMonth() === today.getMonth() && date === today.getDate();
	}

	function dayKey(date) {
		return [date, selectedDate.getMonth()].join('-');
	}

	$$self.$$set = $$props => {
		if ('selectedDate' in $$props) $$invalidate(6, selectedDate = $$props.selectedDate);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*selectedDate*/ 64) {
			$$invalidate(2, { daysInPrevMonth, daysInThisMonth, daysInNextMonth } = getDisplayDays(selectedDate), daysInPrevMonth, ($$invalidate(1, daysInThisMonth), $$invalidate(6, selectedDate)), ($$invalidate(0, daysInNextMonth), $$invalidate(6, selectedDate)));
		}
	};

	return [
		daysInNextMonth,
		daysInThisMonth,
		daysInPrevMonth,
		$theme,
		isToday,
		dayKey,
		selectedDate
	];
}

class MonthView extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { selectedDate: 6 });
	}
}

const Calendar_svelte_svelte_type_style_lang = '';

/* src/svelte/components/apps/Calendar/Calendar.svelte generated by Svelte v3.53.1 */

function create_else_block(ctx) {
	let div;

	return {
		c() {
			div = element("div");
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (44:30) 
function create_if_block_2(ctx) {
	let div;

	return {
		c() {
			div = element("div");
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

// (42:31) 
function create_if_block_1(ctx) {
	let monthview;
	let current;

	monthview = new MonthView({
			props: { selectedDate: /*selectedDate*/ ctx[1] }
		});

	return {
		c() {
			create_component(monthview.$$.fragment);
		},
		m(target, anchor) {
			mount_component(monthview, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const monthview_changes = {};
			if (dirty & /*selectedDate*/ 2) monthview_changes.selectedDate = /*selectedDate*/ ctx[1];
			monthview.$set(monthview_changes);
		},
		i(local) {
			if (current) return;
			transition_in(monthview.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(monthview.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(monthview, detaching);
		}
	};
}

// (40:4) {#if view === 'year'}
function create_if_block(ctx) {
	let div;

	return {
		c() {
			div = element("div");
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

function create_fragment(ctx) {
	let section1;
	let header;
	let t0;
	let section0;
	let div2;
	let div0;
	let span0;
	let t1_value = format(/*selectedDate*/ ctx[1], 'MMMM') + "";
	let t1;
	let t2;
	let span1;
	let t3_value = format(/*selectedDate*/ ctx[1], 'yyyy') + "";
	let t3;
	let t4;
	let div1;
	let button0;
	let leftarrow;
	let t5;
	let button1;
	let t7;
	let button2;
	let rightarrow;
	let t8;
	let current_block_type_index;
	let if_block;
	let current;
	let mounted;
	let dispose;
	leftarrow = new Round_chevron_left({});
	rightarrow = new Round_chevron_right({});
	const if_block_creators = [create_if_block, create_if_block_1, create_if_block_2, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*view*/ ctx[0] === 'year') return 0;
		if (/*view*/ ctx[0] === 'month') return 1;
		if (/*view*/ ctx[0] === 'week') return 2;
		return 3;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c() {
			section1 = element("section");
			header = element("header");
			t0 = space();
			section0 = element("section");
			div2 = element("div");
			div0 = element("div");
			span0 = element("span");
			t1 = text(t1_value);
			t2 = space();
			span1 = element("span");
			t3 = text(t3_value);
			t4 = space();
			div1 = element("div");
			button0 = element("button");
			create_component(leftarrow.$$.fragment);
			t5 = space();
			button1 = element("button");
			button1.textContent = "Today";
			t7 = space();
			button2 = element("button");
			create_component(rightarrow.$$.fragment);
			t8 = space();
			if_block.c();
			attr(header, "class", "app-window-drag-handle titlebar svelte-qnsf2h");
			attr(span0, "class", "month svelte-qnsf2h");
			attr(span1, "class", "year svelte-qnsf2h");
			attr(button0, "class", "svelte-qnsf2h");
			attr(button1, "class", "svelte-qnsf2h");
			attr(button2, "class", "svelte-qnsf2h");
			attr(div1, "class", "control-buttons svelte-qnsf2h");
			attr(div2, "class", "calendar-header svelte-qnsf2h");
			attr(section0, "class", "main-area svelte-qnsf2h");
			attr(section1, "class", "container svelte-qnsf2h");
			toggle_class(section1, "dark", /*$theme*/ ctx[2].scheme === 'dark');
		},
		m(target, anchor) {
			insert(target, section1, anchor);
			append(section1, header);
			append(section1, t0);
			append(section1, section0);
			append(section0, div2);
			append(div2, div0);
			append(div0, span0);
			append(span0, t1);
			append(div0, t2);
			append(div0, span1);
			append(span1, t3);
			append(div2, t4);
			append(div2, div1);
			append(div1, button0);
			mount_component(leftarrow, button0, null);
			append(div1, t5);
			append(div1, button1);
			append(div1, t7);
			append(div1, button2);
			mount_component(rightarrow, button2, null);
			append(section0, t8);
			if_blocks[current_block_type_index].m(section0, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen(button0, "click", /*goPreviousMonth*/ ctx[4]),
					listen(button1, "click", /*goToToday*/ ctx[3]),
					listen(button2, "click", /*goNextMonth*/ ctx[5])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if ((!current || dirty & /*selectedDate*/ 2) && t1_value !== (t1_value = format(/*selectedDate*/ ctx[1], 'MMMM') + "")) set_data(t1, t1_value);
			if ((!current || dirty & /*selectedDate*/ 2) && t3_value !== (t3_value = format(/*selectedDate*/ ctx[1], 'yyyy') + "")) set_data(t3, t3_value);
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(section0, null);
			}

			if (!current || dirty & /*$theme*/ 4) {
				toggle_class(section1, "dark", /*$theme*/ ctx[2].scheme === 'dark');
			}
		},
		i(local) {
			if (current) return;
			transition_in(leftarrow.$$.fragment, local);
			transition_in(rightarrow.$$.fragment, local);
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(leftarrow.$$.fragment, local);
			transition_out(rightarrow.$$.fragment, local);
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(section1);
			destroy_component(leftarrow);
			destroy_component(rightarrow);
			if_blocks[current_block_type_index].d();
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let $theme;
	component_subscribe($$self, theme, $$value => $$invalidate(2, $theme = $$value));
	let { view = 'month' } = $$props;
	let selectedDate = new Date();

	function goToToday() {
		$$invalidate(1, selectedDate = new Date());
	}

	function goPreviousMonth() {
		$$invalidate(1, selectedDate = addMonths(selectedDate, -1));
	}

	function goNextMonth() {
		$$invalidate(1, selectedDate = addMonths(selectedDate, 1));
	}

	$$self.$$set = $$props => {
		if ('view' in $$props) $$invalidate(0, view = $$props.view);
	};

	return [view, selectedDate, $theme, goToToday, goPreviousMonth, goNextMonth];
}

class Calendar extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { view: 0 });
	}
}

export { Calendar as default };