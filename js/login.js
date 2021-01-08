// 注册
$('#reg').click(function(){

    $.ajax({
        url:"./js/login.json",
        data:{
            un:$('#un').val(),
            pw:$('#pw').val()
        },
        dataType:'json',
        success:function(res){    
            if(res.code==1){
                alert('注册成功');
                console.log(1)
                // 注册成功，信息添加到本地存储，方便同域名下的其他页面访问
                localStorage.setItem('name',$('#un').val());
                localStorage.setItem($('#un').val(), $('#pw').val());
                location.href = "./login.html"
            }
        }
    })
})

// 登录
/* $('#log').click(function(){
    
    $.ajax({
        url:"./js/login.json",
        data:{
            un:$('#un').val(),
            pw:$('#pw').val()
        },
        dataType:"json",
        success:function(res){
            alert('登录成功');
            if(res.code==1){
                // 登录成功，信息添加到本地存储，方便同域名下的其他页面访问
                localStorage.setItem('name',$('#un').val());
                location.href = "./car.html"
            }
        }
    })
}) */

$('#log').click(function () {
    /*   console.log(localStorage.getItem($('#username').val())); */
    if (localStorage.getItem($('#un').val()) == $('#pw').val()) {
      alert('登录成功');
      localStorage.setItem('name', $('#un').val());
      location.href = './detail.html';
    } else {
      alert('用户名或密码错误');
    }
  });


// 退出登录
$('#logout').click(function(){
    localStorage.removeItem('name')
})