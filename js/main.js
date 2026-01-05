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