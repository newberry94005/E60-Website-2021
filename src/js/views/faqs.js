let faqs = {};

faqs.location = "#faqs";

faqs.setFaqsPage = ()=>{

    $(faqs.location).html(templates.faqs());
    
    console.log("inside FAQs page");

    faqs.setFAQLinks();
    
}

faqs.setFAQLinks = ()=>{
    var open = false; 

    // opens and closes answer and spins arrow
    $(".question_block").off().on( "click" , function(){
        
        $(this).find(".answer").slideToggle();

        if ($(this).find(".down_arrow").attr("class") == "down_arrow active"){

            $(this).find(".down_arrow").removeClass("active");
            open = false;

        } else if ($(this).find(".down_arrow").attr("class") == "down_arrow"){

            $(this).find(".down_arrow").addClass("active");
            open = true;
        }

    });

    $(".bookNowLargeButton").off().on("click", ()=>{
        viewManager.bookNow("FAQs");
    })
}