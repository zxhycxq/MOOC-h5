/**
 * Created by Administrator on 2016/8/21 0021.
 */
window.onload = function () {
    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];

    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    audio.addEventListener("ended", function (event) {
        music.setAttribute("class", "");
        // music.style.animationPlayState="paused";
        // music.style.webkitanimationPlayState="paused";
    }, false);
    //点击音乐图标，控制音乐播放器
    /*  music.onclick=function(){
     手机端300ms延迟
     };*/
    music.addEventListener("touchstart", function (event) {
        if (audio.paused) {
            audio.play();
            this.setAttribute("class", "play");
            // this.style.animatePlayState="running";
            // this.style.webkitanimatePlayState="running";
            //低版本安卓不兼容，iPhone6 Plus才可
        } else {
            audio.pause();
            this.setAttribute("class", "");
            // this.style.animatePlayState="paused";
        }
    }, false);
    //点击屏幕翻页效果
    page1.addEventListener("touchstart", function (event) {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top     = "100%";

        setTimeout(function () {
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        }, 5500);
    }, false);
};