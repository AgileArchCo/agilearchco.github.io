document.addEventListener("DOMContentLoaded", () => {
    var BOOKINGS_BUTTON = document.getElementById("bookings")
    var GUIDELINES_BUTTON = document.getElementById("guidelines")
    var BOOK_BUTTON = document.getElementById("book")
    
    BOOKINGS_BUTTON.addEventListener("click", () => {
        location.href = "/booking.html";
    })

    GUIDELINES_BUTTON.addEventListener("click", () => {
        location.href = "/guidelines.html";
    })
})