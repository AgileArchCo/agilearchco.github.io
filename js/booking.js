document.addEventListener("DOMContentLoaded", () => {
    var HOME_BUTTON = document.getElementById("home")
    var GUIDELINES_BUTTON = document.getElementById("guidelines")
    var COLLEGE_BUTTONS = document.getElementsByClassName("college")
    var RADIOS = document.getElementsByClassName("radio")

    HOME_BUTTON.addEventListener("click", () => {
        location.href = "./index";
    })

    GUIDELINES_BUTTON.addEventListener("click", () => {
        location.href = "./guidelines";
    })

    for (let index = 0; index < COLLEGE_BUTTONS.length; index++) {
        let radio = RADIOS[index]

        COLLEGE_BUTTONS[index].addEventListener("click", () => {
            for (let index2 = 0; index2 < RADIOS.length; index2++) {
                if (index == index2) continue;
                RADIOS[index2].checked = false;
                if (RADIOS[index2].classList.contains("checked"))
                    RADIOS[index2].classList.remove("checked")
            }

            radio.classList.toggle("checked")
            console.log(radio.classList.contains("checked"))
            radio.checked = radio.classList.contains("checked");
        })
    }
})
