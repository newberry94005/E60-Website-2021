let footer = {};

footer.autoRun = true;

footer.location = "#footer";


footer.setFooter = async ()=>{

    home.hoursInfo = await apiGet.getHoursData();

    let newDate = new Date();
    $("#footer").html(templates.footer(moment(newDate).format("YYYY")));

    setFooterLinks();
    header.setCallOptions();

}

function setFooterLinks(){
    $(".faqs_link").off().on("click", ()=>{
        viewManager.registerView("#faqs");
    });

    $(".bookNowLargeButton").off().on("click", ()=>{
        viewManager.bookNow("FOOTER");
    })

    $(".footer_games").off().on("click", ()=>{
        viewManager.registerView("#home");
    });

    $(".footer_how").off().on("click", ()=>{
        viewManager.registerView("#how");
    });

    $(".footer_groups").off().on("click", ()=>{
        viewManager.registerView("#groups");
    });

    $(".footer_what").off().on("click", ()=>{
        viewManager.registerView("#what");
    });

    $(".footer_gift").off().on("click", ()=>{
        viewManager.registerView("#giftcards");
    });
}

$(document).ready(function() {
    // IF AUTORUN IS ON, START THE PAGE
    if(footer.autoRun){
        footer.setFooter();
    }
});
