window.addEventListener("load", function() {
    const loader = document.getElementById("page-loader");
    loader.classList.add("loader-hidden");
    
    loader.addEventListener("transitionend", function() {
        if (document.body.contains(loader)) {
                document.body.removeChild(loader);
        }
    });
});