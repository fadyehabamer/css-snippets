window.addEventListener("scroll",movescroll)

scrollElement=document.getElementById("scrollElement")

// get maxheight of webpage
const maxheight = 
window.document.body.scrollHeight - 
window.innerHeight

// move scroll indicator function
function movescroll (e){
    const percentage =
    ((window.scrollY)/ maxheight)*100
    scrollElement.style.width = percentage + "%"
}