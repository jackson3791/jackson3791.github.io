if (localStorage.getItem('name')) {
    // 如果本地存储有name属性，说明登录或注册过
    console.log(1)

    var dus = localStorage.getItem('name');
    $('#dus').html(`<a href="#">${dus}</a>`);
    
 
  } 