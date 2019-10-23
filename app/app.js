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
		jetsound.play();
	});*/

	const sounds = document.querySelectorAll(".sound");
	console.log(sounds); // zwraca pseudotablicę
	for(let i = 0; i < sounds.length; i++) {
		sounds[i].addEventListener("click", function() {
			let sound = this.innerHTML; // każdy pojedyńczo 'ten' element
			console.log(sound); // zwraca pseudotablicę z poszczególnymi klasami
			// - kliknięcie w każdy z elementów zwraca w konsoli jego nazwę
		})
	}


}