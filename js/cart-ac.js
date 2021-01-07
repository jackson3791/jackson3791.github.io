var has = $('.cart-ac>input').val();
$(".cart-add").on('click',function(){
    has++;
    $("cart-ac>input").val('');
    $("cart-ac>input").attr("placeholder",has)
})
$(".cart-cut").click(function(){
    has--;
})

