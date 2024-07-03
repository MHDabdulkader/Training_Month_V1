$(document).ready(
    function(){
        // bar sign tah cross hoi jai
        $('.fa-bars').click(function(){
            $(this).toggleClass('fa-times');
            $('.NavBar').toggleClass('nav-toggle');
        })
        // scroll time times icon + toggle item golo removed hobe

        $(window).on('scroll load', function(){
            $('.fa-bars').removeClass('fa-times');
            $('.NavBar').removeClass('nav-toggle');


            if($(window).scrollTop()>30){
                $('header').addClass('header-active');
            }
            else{
                $('header').removeClass('header-active');
            }

            $('section').each(function(){
                var top = $(window).scrollTop();
                var id = $(this).attr('id');
                var height = $(this).outerHeight();;
                var offset = $(this).offset().top -200;
    
                // console.log(top, id, height, offset);
    
                if(top >= offset && top < height+offset){
                    $('.NavBar ul li a').removeClass('active');
                    $('.NavBar').find('[href="#'+id+'"]').addClass('active');
                }
            })
        })


        
    }
)