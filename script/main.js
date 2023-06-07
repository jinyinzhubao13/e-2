$(function(){


    //메인메뉴
    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    }, function(){
        $(this).find(".sub").stop().slideUp();
    })

    //이미지 슬라이드

    // var n=0 // 0 1 2

    // setInterval(function(){
        
    //     if(n == 2){
    //         n=0;
    //     } else{
    //         n++;
    //     }

    //     pos = n * (-600) + "px"
    //     console.log("n:", n)
    //     console.log("pos:", pos)

    //     $(".move").animate({top:pos},500)


    // },2500)

    setInterval(function(){
        
        $(".move").animate({top:"-600px"},500,function(){
            $(".move").append( $(".move li").eq(0) );
            $(".move").css({top:"0"})
        })

    
    },2500)


    $(".pop").click(function(){
        $(".pop_bg, .popup").show();
    })
    $(".close").click(function(){
        $(".pop_bg, .popup").hide();
    })
    




}) //jq