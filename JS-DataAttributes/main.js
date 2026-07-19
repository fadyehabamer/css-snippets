const colors = document.querySelectorAll('.color')
// console.log(colors)

const logo = document.getElementById('logo')
const sleep = document.getElementById('sleep')
const dream = document.getElementById('dream')
const icon = document.getElementById('icon')
const options = document.getElementById('options')

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', () => {
        logo.style.color = colors[i].dataset.color
        sleep.style.color = colors[i].dataset.color
        dream.style.color = colors[i].dataset.color

    })
}


function toggleOptions() {
    options.classList.toggle('active')

}
icon.addEventListener('click', toggleOptions)