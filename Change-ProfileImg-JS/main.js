const container = document.getElementById("img-container"),
    img = document.getElementById("photo"),
    file = document.getElementById("file"),
    upload = document.getElementById("upload")


// hover on container
container.addEventListener("mouseenter", () => {
    upload.style.display = "block";

})

// hover out container
container.addEventListener("mouseleave", () => {
    upload.style.display = "none";
})

// img functionality
file.addEventListener("change", function() {
    const choosedfile = this.files[0];

    if (choosedfile) {
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            img.setAttribute("src", reader.result)
        });
        reader.readAsDataURL(choosedfile)
    }
});
