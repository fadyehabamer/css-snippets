function changeImage(event, container, activeimg) {
    let thumbs = document.querySelector(container).children;
    document.querySelector(activeimg).src = event.children[0].src;
    for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].classList.remove("active");
    }
    event.classList.add("active");
}