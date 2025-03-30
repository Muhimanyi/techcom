function handelresize() {
    var windowwidth = window.innerWidth;
    if (windowwidth <= 767) {
        $("header").css({ 'display': 'block' })
        $("#menu").css({ 'display': 'none' })
        $("#search").css({ 'display': 'none' })

    }
    else {
        $("header").css({ 'display': 'flex' })
        $("#menu").css({ 'display': 'flex' })
        $("#search").css({ 'display': 'block' })

    }
}
window.addEventListener('resize', handelresize);