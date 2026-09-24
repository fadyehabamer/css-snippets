//eye
var inputPass2 = document.getElementById('pass2'),
    icon = document.getElementById('icon');
emoji = document.getElementById("emoji")

icon.onclick = function () {

    if (inputPass2.className == 'input-field active') {
        inputPass2.setAttribute('type', 'text');
        icon.className = 'fa fa-eye icon';
        inputPass2.className = 'input-field';
        emoji.innerHTML = "🐵"
        icon.setAttribute('aria-pressed', 'true');


    } else if (inputPass2.className == 'input-field') {
        inputPass2.setAttribute('type', 'password');
        icon.className = 'fa fa-eye-slash icon';
        inputPass2.className = 'input-field active';
        emoji.innerHTML = "🙈"
        icon.setAttribute('aria-pressed', 'false');
    }

}

// the eye icon is an <i role="button">: let Enter/Space toggle it too
icon.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        icon.click();
    }
});

// typed.js
var options = {
    strings: ["user", "friend"],
    typeSpeed: 80,
    fadeOut: true,
    loop: true,
    showCursor: true
}

var typed = new Typed('.element', options);