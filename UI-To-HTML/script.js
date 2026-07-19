const btn = document.querySelector(".menu");
const openrow = document.querySelector(".header-row");

btn.addEventListener("click" , () => {

if(openrow.style.opacity == "0" || openrow.style.minHeight == "0" || openrow.style.transition == "none" ||  openrow.style.flexWrap == "wrap") {
      openrow.style.opacity = "1";
      openrow.style.minHeight = "400px";
openrow.style.flexWrap = "nowrap";
openrow.style.transition = " 1s linear";


} else {
      openrow.style.opacity = "0";
  openrow.style.minHeight = "0";

openrow.style.transition = "  1s linear";

}
})

