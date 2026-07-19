let imgRes = document.getElementById('result'),
    btnGenerate = document.getElementById('generate'),
    animation;


btnGenerate.addEventListener('click', generateCat)

function generateCat() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(result => result.json())
        .then(data => {
            console.log(data);
            imgRes.src = data[0].url
        })
}

function preloader() {

    animation = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("container").style.display = "flex";
}
