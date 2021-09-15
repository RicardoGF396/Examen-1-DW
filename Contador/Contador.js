let num = 0;
const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");
const imgEnojado = document.querySelector(".enojado");
const imgFeliz = document.querySelector(".feliz");
const imgSerio = document.querySelector(".serio");


btns.forEach((btn) => {

    btn.addEventListener("click", (event) => {
        const styles = event.currentTarget.classList;
        if (styles.contains("btn-danger")) {
            num--;
        } else if (styles.contains("btn-success")) {
            num++;
        } else {
            num = 0;
        }

        value.textContent = num;


        if (num > 0) {
            value.style.color = "green";
            imgFeliz.classList.add("active");
            imgFeliz.classList.remove("hidden");

            imgEnojado.classList.remove("active")
            imgEnojado.classList.add("hidden")

            imgSerio.classList.remove("active")
            imgSerio.classList.add("hidden")
        }
        if (num < 0) {
            value.style.color = "red"
            imgEnojado.classList.add("active")
            imgEnojado.classList.remove("hidden")

            imgFeliz.classList.remove("active");
            imgFeliz.classList.add("hidden");

            imgSerio.classList.remove("active")
            imgSerio.classList.add("hidden")

        }
        if (num === 0) {
            value.style.color = "#222";
            imgSerio.classList.add("active")
            imgSerio.classList.remove("hidden")

            imgFeliz.classList.remove("active");
            imgFeliz.classList.add("hidden");

            imgEnojado.classList.remove("active")
            imgEnojado.classList.add("hidden")
        }
    })

});