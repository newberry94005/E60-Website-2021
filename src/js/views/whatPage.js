let what = {};

what.location = "#what";

what.setWhatPage = ()=>{

    $(what.location).html(templates.whatPage());
    
    console.log("inside what page");

    what.setWhatLinks();
    
}

what.setWhatLinks = ()=>{
    $("#what .bookNowLargeButton").off().on("click", ()=>{
        viewManager.bookNow("WHAT");
    })
}