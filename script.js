$(".lilghostie").hide();
$(".sta-wood").dblclick(function() {
    $(".lilghostie").show();
    $(".be-all").hide();

});

$(".yes-text").hide();
$(".walk-img").hide();
$(".yes-button").click(function() {

});

$(".no-text").hide();
$(".dead-img").hide();
$(".no-button").click(function() {
    $(".dead-img").show();
    $("body").css("color", "");


    $(".no-text").show();
    $(".be-all").hide();

});
$(".after-de").hide();
$(".de-screen").hide();
$(".dead-img").dblclick(function() {
    $(".de-screen").show();
    $(".after-de").show();
    $(".dead-img").hide();
    $(".no-text").hide();
    $(".be-all").hide();
});
$(".rick").hide();
$(".de-screen").dblclick(function() {
    $(".rick").show();
    $(".de-screen").hide();
    $(".after-de").hide();
    $(".be-all").hide();

});
$(".yes-1").hide();
$(".yes-1-img").hide();
$(".left-bu").hide();
$(".right-bu").hide();
$(".death-ri").hide();
$(".2-way").hide();
$(".find-le").hide();
$(".find-le-img").hide();
$(".help-1").hide();
$(".yes-p2-img").hide();
$(".yes-text-2").hide();
$(".scary").hide();
$(".yesed-text").hide();
$(".yesed-img").hide();
$(".sponge-bob").hide();
$(".shrek").hide();

$(".yes-button").click(function() {
    $(".yes-1").show();
    $(".yes-1-img").show();



    $(".yes-1-img").dblclick(function() {
        $(".left-bu").show();
        $(".right-bu").show();
        $(".yes-1").hide();
        $(".yes-1-img").hide();
        $(".2-way").show();

        $(".right-bu").click(function() {
            $(".left-bu").hide();
            $(".right-bu").hide();
            $(".death-ri").show();
            $(".2-way").hide();
        });
        $(".left-bu").click(function() {
            $(".find-le").show();
            $(".find-le-img").show();
            $(".left-bu").hide();
            $(".2-way").hide();
            $(".right-bu").hide();

        });



        $(".find-le-img").dblclick(function() {
            $(".yes-text-2").show();
            $(".yes-p2-img").show();
            $(".find-le-img").hide();
            $(".find-le").hide();
        });

        $(".yes-p2-img").dblclick(function() {
            $(".yes-p2-img").hide();
            $(".yes-text-2").hide();
            $(".scary").show();
        });

        $(".scary").dblclick(function() {
            $(".scary").hide();
            $(".yesed-text").show();
            $(".yesed-img").show();
        });


    });

    $(".hide-no").hide();
    $(".be-all").hide();

});





$(".yesed-img").hide();
$(".yesed-text").hide();


$(".2-way").dblclick(function() {
    $(".help-1").show();
    $(".2-way").hide();
    $(".right-bu").hide();
    $(".left-bu").hide();


});

$(".yesed-img").dblclick(function() {
    $(".yesed-img").hide();
    $(".sponge-bob").show();
    $(".yesed-text").hide();

});


$(".death-ri").dblclick(function() {
    $(".death-ri").hide();
    $(".shrek").show();
});