(function($){
    class Obj{
        init(){
            this.header();
            this.section1();
            this.section2();
            this.footer();
        }
        header(){
            //메뉴창
            $('.main-btn').on({
            mouseenter(){
                $('.sub').stop().slideUp(0);
                $(this).next().stop().slideDown(300);
                $('.main-btn').removeClass('on');
                $(this).addClass('on');
            },

            })
            $('.col').on({
            mouseleave(){
                $('.sub').stop().slideUp(200);
                $('.main-btn').removeClass('on');
            },
            //탭 이동
            focus(){
                $('.sub').stop().slideUp(0);
                $(this).next().stop().slideDown(300);
                $('.main-btn').removeClass('on');
                $(this).addClass('on');
            }
            })
        }
        // 메인슬라이드
        section1(){
            let cnt=0;
            function mainSlide(){ 
                $('.slide-wrap').stop().animate({left:`${-100*cnt}%`}, 600,function(){
                    if(cnt>2) cnt=0;
                    $('.slide-wrap').stop().animate({left:`${-100*cnt}%`}, 0);
                });
            }
            function nextCount(){
                cnt++;
                mainSlide();
            }
            function autoTimer(){
                setInterval(nextCount, 3000);
            }
            autoTimer();
        }

        // 공지사항 첫줄 클릭 팝업띄우기
        section2(){
            $('.notice-btn').on({
                click(){
                    $('.notice-btn').removeClass('on');
                    $('.notice-box').show(0);
                }
            })
            $('.popup-btn').on({
                click(){
                    $('.popup').css({display:'flex'});
                }
            });

            $('.close-btn').on({
                click(){
                    $('.popup').css({display:'none'});
                }
            });
        }

        //패밀리사이트
        footer(){
            // $('#family').on({
            //     change(){
            //         window.open($(this).val() );
            //     }
            // })
            $('#family').on('change', function() {
                var selectedValue = $(this).val();
                if (selectedValue !== "") {
                    window.open(selectedValue);
                }
            }); 

        }


    }
    const obj = new Obj();
    obj.init();
})(jQuery);