document.addEventListener("DOMContentLoaded", () => {
    var HOME_BUTTON = document.getElementById("home")
    var BOOKINGS_BUTTON = document.getElementById("bookings")

    HOME_BUTTON.addEventListener("click", () => {
        location.href = "./index.html";
    })

    BOOKINGS_BUTTON.addEventListener("click", () => {
        location.href = "./booking.html";
    })
})
