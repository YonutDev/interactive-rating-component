var rating = 0;
$("#rating-1").click(function() {
    if (rating !== 0) $('#rating-'+rating).removeClass('rating-selected');
    $(this).addClass('rating-selected');
    rating = 1;
});
$("#rating-2").click(function() {
    if (rating !== 0) $('#rating-'+rating).removeClass('rating-selected');
    $(this).addClass('rating-selected');
    rating = 2;
});
$("#rating-3").click(function() {
    if (rating !== 0) $('#rating-'+rating).removeClass('rating-selected');
    $(this).addClass('rating-selected');
    rating = 3;
});
$("#rating-4").click(function() {
    if (rating !== 0) $('#rating-'+rating).removeClass('rating-selected');
    $(this).addClass('rating-selected');
    rating = 4;
});
$("#rating-5").click(function() {
    if (rating !== 0) $('#rating-'+rating).removeClass('rating-selected');
    $(this).addClass('rating-selected');
    rating = 5;
});
$("#rating-submit").click(function() {
    if (rating > 0 && rating < 6) {
        $(".rating").css("display", "none");
        $(".rated").css("display", "block");
        $('.rated-result p').text("You selected " + rating + " out of 5");
    }
});