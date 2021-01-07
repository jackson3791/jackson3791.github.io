
        var mySwiper = new Swiper('.swiper-container', {

            loop: true, // 循环模式选项
            autoplay: {
                delay: 5000,//1秒切换一次
              },
            effect : 'fade',
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable:true
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
        }) 

        //此方法为模拟的，hover到分页器的小圆点后自动触发其本身的click事件
        $(".swiper-pagination-bullet").hover(function() {
            $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
        },function() {
            mySwiper.autoplay.start(); //鼠标移出之后，自动轮播开启
        })
        $('.swiper-container').mouseenter(function(){
            mySwiper.autoplay.stop();
        })
        $('.swiper-container').mouseleave(function(){
            mySwiper.autoplay.start();
        })