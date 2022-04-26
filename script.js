$(".Part-two-yes").hide();
$(".Part-two-no").hide();
$(".Ending-yes").hide();


$(".yes-button").click(function() {
$(".Part-two-yes").show();
$(".start").hide();
});

$(".no-button").click(function() {
$(".Part-two-no").show();
$(".start").hide();
});
