window.addEventListener("load", function() {
    const loader = document.getElementById("page-loader");
    if (!loader) return;
    loader.classList.add("loader-hidden");
    
    loader.addEventListener("transitionend", () => {
        loader.remove();
    });
});