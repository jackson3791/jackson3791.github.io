"use strict";function showList(){$.ajax({url:"./js/sell2.json",dataType:"json",success:function(s){s&&($(".sell2_bigbox>ul").empty(),$.each(s,function(s,l){$(".sell2_bigbox>ul").append('\n                    <li class="grid-items">\n                    <a href="./detail.html" class="thumb">\n                        <p class="grid-img">\n                            <img src="'.concat(l.sell2_img2,'" alt="">\n                        </p>\n                        <div class="grid-title">').concat(l.sell2_title2,'</div>\n                        <p class="grid-desc">').concat(l.sell2_desc2,'</p>\n                        <p class="grid-price">').concat(l.sell2_price2,"</p>\n                    </a>\n                     </li>"))}),$(".sell2_bigbox>ul>li").hover(function(){$(this).addClass("current")},function(){$(this).removeClass("current")}))}})}showList();