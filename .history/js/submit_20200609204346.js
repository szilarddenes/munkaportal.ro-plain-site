
$("#button").click(function() {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');

                }, false);
            });
        }, false);
    })();

    var x = document.getElementById("gsheetForm")
    var b = document

    if (x.classList.contains("was-validated")) {

        header.classList.add('transpp');
        // remove blue button, transition to grey loading circle - change 1500 to loadtime of when form is completed
        $("#button").addClass("grey-button");
        $("#circle").addClass("grey-outline");
        setTimeout(function() {
            $(".grey-button").addClass("disappear");
            $("#finish").removeClass("disappear");
            // $("#form").addClass("disappear");


            // once grey loading circle is complete, remove submission form, make confirmation text appear

            $(".column").addClass("disappear");
            // $("#confirm").animate({
            //     width: 'toggle'
            // });

            $("#circle").removeClass("grey-outline");

            setTimeout(function() {
                $(".column").removeClass("disappear").fadeIn('slow');
            }, 500)

        }, 1500);




    }

});