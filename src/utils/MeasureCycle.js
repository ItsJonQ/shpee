/**
 * Caching base rAF and cAF methods, incase they are modified by the environment.
 */
const RAF = window.requestAnimationFrame;
const CAF = window.cancelAnimationFrame;

export class MeasureCycle {
	static defaultProps = {
		onChange: () => undefined
	};

	constructor(props = {}) {
		this.rafId = null;
		this.previousStyles = {};
		this.previousValue = null;
		this.props = { ...MeasureCycle.defaultProps, ...props };
	}

	start = () => {
		if (!this.props.el) return;
		this.rafId = RAF(this.run);
	};

	run = () => {
		if (!this.props.el) return;
		const { el } = this.props;

		if (el) {
			const computedStyles = window.getComputedStyle(el);

			const currentStyles = this.props.styles.reduce(
				(styleProps, key) => {
					return { ...styleProps, [key]: computedStyles[key] };
				},
				{}
			);

			const updates = Object.keys(currentStyles).reduce((diffs, key) => {
				if (this.previousStyles[key] !== currentStyles[key]) {
					return { ...diffs, [key]: currentStyles[key] };
				}
				return diffs;
			}, {});

			if (hasValues(this.previousStyles) && hasValues(updates)) {
				this.props.onChange({
					el,
					previous: this.previousStyles,
					current: currentStyles,
					updates
				});
			}

			this.previousStyles = currentStyles;
		}

		this.rafId = requestAnimationFrame(this.run);
	};

	stop = () => {
		if (!this.rafId) return;
		CAF(this.rafId);
	};
}

function hasValues(obj) {
	return Object.keys(obj).length;
}

export default MeasureCycle;
