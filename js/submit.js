$("#button-cp").click(function() {

    // remove blue button, transition to grey loading circle - change 1500 to loadtime of when form is completed
    $("#button-cp").addClass("grey-button");
    $("#circle").addClass("grey-outline");

    setTimeout(function() {
        $(".grey-button").addClass("disappear");
        $("#finish").removeClass("disappear");
        $("#form").addClass("disappear");


        // once grey loading circle is complete, remove submission form, make confirmation text appear

        $(".column").addClass("disappear");
        $("#confirm").animate({
            width: 'toggle'
        });


        $("#circle").removeClass("grey-outline");

        setTimeout(function() {
            $(".column").removeClass("disappear").fadeIn('slow');
        }, 500);

    }, 1500);



});

// GENERAL STEPS

// onclick of blue button

// 1 - shrink width of blue button
// 2 - add class(grey-button)

// on completion
// 1 - add class(disappear) to form