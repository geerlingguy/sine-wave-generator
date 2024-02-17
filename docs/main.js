(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function n(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(t){var i=function(t,i){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,"string");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(i)?i:String(i)}var o={sineInOut:function(e,t){return t*(Math.sin(e*Math.PI)+1)/2},easedSine:function(e,t){var i,n=.1909830056250526;if(e<n)i=0;else if(e>1-n)i=0;else{var a=(e-n)/(1-2*n);i=Math.sin(a*Math.PI)*t}return i}},r=function(){function e(i){var n=i.phase,a=void 0===n?Math.random()*Math.PI*2:n,r=i.speed,s=void 0===r?.5*Math.random()+.5:r,h=i.amplitude,u=void 0===h?10:h,l=i.wavelength,v=void 0===l?100:l,d=i.strokeStyle,c=void 0===d?"rgba(255,255,255,0.2)":d,m=i.segmentLength,f=void 0===m?10:m,w=i.easing,p=void 0===w?o.sineInOut:w,g=i.rotate,y=void 0===g?0:g;t(this,e),this.validateConfig({amplitude:u,wavelength:v,segmentLength:f,speed:s,rotate:y}),this.phase=a,this.speed=s,this.amplitude=u,this.wavelength=v,this.strokeStyle=c,this.segmentLength=f,this.easing=p,this.rotate=y}return n(e,[{key:"validateConfig",value:function(e){var t=e.amplitude,i=e.wavelength,n=e.segmentLength,a=e.speed,o=e.rotate;if(t<0||i<0||n<0||a<0)throw new Error("Wave configuration values must be positive.");if(o<0||o>=360)throw new Error("Rotate value must be between 0 and 360 degrees.")}},{key:"update",value:function(e){Object.assign(this,e)}}],[{key:"generateRandomConfig",value:function(){return{phase:Math.random()*Math.PI*2,speed:.5*Math.random()+.5,amplitude:20*Math.random()+5,wavelength:200*Math.random()+50,strokeStyle:"rgba(".concat(Math.floor(255*Math.random()),",").concat(Math.floor(255*Math.random()),",").concat(Math.floor(255*Math.random()),",").concat(Math.random().toFixed(1),")"),segmentLength:20*Math.random()+5,easing:o.sineInOut,rotate:360*Math.random()}}}]),e}(),s=function(){function e(i){var n=i.el,a=i.waves,o=void 0===a?[]:a;if(t(this,e),!n)throw new Error('SineWaveGenerator requires "el" option.');this.el="string"==typeof n?document.querySelector(n):n,this.ctx=this.el.getContext("2d"),this.waves=o.map((function(e){return new r(e)})),this.handleResize=this.resize.bind(this),this.handleMouseMove=this.onMouseMove.bind(this),this.handleTouchMove=this.onTouchMove.bind(this),this.animationFrameId=null,this.waveTemplate=[];for(var s=0;s<this.el.width;s+=10)this.waveTemplate.push({x:s,y:0});this.bindEvents()}return n(e,[{key:"bindEvents",value:function(){window.addEventListener("resize",this.handleResize),this.el.addEventListener("mousemove",this.handleMouseMove),this.el.addEventListener("touchmove",this.handleTouchMove)}},{key:"unbindEvents",value:function(){window.removeEventListener("resize",this.handleResize),this.el.removeEventListener("mousemove",this.handleMouseMove),this.el.removeEventListener("touchmove",this.handleTouchMove)}},{key:"onMouseMove",value:function(e){var t=e.clientY/this.el.height;this.waves.forEach((function(e){e.phase=t*Math.PI*2}))}},{key:"onTouchMove",value:function(e){var t=e.touches[0].clientY/this.el.height;this.waves.forEach((function(e){e.phase=t*Math.PI*2}))}},{key:"start",value:function(){var e=this;!function t(){e.ctx.clearRect(0,0,e.el.width,e.el.height),e.waves.forEach((function(t){return e.drawWave(t)})),e.animationFrameId=requestAnimationFrame(t)}(),this.resize()}},{key:"stop",value:function(){this.animationFrameId&&(window.cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.unbindEvents()}},{key:"resize",value:function(){this.el.width=window.innerWidth/2,this.el.height=window.innerHeight/2}},{key:"drawWave",value:function(e){this.ctx.save(),e.rotate&&(this.ctx.translate(this.el.width/2,this.el.height/2),this.ctx.rotate(e.rotate*Math.PI/45),this.ctx.translate(-this.el.width/2,-this.el.height/2));var t=e.easing||o.sineInOut,i=this.ctx.createLinearGradient(0,0,this.el.width,0);i.addColorStop(0,"rgba(25, 255, 255, 0)"),i.addColorStop(.5,"rgba(255, 25, 255, 0.75)"),i.addColorStop(1,"rgba(255, 255, 25, 0)");var n=this.el.height/2;this.ctx.beginPath(),this.ctx.moveTo(0,n);for(var a=0;a<this.el.width;a++){var r=t(a/this.el.width,e.amplitude),s=(a+e.phase)*Math.PI*2/this.el.width,h=Math.sin(s)*r+n;this.ctx.lineTo(a,h)}this.ctx.strokeStyle=i,this.ctx.stroke(),e.phase+=e.speed*Math.PI*2,this.ctx.restore()}},{key:"addWave",value:function(e){var t=new r(e);this.waves.push(t)}},{key:"removeWave",value:function(e){e>=0&&e<this.waves.length&&this.waves.splice(e,1)}}]),e}();window.SineWaveGenerator=s})();