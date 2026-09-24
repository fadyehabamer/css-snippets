var times = document.querySelector(".hamburger .fa-times");
var bars = document.querySelector(".hamburger .fa-bars");
var navbar = document.querySelector(".navbar");

times.style.display = "none";

bars.addEventListener("click", function(){
	this.style.display = "none";
	times.style.display = "block";
	navbar.style.display = "block";
});

times.addEventListener("click", function(){
	this.style.display = "none";
	bars.style.display = "block";
	navbar.style.display = "none";
});

// the menu icons are <i role="button">: let Enter/Space activate them too
[bars, times].forEach(function(icon){
	icon.addEventListener("keydown", function(e){
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			this.click();
			// the clicked icon is now hidden; keep focus on the visible one
			(this === bars ? times : bars).focus();
		}
	});
});
