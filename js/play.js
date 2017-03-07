window.onload = function() {
    /*
1 监听视频可以播放
2 点击可以样式 并且控制播放
3 视频的总时间显示在规定位置
4 视频播放过程规定位置随时间改变
5 播放过程中进度条随时间变化而变化
6 点击进度条的位置进行跳波
7 点击全屏可以全屏播放
8 播完结束，按钮 进度条 事件还原


 */

    var video = document.querySelector('video'),
        play = document.querySelector(".switch"),
        total = document.querySelector(".total"),
        expand = document.querySelector(".expand"),
        current = document.querySelector(".current"),
        line = document.querySelector(".line"),
        bar = document.querySelector(".bar"),
        time, h, m, s;

    video.oncanplay = function() {
        // 
        time = video.duration;
        h = Math.floor(time / 3600);
        m = Math.floor(time % 3600 / 60);
        s = Math.floor(time % 3600 % 60);
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        total.innerHTML = h + ":" + m + ":" + s;
    };

    play.onclick = function() {
        video.style.display = 'block';
        this.classList.toggle('fa-pause');
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };

    video.ontimeupdate = function() {
        time = video.currentTime;
        h = Math.floor(time / 3600);
        m = Math.floor(time % 3600 / 60);
        s = Math.floor(time % 3600 % 60);
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        current.innerHTML = h + ":" + m + ":" + s;
        var curT = (time / video.duration) * 100 + "%";
        line.style.width = curT;
    };

    bar.onclick = function(e) {
        var a = e.offsetX,
            b = this.offsetWidth;
        console.log(1)
        video.currentTime = video.duration * (a / b);
    };

    expand.onclick = function() {
        video.webkitRequestFullScreen();
    };

    video.onended = function() {
        play.classList.remove("fa-pause");
        video.currentTime = 0;
    };

}