

//大总管变量
var c= 0;
//获得屏幕高度
var win_height = $(window).height();
//获得总屏数
var total = $("#container .box").length;
$("body").swipeUp(function () {
    c++;
    if(c==total){
        c=total-1;
        return;
    }
    // 找到c号box里的运动元素,删除他们的aninmated
    $("#container .box").eq(c).find(".ani").hide().removeClass("animated");
    //设置定时器.1秒钟后加回去
    setTimeout(function () {
        $("#container .box").eq(c).find(".ani").show().addClass("animated");
    },1000);

// 计算应该到达的top值
    var t = c * -win_height;
    //将应该到达的top值复制过去
    $("#container").css({"margin-top":t});
})

$("body").swipeDown(function () {
    c--;
    if(c==-1){
        c=0;
        return;
    }
    // 找到c号box里的运动元素,删除他们的aninmated
    $("#container .box").eq(c).find(".ani").hide().removeClass("animated");
    //设置定时器.1秒钟后加回去
    setTimeout(function () {
        $("#container .box").eq(c).find(".ani").show().addClass("animated");
    },1000);

// 计算应该到达的top值
    var t = c * -win_height;
    //将应该到达的top值复制过去
    $("#container").css({"margin-top":t});
})


//音乐区
var music = document.getElementById("music");
var music_pic = document.getElementsByClassName("music_pic")[0];
var music_gif = document.getElementsByClassName("music_gif")[0];
var bjyy = document.getElementsByClassName("bjyy")[0];
var sta = 1;

music.onclick = function () {
    if(sta==1){
        music_gif.style.display = "none";
        music_pic.style.animation = "none";
        bjyy.pause();
        sta=2;
    }else if(sta==2){
        music_gif.style.display = "block";
        music_pic.style.animation = "xz 3s linear infinite";
        sta=1;
        bjyy.play();
    }
}



//音乐区结束