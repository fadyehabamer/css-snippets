validation = () => {
    let form = document.getElementById("form"),
        email = document.getElementById("email").value,
        text = document.getElementById("text");
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid")
        text.innerHTML = "Your Email adress is valid"
        text.style.color = "#00ff00"

    }
    else {
        form.classList.add("invalid")
        form.classList.remove("valid")
        text.innerHTML = "please enter vaild Email adress "
        text.style.color = "#ff0000"
    }
    if (email == "") {
        form.classList.remove("invalid")
        form.classList.remove("valid")
        text.innerHTML = ""
        text.style.color = "#ff0000"
    }
}