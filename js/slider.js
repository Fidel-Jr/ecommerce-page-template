$(function () {

            $("#slider-range").slider({
                range: true,
                min: 0,
                max: 500,
                values: [15, 60],

                slide: function (event, ui) {
                    $("#amount").val(
                        ui.values[0] + " - " + ui.values[1]
                    );
                }
            });

            // Set initial value
            $("#amount").val(
                $("#slider-range").slider("values", 0) +
                " - " +
                $("#slider-range").slider("values", 1)
            );
        });