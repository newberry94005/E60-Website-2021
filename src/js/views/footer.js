let footer = {};

footer.autoRun = true;

footer.location = "#footer";


footer.setFooter = ()=>{

    console.log("setting footer");
    $("#footer").html(templates.footer());

}

$(document).ready(function() {
    // IF AUTORUN IS ON, START THE PAGE
    if(footer.autoRun){
        footer.setFooter();
    }
});
