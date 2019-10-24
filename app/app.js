document.addEventListener("DOMContentLoaded", init);

function init() {
	/* przy jednym przycisku do uruchamiania dźwięku:
	const button = document.querySelector("button");
	// poniżej lokalizacja pliku mp3 do zmiennej:
	let jetsound = new Audio("sounds/airplane-mig21.mp3");
	button.addEventListener("click", () => {
		const duration = jetsound.duration;
		// console.log(duration); 
		// zwraca długość w sekundach: 6.739625
		const muted = jetsound.muted;
		console.log(muted); // zwraca: false
		jetsound.play(); // uruchamia odtwarzanie
	});*/

	const sounds = document.querySelectorAll(".sound");
	console.log(sounds); // zwraca pseudotablicę
	for(let i = 0; i < sounds.length; i++) {
		sounds[i].addEventListener("click", function() {
			let sound = this.innerHTML; // każdy pojedyńczo 'ten' element
			// console.log(sound); zwraca pseudotablicę z poszczególnymi klasami
			// - kliknięcie w każdy z elementów zwraca w konsoli jego nazwę

			makeSound(sound);
		})
	}
	function makeSound(name) {
		console.log(name); 
		switch(name) {
			case "Jetplane": 
			let sound1 = new Audio("sounds/airplane-mig21.mp3");
			sound1.play();
			break;
			case "Guitar": 
			let sound2 = new Audio("sounds/electricguitar.mp3");
			sound2.play();
			break;
			case "CityTraffic": 
			let sound3 = new Audio("sounds/trafficity.mp3");
			sound3.play();
			break;
		}
	}


}