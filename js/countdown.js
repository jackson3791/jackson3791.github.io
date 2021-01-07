
  var lefthour = 23-(new Date()).getHours();
  var leftminutes = 59- (new Date()).getMinutes();
  var leftseconds = 59 - (new Date()).getSeconds();

  var endDate=Date.now()+((lefthour+10)*1000*60*60)+leftminutes*1000*60+leftseconds*1000+1000*8*60;


 var  t1 = setInterval(function countDown(){
    $('.countdowntime').empty();
    var nowTime   = Date.now();
    var diff= parseInt((endDate - nowTime)/1000);
    var nextDay = (new Date().getDate())+1
    month = (new Date().getMonth()) +1
    if(nextDay==32){
        month = month + 1;
        nextDay=1
    }
    // console.log(month)
    // console.log(nextDay)
    var day = parseInt(diff/(24*60*60));
    //后面括号对应day/hour/min时间长度
    diff = diff - day*24*60*60;
    var hour = parseInt(diff/(60*60));

    diff = diff - hour*60*60;
    var minutes = parseInt(diff/60);

    var second = diff - minutes*60;

    $('.countdowntime').append(` <p>01月${nextDay}日 10:08开售:	</p>
    <ul>
        <li><span>${day}</span></li>
        <li><em>天</em></li>
        <li><span>${hour}</span></li>
        <li><em>:</em></li>
        <li><span>${minutes}</span></li>
        <li><em>:</em></li>
        <li><span>${second}</span></li>
    </ul>`)

},1000)

