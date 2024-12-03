document.addEventListener("DOMContentLoaded", () => {
    var HOME_BUTTON = document.getElementById("home")
    var GUIDELINES_BUTTON = document.getElementById("guidelines")
    var COLLEGE_BUTTONS = document.getElementsByClassName("college")
    var RADIOS = document.getElementsByClassName("radio")
    var distances = document.getElementsByClassName("distance")
    var lots = document.getElementsByClassName("avaible-spots")

    HOME_BUTTON.addEventListener("click", () => {
        location.href = "./index.html";
    })

    GUIDELINES_BUTTON.addEventListener("click", () => {
        location.href = "./guidelines.html";
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

    var randomized_distance = [
        Math.floor(Math.random() * 80) + 1,
        Math.floor(Math.random() * 80) + 1,
        Math.floor(Math.random() * 80) + 1,
        Math.floor(Math.random() * 80) + 1,
        Math.floor(Math.random() * 80) + 1]

    randomized_distance = randomized_distance.sort()

    var randomized_lots = [
        Math.floor(Math.random() * 24) + 1,
        Math.floor(Math.random() * 24) + 1,
        Math.floor(Math.random() * 24) + 1,
        Math.floor(Math.random() * 24) + 1,
        Math.floor(Math.random() * 24) + 1]

    randomized_lots = randomized_lots.sort()

    for (let index = 0; index < distances.length; index++) {
        distances[index].innerHTML = `${randomized_distance[index]} meters`
        lots[index].innerHTML = `${randomized_lots[index]} spots`
    }
})
