// Apple Style Interactive Card
const card = document.querySelector(".card");

document.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.clientX)/30;
    const y=(window.innerHeight/2-e.clientY)/30;

    card.style.transform=
    `rotateY(${x}deg) rotateX(${-y}deg)`;

});

document.addEventListener("mouseleave",()=>{

    card.style.transform="rotateY(0deg) rotateX(0deg)";

});

// Smooth Fade In
window.addEventListener("load",()=>{

    card.animate([
        {
            opacity:0,
            transform:"translateY(40px) scale(.95)"
        },
        {
            opacity:1,
            transform:"translateY(0) scale(1)"
        }
    ],{
        duration:900,
        easing:"cubic-bezier(.22,1,.36,1)",
        fill:"forwards"
    });

});

// Button Ripple
document.querySelectorAll("a").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const d=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=d+"px";
circle.style.height=d+"px";

circle.style.left=e.offsetX-d/2+"px";
circle.style.top=e.offsetY-d/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});

// Floating Background
document.querySelectorAll(".light").forEach(light=>{

let x=Math.random()*20;
let y=Math.random()*20;

setInterval(()=>{

x=(Math.random()-0.5)*30;
y=(Math.random()-0.5)*30;

light.style.transform=`translate(${x}px,${y}px)`;

},4000);

});