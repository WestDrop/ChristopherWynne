import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';


/**
 *    ABOUT TYPING LETTERS
 */
var typed = new Typed(".auto_type", {
	strings: ["Christopher Wynne"],
	typeSpeed: 100,
	backSpeed: 100,
	loop: true
})

var typed = new Typed('.auto_type2', {
	strings: ["especially in web developement since it plays such an important role in our daily lives."],
	typeSpeed: 50,
	backSpeed: 10,
	loop: false
})
/**
 *    END OF ABOUT TYPING LETTERS
 */



/**
 * scroll reveal skills animations
 */
function reveal() {
	var reveals = document.querySelectorAll(".reveal");

	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 30;

		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", reveal);
/**
 * END OF scroll reveal skills
 */




/**
 * TAB BUTTONS FOR PROJECTS
 */
const tabsLine = document.querySelector('.tabs-btn .line span')
const tabsBtnLi = document.querySelectorAll('.tabs-btn li')
const tabsContent = document.querySelector('.tabs-content')
const contentLi = document.querySelectorAll('.tabs-content li')
const root = document.querySelector(':root')

// set the line before click any tab btn
// due to this line width become equal to first tab btn
tabsLine.style.width = tabsBtnLi[0].getBoundingClientRect().width + 'px'
// now change position of line
tabsLine.style.left = tabsBtnLi[0].getBoundingClientRect().x + 'px'

// create onclick func for each btn
for (var i = 0; i < tabsBtnLi.length; i++) {
	tabsBtnLi[i].onclick = (e) => {
		// first set the animation of line
		bottomLineAnimation(e.target)
		// now for content animation
		if (e.target.getBoundingClientRect().x < tabsLine.getBoundingClientRect().x) {
			// for going left
			root.style.setProperty('--translate', '-15px')
			root.style.setProperty('--transDur', '.1s')
			// hide all content block
			hideAll()
			setTimeout(() => {
				root.style.setProperty('--translate', '35px');
				root.style.setProperty('--transDur', '.4s');
			}, 100);
			// 100 is due to .1 duration
			// get foe attr value
			var forAttr = e.target.getAttribute('for')
			setTimeout(() => {
				document.querySelector('.' + forAttr).classList.add('active')
			}, 300);
			// add 200 to prev 100 value
		} else {
			// for going right
			// same copy above
			root.style.setProperty('--translate', '15px');
			root.style.setProperty('--transDur', '.1s');
			hideAll()
			setTimeout(() => {
				root.style.setProperty('--translate', '-35px');
				root.style.setProperty('--transDur', '.4s');
			}, 100);
			var forAttr = e.target.getAttribute('for')
			setTimeout(() => {
				document.querySelector('.' + forAttr).classList.add('active')
			}, 300);
		}
	}
}

function bottomLineAnimation(e) {
	// we will use properties of clicked btn and line
	var lineRect = tabsLine.getBoundingClientRect()
	var targetRect = e.getBoundingClientRect()
	// get line tran duration in js
	var cssTransDuration = window.getComputedStyle(tabsLine).transitionDuration.replace(/\D+$/g, '')
	// this give only number after replace
	if (targetRect.x > lineRect.x) {
		// if right btn is clicked from previous btn
		tabsLine.style.width = ((targetRect.x + targetRect.width) - (lineRect.x + lineRect.width) + lineRect.width) + 'px'
		setTimeout(() => {
			tabsLine.style.width = targetRect.width + 'px'
			tabsLine.style.left = targetRect.x + 'px'
		}, cssTransDuration * 1000);
	} else {
		// if left btn is clicked
		tabsLine.style.width = (lineRect.x - targetRect.x) + lineRect.width + 'px'
		tabsLine.style.left = targetRect.x + 'px'
		setTimeout(() => {
			tabsLine.style.width = targetRect.width + 'px'
		}, cssTransDuration * 1000);
	}
}
// hide all function
function hideAll() {
	for (var i = 0; i < contentLi.length; i++) {
		contentLi[i].classList.remove('active')
	}
}
/**
 * END OF TAB BUTTONS FOR PROJECTS------^^
 */



/**
 * Moving Parralax background.
 */
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_back = document.getElementById("mountains_back");
let mountains_front = document.getElementById("mountains_front");
let btn = document.getElementById("btn-letsgo");
let header = document.querySelector("header");

window.addEventListener("scroll", function() {
	let value = window.scrollY;
	stars.style.left = value * 0.25 + "px";
	moon.style.top = value * 1.05 + "px";
	mountains_back.style.top = value * 0.5 + "px";
	mountains_front.style.top = value * 0 + "px";
	btn.style.marginTop = value * 1 + "px";
	header.style.top = value * 0.5 + "px";
});
/**
 * END OF Moving Parralax background.
 */




/**
 * Establish scene and canvas.
 */
const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()

/**
 * stars geometry 
 */
const sphere = new THREE.SphereGeometry(.01, 30, 30);
const material = new THREE.MeshBasicMaterial({
	color: 0x00ffff
});
const mesh = new THREE.Mesh(sphere, material);
mesh.position.set(0, 0, 0);
scene.add(mesh);


/**
 * For Loop to generate random star patterns with random colors. 
 **/
for (var z = 0; z < 200; z += 1) {
	var randomSelector = Math.floor(Math.random() * 10) + 1;
	var randomColor;
	if (randomSelector == 0) {
		var randomColor = new THREE.MeshBasicMaterial({
			color: 0x0000FF
		});
	}
	if (randomSelector == 1) {
		var randomColor = new THREE.MeshBasicMaterial({
			color: 0x00FFFF
		});
	}
	if (randomSelector == 2) {
		var randomColor = new THREE.MeshBasicMaterial({
			color: 0xFF0000
		});
	}
	const mesh9 = new THREE.Mesh(sphere, randomColor);
	mesh9.position.x = Math.random() * -20 - 2;
	mesh9.position.y = Math.random() * -20 - 2;
	mesh9.position.z = Math.random() * -20 - 2;
	scene.add(mesh9);
}

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: 1000
}
/**
 * Window resize event listener
 */
window.addEventListener('resize', () => {
	// Update sizes
	sizes.width = window.innerWidth
	sizes.height = 1000

	// Update camera
	camera.aspect = sizes.width / sizes.height
	camera.updateProjectionMatrix()

	// Update renderer
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = -10
camera.position.y = -10
camera.position.z = 0
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	alpha: true
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Clock / animation
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () => {
	const elapsedTime = clock.getElapsedTime()
	const deltaTime = elapsedTime - previousTime
	previousTime = elapsedTime

	camera.rotation.x = Math.cos(elapsedTime) * 0.006;
	camera.rotation.y = Math.sin(elapsedTime) * 0.009;
	camera.rotation.z = (elapsedTime) * 0.0002;

	renderer.render(scene, camera)
	window.requestAnimationFrame(tick)
};

tick()