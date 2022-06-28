
onload = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var ww = document.getElementById('restext');
    ww.innerText = w+'x'+h;
}

window.addEventListener('resize', function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var ww = document.getElementById('restext');
    ww.innerText = w+'x'+h;
});
