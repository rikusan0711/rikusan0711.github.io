$(".chanegcolor1").click(function colorchange1(){
    $('.area').css("background-image","linear-gradient(45deg,rgba(0,201,255,0.9),rgba(146,255,157,0.8)),url(./imgs/umiback.webp)");
    $('.circles li').css("background-color","#b2fefa");
});

$(".chanegcolor2").click(function colorchange2(){
    $('.area').css("background-image","linear-gradient(45deg,rgba(255,106,0,0.9),rgba(238,9,121,0.8)),url(./imgs/umiback.webp)");
    $('.circles li').css("background-color","#ff7f50");
});

$(".chanegcolor3").click(function colorchange3(){
    $('.area').css("background-image","linear-gradient(45deg,rgba(54,0,51,0.9),rgba(11,135,147,0.8)),url(./imgs/umiback.webp)");
    $('.circles li').css("background-color","#483d8b");
});

$(".closeimg").click(function closewindow(){
    window.open('about:blank','_self').close();
});

$(".circles li").click(function movecircle(){
    var circle_number = $(".circles li").index(this);
    $(this)
        .animate({'marginLeft':'10px'}, 40)
        .animate({'marginLeft':'-8px'}, 40)
        .animate({'marginLeft':'6px'}, 40)
        .animate({'marginLeft':'-4px'}, 40)
        .animate({'marginLeft':'2px'}, 40)
        .animate({'marginLeft':'-0px'}, 40);
});

document.body.addEventListener("click", drop, false);

function drop(e) {

    var x = e.pageX;
    var y = e.pageY;

    var sizuku = document.createElement("div");
    sizuku.style.top = y + "px";
    sizuku.style.left = x + "px";
    document.body.appendChild(sizuku);

    sizuku.className = "sizuku";

    sizuku.addEventListener("animationend", function() {
        this.parentNode.removeChild(this);
    }, false);
}
