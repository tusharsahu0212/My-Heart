const image = document.getElementsByTagName("img");
const r = document.getElementById("resolutions");

r.addEventListener("change",()=>{
    image[0].src = r.options[r.selectedIndex].value;
    image[0].style.animation = "scaleAnimation 1s";
    setTimeout(()=>{
        image[0].style.removeProperty("animation");

    },1000)
});
