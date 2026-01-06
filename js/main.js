(function(){
    function ensureOffcanvasClosedOnWide(){
        if (window.innerWidth >= 768){
            var open = document.querySelector('.offcanvas.show');
            if (open){
                var inst = bootstrap.Offcanvas.getInstance(open);
                if (!inst) inst = new bootstrap.Offcanvas(open);
                try { inst.hide(); } catch(e) { /* ignore */ }
            }
            var backdrop = document.querySelector('.offcanvas-backdrop');
            if (backdrop) backdrop.remove();
            document.body.classList.remove('offcanvas-open');
            document.body.style.overflow = '';
        }
    }
    window.addEventListener('resize', ensureOffcanvasClosedOnWide);
    // run once on load in case an offcanvas was left open
    ensureOffcanvasClosedOnWide();
})();

$(function () {

            // Initialize slider
            $("#slider-range").slider({
                range: true,
                min: 0,
                max: 100,
                values: [15, 60],

                slide: function (event, ui) {
                    $("#output").text(
                        "Min: " + ui.values[0] + " | Max: " + ui.values[1]
                    );
                }
            });

            // Access slider values
            const minVal = $("#slider-range").slider("values", 0);
            const maxVal = $("#slider-range").slider("values", 1);

            $("#output").text("Min: " + minVal + " | Max: " + maxVal);

            // Access handles
            const handles = $("#slider-range .ui-slider-handle");
            const leftHandle = handles.eq(0);
            const rightHandle = handles.eq(1);

            console.log("Left handle:", leftHandle);
            console.log("Right handle:", rightHandle);

            // Programmatically change values after 2 seconds
            setTimeout(() => {
                $("#slider-range").slider("values", [25, 75]);
            }, 2000);
        });