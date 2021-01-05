var ann_ul = $('.mni3s').find('ul');
    // console.log(ann_ul);
    ann_ul.index = 0;
    ann_ul[0].timer = setInterval(function(){
        ann_ul.index++;
        if(ann_ul.index == ann_ul.children().length){
            ann_ul.index = 1;
            ann_ul.css('marginTop',0);
        }
        ann_ul.animate({
            marginTop:-43 * ann_ul.index
        })   
    },2000)
    ann_ul.mouseover(function(){
        clearInterval(ann_ul[0].timer);
        ann_ul[0].timer = null;
    })
    ann_ul.mouseout(function(){
        ann_ul[0].timer = setInterval(function(){
            ann_ul.index++;
            if(ann_ul.index == ann_ul.children().length){
                ann_ul.index = 1;
                ann_ul.css('marginTop',0);
            }
            ann_ul.animate({
                marginTop:-43 * ann_ul.index
            })   
        },2000)
    })