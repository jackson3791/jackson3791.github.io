var  spanArr = document.querySelectorAll('#resign_tip')
console.log(spanArr)
	//1 书写监测用户名的函数
	function checkUsername(){
		//测试用户名的正则
		var reg = /^\d{11}$/;
		//获取的输入的用户名
        var username = document.querySelector('#un').value;
        // console.log(username)
		if(reg.test(username)){
			//如果输入的用户名符合正则,正确
			spanArr[0].innerHTML = "手机号可以注册";
			return true;
		}else{
			//如果输入的用户名不符合正则,错误
			spanArr[0].innerHTML = '手机号必须为11位数';
			return false;
		}
	}

	//2 书写监测密码强度的函数
	function checkPassword(){
		/* 
			定义一个高强度密码的标准
				1 8到12位:/^[\w~!@#$%^&*]{8,12}$/
				2 有数字
				3 有大写字母
				4 有小写字母
				5 有特殊符号
			定义一个低强度密码的标准
				密码必须是8-12的字母,数字或者特殊符号:/^[\w~!@#$%^&*]{8,12}$/
		*/
		//获取输入的密码
        var password = document.querySelector('#pw').value;
        console.log(password)
		//监测密码
		if(/^[\w~!@#]{8,12}$/.test(password)&&/\d+/.test(password)&&/[A-Z]+/.test(password)&&/[a-z]+/.test(password)&&/[~!@#]+/.test(password)){
			spanArr[1].innerHTML = "密码强度高";
			return true
		}
		if(/^[\w~!@#]{8,12}$/.test(password)){
			spanArr[1].innerHTML = "密码强度低";
			return true
		}else{
			spanArr[1].innerHTML = '密码必须是8-12的字母,数字或者特殊符号';
			return false;
		}		

	}

	
	