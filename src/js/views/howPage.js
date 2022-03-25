let how = {};

how.location = "#how";

how.setHowPage = ()=>{

    $(how.location).html(templates.howPage());
    
    console.log("inside how page");

    how.setHowLinks();
    
}

how.setHowLinks = ()=>{
    $("#how .bookNowLargeButton").off().on("click", ()=>{
        viewManager.bookNow("HOW");
    })
}