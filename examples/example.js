/**
 * Example usage of the sine-wave-generator.js library
 * https://github.com/sebastienrousseau/sine-wave-generator
 */

"use strict";

document.addEventListener("DOMContentLoaded", function () {
	/**
	 * Ease functions for smooth animations.
	 * @namespace Ease
	 */
	const Ease = {
		/**
		 * Provides smooth easing in and out animation.
		 * @param {number} time - The time parameter.
		 * @param {number} amplitude - The amplitude of the wave.
		 * @returns {number} - The eased value.
		 */
		sineInOut: (time, amplitude) =>
			(amplitude * (Math.sin(time * Math.PI) + 1)) / 2,
		/**
		 * Provides eased sine animation.
		 * @param {number} percent - The percentage of the animation.
		 * @param {number} amplitude - The amplitude of the wave.
		 * @returns {number} - The eased value.
		 */
		easedSine: (percent, amplitude) => {
			let value;
			const goldenSection = (1 - 1 / 1.618033988749895) / 2;
			if (percent < goldenSection) {
				value = 0;
			} else if (percent > 1 - goldenSection) {
				value = 0;
			} else {
				const adjustedPercent =
					(percent - goldenSection) / (1 - 2 * goldenSection);
				value = Math.sin(adjustedPercent * Math.PI) * amplitude;
			}
			return value;
		},
	};

	// Constants
	const FIBONACCI = 1.618033988749895;
	const DEFAULT_AMPLITUDE = 10;
	const DEFAULT_WAVELENGTH = 100;
	const DEFAULT_STROKE_STYLE = "rgba(255,255,255,0.2)";
	const DEFAULT_SEGMENT_LENGTH = 10;
	const LINE_WIDTH = 2;
	const SPEED = FIBONACCI;

	// Multiple Waves with Different Configurations
	const canvas = document.getElementById("sineCanvas");
	const sineWavesGenerator = new SineWaveGenerator({ el: canvas });
	sineWavesGenerator.start(); // Start the animation
	sineWavesGenerator.addWave({
		amplitude: 90,
		wavelength: 20,
		strokeStyle: DEFAULT_STROKE_STYLE,
		speed: 2,
		easing: Ease.sineInOut,
		phase: 25,
	});
	sineWavesGenerator.addWave({
		amplitude: 32,
		wavelength: 50,
		strokeStyle: DEFAULT_STROKE_STYLE,
		speed: 2.1,
		easing: Ease.sineInOut,
		phase: 90,
	});
	sineWavesGenerator.addWave({
		amplitude: 46,
		wavelength: 30,
		strokeStyle: DEFAULT_STROKE_STYLE,
		speed: 1.4,
		easing: Ease.sineInOut,
		phase: -20,
	});
	sineWavesGenerator.addWave({
		amplitude: 21,
		wavelength: 30,
		strokeStyle: DEFAULT_STROKE_STYLE,
		speed: 3.2,
		easing: Ease.sineInOut,
		phase: 300,
	});
		sineWavesGenerator.addWave({
		amplitude: 108,
		wavelength: 30,
		strokeStyle: DEFAULT_STROKE_STYLE,
		speed: 1.5,
		easing: Ease.sineInOut,
		phase: 0,
	});

	// Basic Single Wave 1
	const canvas1 = document.getElementById("sineCanvas1");
	const sineWavesGenerator1 = new SineWaveGenerator({ el: canvas1 });
	sineWavesGenerator1.start(); // Start the animation
	sineWavesGenerator1.addWave({
		amplitude: 90,
		wavelength: 20,
		strokeStyle: DEFAULT_STROKE_STYLE,
		speed: 2,
		easing: Ease.sineInOut,
		phase: 25,
	});

	// Basic Single Wave 2
	const canvas2 = document.getElementById("sineCanvas2");
	const sineWavesGenerator2 = new SineWaveGenerator({ el: canvas2 });
	sineWavesGenerator2.start(); // Start the animation
	sineWavesGenerator2.addWave({
		amplitude: 32,
		wavelength: 50,
		strokeStyle: DEFAULT_STROKE_STYLE,
		speed: 2.1,
		easing: Ease.sineInOut,
		phase: 90,
	});

	// Basic Single Wave 3
	const canvas3 = document.getElementById("sineCanvas3");
	const sineWavesGenerator3 = new SineWaveGenerator({ el: canvas3 });
	sineWavesGenerator3.start(); // Start the animation
	sineWavesGenerator3.addWave({
		amplitude: 46,
		wavelength: 30,
		strokeStyle: DEFAULT_STROKE_STYLE,
		speed: 1.4,
		easing: Ease.sineInOut,
		phase: -20,
	});

	// Basic Single Wave 4
	const canvas4 = document.getElementById("sineCanvas4");
	const sineWavesGenerator4 = new SineWaveGenerator({ el: canvas4 });
	sineWavesGenerator4.start(); // Start the animation
	sineWavesGenerator4.addWave({
		amplitude: 21,
		wavelength: 30,
		strokeStyle: DEFAULT_STROKE_STYLE,
		speed: 3.2,
		easing: Ease.sineInOut,
		phase: 300,
	});

	// Basic Single Wave 5
	const canvas5 = document.getElementById("sineCanvas5");
	const sineWavesGenerator5 = new SineWaveGenerator({ el: canvas5 });
	sineWavesGenerator5.start(); // Start the animation
	sineWavesGenerator5.addWave({
		amplitude: 108,
		wavelength: 30,
		strokeStyle: DEFAULT_STROKE_STYLE,
		speed: 1.5,
		easing: Ease.sineInOut,
		phase: 0,
	});

	// Start the process
	manageWaves();
});
