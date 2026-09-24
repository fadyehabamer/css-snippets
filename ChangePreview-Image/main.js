function changeImage(event, container, activeimg) {
    let thumbs = document.querySelector(container).children;
    document.querySelector(activeimg).src = event.children[0].src;
    for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].classList.remove("active");
    }
    event.classList.add("active");
}

// thumbnails are <div role="button">: let Enter/Space activate them like a native button
document.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.matches(".thumb-img .box")) {
        e.preventDefault();
        e.target.click();
    }
});
