var swiper = new swiper(".myswiper-1",{
    slidesPerview:1,
    spacebetween:30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,

    },

    navigation: {
        nextel:".swiper-button-next" ,
        prevEl:".swiper-button.prev" ,
    }


})

var swiper = new Swiper( ".myswiper-2",{

    slidesPerview:3,
    spacebetween:20,
    loop:true,
    loopfillgroupwithblank:true,
    navigation: {
        nextel:".swiper-button-next" ,
        prevEl:".swiper-button.prev" ,
    },

    breakpoints : {
    0: {
        slidesperview:1,
    },    
    520: {
        slidesperview:2,
    }  
      },    
    950: {
        slidesperview:3,
    }

    });

        let tabinputs =  document.querySelectorAll(".tabinput");

        tabinputs.forEach(function(input){

        input.addeventlistener("change", function(){
        let id = input.ariaValueMax;
        let thisSwiper = document.getelementbyid("swiper"+ id);
        thisSwiper.swiper.update()
    })


 })

