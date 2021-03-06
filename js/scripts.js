$(document).ready(_ => {
    $("#carouselButton").click(function () {
        if (
            $("#carouselButton")
                .children("span")
                .hasClass("fa-pause")
        ) {
            $("#mycarousel").carousel("pause");
            $("#carouselButton")
                .children("span")
                .removeClass("fa-pause");
            $("#carouselButton")
                .children("span")
                .addClass("fa-play");
        } else if (
            $("#carouselButton")
                .children("span")
                .hasClass("fa-play")
        ) {
            $("#mycarousel").carousel("cycle");
            $("#carouselButton")
                .children("span")
                .removeClass("fa-play");
            $("#carouselButton")
                .children("span")
                .addClass("fa-pause");
        }
    });

    // Login modal
    $("#loginLink").click(function () {
        $("#loginModal").modal();
    });

    // Reservation Table Modal
    $('#reservationButton').click(function () {
        $('#reservationModal').modal();
    })
});