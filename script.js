document.addEventListener("DOMContentLoaded", () => {

    // Smooth card entrance
    const card = document.querySelector(".card");

    card.animate(
        [
            {
                opacity: 0,
                transform: "translateY(30px) scale(0.96)"
            },
            {
                opacity: 1,
                transform: "translateY(0) scale(1)"
            }
        ],
        {
            duration: 900,
            easing: "cubic-bezier(.2,.8,.2,1)",
            fill: "forwards"
        }
    );

    // Premium hover animation
    document.querySelectorAll("a").forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-4px) scale(1.02)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

    // Ripple click effect
    document.querySelectorAll("a").forEach(button => {

        button.addEventListener("click", function(e){

            const ripple = document.createElement("span");

            ripple.className = "ripple";

            const rect = this.getBoundingClientRect();

            ripple.style.left = (e.clientX - rect.left) + "px";
            ripple.style.top = (e.clientY - rect.top) + "px";

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            },600);

        });

    });

});