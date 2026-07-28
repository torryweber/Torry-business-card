document.querySelectorAll("a").forEach(button=>{

button.addEventListener("click",()=>{

navigator.vibrate?.(30);

});

});
