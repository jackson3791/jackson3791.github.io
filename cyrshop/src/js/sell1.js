// alert(2)  测试该文件是否有起作用
showList()
function showList(){
    $.ajax({
        url:"./js/sell1.json", //相对于html写的相对地址
        dataType:"json",
        success:function(res){
            // console.log(1) 测试是否成功
            if(res){
                $('.sell1_inner>ul').empty();
                $.each(res,function(index,sell1){
                    $('.sell1_inner>ul').append(
                        `<li>
                        <a href="./detail.html">
                            <img src="${sell1.sell1_img}" alt="">
                        </a>
                    </li>`) 
                });
                //这里的选择器,必须要选到你想指的那个子元素
                $('.sell1_inner>ul>li:last-child').addClass('sell1_inner_limg');
            }
        }
    })
}