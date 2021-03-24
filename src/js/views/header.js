let header = {};

header.autoRun = true;

header.location = "#header";

header.setHeader = ()=>{

    $(header.location).html(templates.header());

    $("#home").off().on("click", function(){
        viewManager.registerView("#home");
    })

    $("#logout").off().on("click", function(){
        auth.logout();
    });

}

$(document).ready(function() {
    // IF AUTORUN IS ON, START THE PAGE
    if(header.autoRun){
        header.setHeader();
    }
});


