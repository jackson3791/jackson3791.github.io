// 不是所有人都能进购物车，只有登录或者注册成功的人才能进入购物
if (localStorage.getItem('name')) {
    // 如果本地存储有name属性，说明登录或注册过
    $('#h11').html(localStorage.getItem('name') + '的购物车');
  } else {
    location.href = './resign.html';
  }

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
        console.log(productList)
        if(productList.length<1){
            $('thead').attr('display',none);
            $('h2').attr('display',block);
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
                            <td> <span class="add">+</span> <b>${product.product_num}</b> <span class="cut">-</span></td>
                            <td>${product.product_price}</td>
                            <td>¥ 3299.00</td>
                            <td>
                                <button class="btn btn-danger del">删除</button>
                            </td>
                </tr>`)
    })
}
     /*  // 2 用户点击+或者-可以修改当前商品的数量 */
  $('.add').click(function () {
      console.log(1)
    /* console.log($(this).next().text() / 1) + 1; */
    $(this)
      .next()
      .text($(this).next().text() /1 + 1);
  });
  $('.cut').click(function () {
    /*   console.log($(this).next().text() - 1); */
    $(this)
      .prev()
      .text($(this).prev().text() - 1);
    /*   if ($(this).prev().text($(this).prev().text()) === 0) {
      console.log(1);
    } */
  });
  
  // 3 用户点击删除可以删除当前商品,删除完成后要重新渲染/h2
  var delArr = document.querySelectorAll('.del');
  var h2 = document.querySelector('h2');
  var thead = document.querySelector('thead');
  var aa = delArr.length;
  for (var i = 0; i < delArr.length; i++) {
    delArr[i].onclick = function () {
      var result = confirm('确定要删除吗?');
      if (result) {
        console.log(aa);
        /* console.log(this.parentNode.parentNode); */
        let tr = this.parentNode;
        tr.parentNode.parentNode.removeChild(tr.parentNode);
        aa--;
        if (aa == 0) {
            $('h2').show();
          thead.style.display = 'none';
        }
      }
    };
    /*  if (aa == 0) {
   
   
    } */
}



$("#allCheckBok").click(function() {
    var checked = $(this).is(":checked");
    $(".td_1").attr("checked", checked)
});   

// 2 用户点击+或者-可以修改当前商品的数量

// 3 用户点击删除可以删除当前商品,删除完成后要重新渲染table/h2