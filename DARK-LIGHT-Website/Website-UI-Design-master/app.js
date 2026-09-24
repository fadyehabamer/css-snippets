const button  =  document.querySelector('.button');

// Toggle the mobile menu. (Previously two separate click listeners ran on every
// click - one showing and one hiding the menu - so it could never open.)
button.addEventListener("click", function() {
	const nav = document.querySelector(".nav");
	nav.style.display = nav.style.display === "flex" ? "none" : "flex";
})


const light = document.querySelector("#light");

// Toggle dark mode. (Same issue as above: add + remove ran back to back.)
function toggleDark() {
	const isDark = document.body.classList.toggle("dark");
	light.style.color = isDark ? "white" : "#1A202C";
	light.style.backgroundColor = isDark ? "#1A202C" : "white";
	light.setAttribute("aria-pressed", String(isDark));
}

light.addEventListener("click", toggleDark);

// #light is an <i role="button">, so support Enter/Space like a real button
light.addEventListener("keydown", function(e) {
	if (e.key === "Enter" || e.key === " ") {
		e.preventDefault();
		toggleDark();
	}
});
