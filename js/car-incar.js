function getCart(){
    var list = localStorage.getItem('cart')||"[]"; //字符串
    return JSON.parse(list);
}
function setCart(arr){
    localStorage.setItem('cart',JSON.stringify(arr))
}
showList()
function showList(){
    var productList = getCart();
    console.log(productList)
    $('tbody').empty();
    $.each(productList,function(index,product){
        if(productList.length<1){
            $('tbody').hide();
            $('h2').show();
            return;
        }
        $('table').show();
        $('h2').hide();
        $('tbody').append(
            `
            <tr class="adtr">
                        <td><input type="checkbox" class="td_1"></td>
                        <td>
                            <img class="img-thumbnail" src="${product.product_img}" alt="">
                        </td>
                        <td class="car-deatil">${product.product_name}</td>
                        <td>${product.product_num}</td>
                        <td>${product.product_price}</td>
                        <td>¥ 3299.00</td>
                        <td>
                            <button class="btn btn-danger">删除</button>
                        </td>
            </tr>`)
    })
}



$("#allCheckBok").click(function() {
    var checked = $(this).is(":checked");
    $(".td_1").attr("checked", checked)
});   

        // 2 用户点击+或者-可以修改当前商品的数量
        
        // 3 用户点击删除可以删除当前商品,删除完成后要重新渲染table/h2
        