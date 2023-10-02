import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın

// Mouseover , Mouseout, MouseDown,Mouseup -->>
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.backgroundColor = "#ff5733";
        link.style.color = "white";
    } );
    link.addEventListener("mouseout", () => {
        link.style.backgroundColor = "" ;
        link.style.color = "";
        setTimeout(() => {
            link.target.style.color = "";
          }, 500);
    });
    link.addEventListener("mousedown",()=>{
        link.style.backgroundColor="#d94525 ";
        link.style.color="white";
        link.style.transiton="0s";
        link.style.transform="scale(.9)";
        
    })
    link.addEventListener("mouseup",()=>{
        link.style.backgroundColor="";
        link.style.color="";
        link.style.transiton="0.3s";
        link.style.transform="scale(1)";
        
    })
});

//Click ------->
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", (e) => {
        e.target.style.height = "100%";
        e.target.style.width = "100%";
        e.target.style.objectFit = "cover";
        e.target.style.objectPosition = "center";
    });
});

//Random Color --------->
const RandomColor=document.querySelector(".intro p");

function randomRgb(event){

    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    
    return  `rgb(${r}, ${g}, ${b})`
    }
RandomColor.addEventListener("mouseenter", (event) =>{event.target.style.backgroundColor = randomRgb();});




// Alert Sample--------->
const titleH1=document.querySelector("h1");
titleH1.addEventListener("mouseover",(event) => {event.target.style.color="red"});
titleH1.addEventListener("click",function(e){
alert("Bana tıkladın!")
});

//mouseover:------->
const navLink=document.querySelectorAll(".nav-link")

navLink[2].addEventListener("mouseover",(event) => {event.target.style.color="red"});

navLink[1].addEventListener("mouseover",(event) => {event.target.style.fontSize='20px'});

//Wheel:---------->
const introH1 = document.querySelector(".intro h2")
let count = 0;
document.addEventListener("wheel", () => {
    count++
    introH1.innerHTML = count
    setTimeout(() => {
        introH1.innerHTML = "Eğlence Otobüsüne Hoş geldiniz!"
    }, 600)
})

//DoubleClick--------->
const introImg = document.querySelector(".intro img")
introImg.addEventListener("dblclick", () => {
    introImg.classList.toggle("big")
})



