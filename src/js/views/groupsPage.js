let groups = {};

groups.location = "#groups";

groups.setGroupsPage = ()=>{

    $(groups.location).html(templates.groupsPage());
    
    //console.log("inside groups page");

    groups.setGroupLinks();
    
}

groups.setGroupLinks = ()=>{

    $(".contact_us").off().on("click" , function(){
        
        //contact.setContactPage(contact.location);
        //scrollToTop();
        window.open("/app/groupbooking.html","_self");
    })
}

function scrollToTop(){
    $('html, body').animate({scrollTop:$('#contact').position().top - 100}, 'slow');
}