
window.onload = function() {

    var a = document.getElementById("unblur");
    a.onclick = function() {
        document.getElementById("splash").style.animation = "backgroundFadeOut 2s";
        document.getElementById("splash").style['animation-play-state'] = "running";

        document.getElementById("textContainer").style.animation = "zoomOut 2s";
        document.getElementById("textContainer").style['animation-play-state'] = "running";

        for(var i=8; i>0, i--;)
        {
            document.getElementById("bg-image").style.filter= "blur(" + i.toString() + "px)"
        }

        setTimeout(function () {
            document.getElementById("bg-image").style.filter = "none";

            document.getElementById("content").style.display = "none";

        }, 2000);
        

        return false;
    }
}