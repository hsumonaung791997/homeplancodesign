$(document).ready(function() {

    // Start back to top

    $('.btn-backtotops').hide();
    $(window).scroll(function(){
        let getscrolltops = $(this).scrollTop();
        
        if(getscrolltops >= 370){
            $('.btn-backtotops').fadeIn(1000);
        }else{
            $('.btn-backtotops').fadeOut(1000);
        }
    })

    // End back to top

    //Start Header

    //Start nav section


    //or Bugger button
    $('.navbuttons').click(function() {
        $(this).toggleClass('crossxs');
    });

    $(window).scroll(function() {
        let getscrolltop = $(this).scrollTop();

        if (getscrolltop >= 200) {
            $('.navbar').addClass('navmenus');
        } else {
            $('.navbar').removeClass('navmenus');
        }



    });

    //for nav



    //End nav section



    //End header



    // Start Properties


    //lightbox

    lightbox.option({
        showImageNumberLabel: false
    });


    $('.propertylists').click(function() {

        //For activeitems change class
        $(this).addClass('activeitems').siblings().removeClass('activeitems');


        //For filter

        let getattvalue = $(this).attr('data-filter');


        if (getattvalue === 'all') {
            $('.filters').show('slide', 500);
        } else {


            $('.filters').hide("slide", 500);

            $('.filters').not('.' + getattvalue).hide("slide", 500);

            $('.filters').filter('.' + getattvalue).show('slide', 500);
        }


    });

    //End Properties


    //Start Adv Section
    $(window).scroll(function() {
            let getscrolltop = $(this).scrollTop();
            if (getscrolltop >= 900) {
                $('.advimages').addClass('fromlefts');
                $('.advtexts').addClass('fromrights');
            } else {
                $('.advimages').removeClass('fromlefts');
                $('.advtexts').removeClass('fromrights');
            }
        })
        //End Adv Section


        //Start Footer Section
        const getyear = $('#getyear');
        let getfullyear = new Date().getFullYear();
        getyear.text(getfullyear);


        // End Footer Section
});