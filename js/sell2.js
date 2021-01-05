// alert(2)  测试该文件是否有起作用
showList()
function showList(){
    $.ajax({
        url:"./js/sell2.json", //相对于html写的相对地址
        dataType:"json",
        success:function(res){
            // console.log(1) 测试是否成功
            if(res){
                $('.sell2_bigbox>ul').empty();
                $.each(res,function(index,sell2_2){
                    $('.sell2_bigbox>ul').append(`
                    <li class="grid-items">
                    <a href="" class="thumb">
                        <p class="grid-img">
                            <img src="${sell2_2.sell2_img2}" alt="">
                        </p>
                        <div class="grid-title">${sell2_2.sell2_title2}</div>
                        <p class="grid-desc">${sell2_2.sell2_desc2}</p>
                        <p class="grid-price">${sell2_2.sell2_price2}</p>
                    </a>
                </li>
                        `)
                });
                
                //这里的选择器,必须要选到你想指的那个子元素
                $('.sell2_bigbox>ul>li').hover(
                    function(){
                        console.log(22)
                        $(this).addClass('current')
                    },
                    function(){
                        console.log(33)
                        $(this).removeClass('current')
                    }
                    
                )
            }
        }
    })
}