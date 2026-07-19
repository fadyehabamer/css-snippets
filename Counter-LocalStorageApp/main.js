/// * get variables

let number = document.getElementById("number"),
    dec = document.getElementById("dec"),
    reset = document.getElementById("reset"),
    inc = document.getElementById("inc"),
    save = document.getElementById("save"),
    count = localStorage.getItem("counter");



inc.addEventListener("click", function () {
    count++;
    number.innerText = count;
    if (count > 0) {
        number.style.color = "#4CAF50"
    }

})

dec.addEventListener("click", function () {
    count--;
    number.innerText = count;
    if (count < 0) {
        number.style.color = "#f44336"
    }
})

reset.addEventListener("click", function () {
    count = 0;
    number.innerText = count;
    if (count == 0) {
        number.style.color = "#111"
    }
})


// set Item to local Storage
// Check browser support
save.addEventListener("click", function () {
    if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("counter", count);
    } else {
        number.innerHTML = "Sorry, your browser does not support Web Storage...";
    }
})

// Make it appear after reload
number.innerHTML = localStorage.getItem("counter") || 0 ;
