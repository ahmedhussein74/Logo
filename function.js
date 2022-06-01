let view = document.querySelector(".viewBtn")

let download = document.querySelector(".downloadBtn")

view.addEventListener("click", function(){
    x = document.querySelector(".value").value;
    z = "imgs/"+x+".png";
    document.querySelector(".logoImg").style.backgroundImage = `url("${z}")`;
})

download.addEventListener("click", function(){
    x = document.querySelector(".value").value;
    x.toLowerCase();
    z = "imgs/"+x+".png";
    document.querySelector(".myLink").href = z;
})