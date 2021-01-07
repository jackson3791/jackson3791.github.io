// 注册
$('#reg').click(function(){
    console.log(1)
    $.ajax({
        url:"./js/login.json",
        data:{
            un:$('#un').val(),
            pw:$('#pw').val()
        },
        dataType:'json',
        success:function(res){
            if(res.code==1){
                // 注册成功，信息添加到本地存储，方便同域名下的其他页面访问
                localStorage.setItem('name',$('#un').val());
                location.href = "./car.html"
            }
        }
    })
})

// 登录
$('#log').click(function(){
    
    $.ajax({
        url:"./js/login.json",
        data:{
            un:$('#un').val(),
            pw:$('#pw').val()
        },
        dataType:"json",
        success:function(res){
            if(res.code==1){
                // 登录成功，信息添加到本地存储，方便同域名下的其他页面访问
                localStorage.setItem('name',$('#un').val());
                location.href = "./car.html"
            }
        }
    })
})

// 退出登录
$('#logout').click(function(){
    localStorage.removeItem('name')
})