var time = setInterval(function () {
    t();}, 2000)

function t() {
    var he = $(".mni3s_ul>li").height();//找到li高
    $(".mni3s_ul>li").eq(0).appendTo($(".mni3s_ul")); //复制第一个到最后一个
    $(".mni3s_ul").animate({
        "marginTop": "-" + he
    }, 500, function () {
        $(".mni3s_ul").css({
            "marginTop": 0
        })
    })
}