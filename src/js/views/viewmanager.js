const viewManager = {}
viewManager.currentView = null;
viewManager.fadeOutTime = 200;
viewManager.fadeInTime = 200;

//REGISTER VIEW AND GO 
viewManager.registerView = (view, go=true, args)=>{
    // Set to false if you just want to register/update the URL Query but not reload the page
    
    if(config.urlQuery.rootURL === "booknow" || config.urlQuery.rootURL === "booknow_voucher"){
        utils.consoleLogger(config.urlQuery.rootURL);
        window.open("index.html"+view,"_self");
    }else{
        utils.consoleLogger(utils.momentGetTimeFormat(moment().format())+": "+"Changing View To "+ view);
        history.pushState(args, '', view );
        
        if(go){
            // Wait Before Showing the Loading Screen If you Can
            viewManager.stillWaiting = setTimeout(function(){
                //console.log(utils.momentGetTimeFormat(moment().format())+": "+"View Took Too Long... Showing Additional Loading");
                //utils.showLoading("Still working on it...");
            },1500);
    
            viewManager.hideViews();
        }
    }

}

viewManager.hideViews = ()=>{
    // Add in all VIEWS here to fade all out
    $("#home, #davyRoom, #egyptRoom, #ransomRoom, #casinoRoom, #footer, .reviews, .sanitation, .hours, #faqs, #groups, #what, #how, #giftcards, #bookNow").fadeOut(viewManager.fadeOutTime).promise().done(function(){
        //console.log(utils.momentGetTimeFormat(moment().format())+": "+"All Views Have Been Removed");
        goToView();
    });
}

// VIEW MANAGER
function goToView(){
    // Clean up old views before loading a new one
    viewManager.cleanViews();

    // STOP all Media
    viewManager.stopAllVideos();

    // Reset/Update the URL Query information with the supplied URL Query to the View Manager
    config.urlQuery = utils.processURL();

    //DEFAULT VIEW
    viewManager.currentView = "home";
    
    // Use the URL Query to set the current view and start the correct {view}.js file
    if(config.urlQuery.view){
        let newView = config.urlQuery.view;
        viewManager.currentURL = utils.processURL();
        //console.log(utils.momentGetTimeFormat(moment().format())+": "+"Waiting for, "+newView);
   
        // Only if you configure Firebase Analytics
        /*
        if(config.analytics){
            analytics.logEvent(`view_loaded_${newView}`, { name: newView, userID: app.currentUser });
        }
        */
       
        console.log(newView);
        // Do something specific for each view you register
        
        if(newView === "home"){
            viewManager.currentView = "home";
            viewManager.loadView("#home", home.setHomePage);
            viewManager.pageViewAnalytics("Home");
        }else if(newView === "davyRoom"){
            viewManager.currentView = "davyRoom";
            viewManager.loadView("#davyRoom", pirateRoom.setPirateRoomPage);
            viewManager.pageViewAnalytics("DAVY");
        }else if(newView === "egyptRoom"){
            viewManager.currentView = "egyptRoom";
            viewManager.loadView("#egyptRoom", egyptRoom.setEgyptRoomPage);
            viewManager.pageViewAnalytics("EGYPT");
        }else if(newView === "ransomRoom"){
            viewManager.currentView = "ransomRoom";
            viewManager.loadView("#ransomRoom", ransomRoom.setRansomRoomPage);
            viewManager.pageViewAnalytics("RANSOM");
        }else if(newView === "rouletteRoom"){
            viewManager.currentView = "rouletteRoom";
            viewManager.loadView("#casinoRoom", casinoRoom.setCasinoRoomPage);
            viewManager.pageViewAnalytics("CASINO");
        }else if(newView === "faqs"){
            viewManager.currentView = "faqs";
            viewManager.loadView("#faqs", faqs.setFaqsPage);
            viewManager.pageViewAnalytics("FAQ");
        } else if(newView === "groups"){
            viewManager.currentView = "groups";
            viewManager.loadView("#groups", groups.setGroupsPage);
            viewManager.pageViewAnalytics("GROUPS");
        } else if(newView === "what"){
            viewManager.currentView = "what";
            viewManager.loadView("#what", what.setWhatPage);
            viewManager.pageViewAnalytics("What Is It");
        } else if(newView === "how"){
            viewManager.currentView = "how";
            viewManager.loadView("#how", how.setHowPage);
            viewManager.pageViewAnalytics("How It Works");
        } else if(newView === "giftcards"){
            viewManager.currentView = "giftcards";
            viewManager.loadView("#giftcards", giftcards.setGiftCardsPage);
            viewManager.pageViewAnalytics("Gift Card");
        }else{
            // If there is not a view that matches the supplied URL Query then it will default to home
            viewManager.goHome();
            viewManager.pageViewAnalytics("Home");
        }
    }else{
        viewManager.goHome();
    }
} 

viewManager.loadView = (viewToLoad, loadFunction)=>{
    //console.log(utils.momentGetTimeFormat(moment().format())+": "+"Loading View, "+viewToLoad);
    
    // Scroll to the top before loading new view
    $('html, body').scrollTop(0);


    // Remove the wait timer on the loading screen
    clearTimeout(viewManager.stillWaiting);
    
    // Stop loading
    utils.stopLoading();
    
    // Wait then fade in the VIEW
    $(viewToLoad).delay(viewManager.fadeOutTime).fadeIn(viewManager.fadeInTime).promise().done(function(){
        //console.log(utils.momentGetTimeFormat(moment().format())+": "+viewToLoad+" Has Loaded");
        // Remove the wait timer on the loading screen
        clearTimeout(viewManager.stillWaiting);

        // DO CUSTOM LOGIC HERE AFTER LOAD
        loadFunction();
        $("#footer, .reviews, .sanitation, .hours").fadeIn();
        

        // Stop loading
        utils.stopLoading();
    });
}

// LISTEN FOR HISTORY CHANGES when the back button or forward button is used
viewManager.startHistoryListener = ()=>{
    // CHECK FOR BROWSER HISTORY CHANGES
    window.onpopstate = (event)=>{
        viewManager.hideViews();
    }		 
}

viewManager.cleanViews = ()=>{
    //Set custom data cleaner for each view
    //home.reset();
}

viewManager.goHome = ()=>{
    utils.consoleLogger("Couldn't find page, returning home...");
    viewManager.currentView = "home";
    viewManager.registerView("#home");
}

viewManager.stopAllVideos = ()=>{
    $("video").each(function () { this.pause() });	    
}

viewManager.bookNow = (referrer)=>{

    utils.showSwal("Select An Option", "A group is 9 or more participants.", "question", true, true, "Book Group (9+)", true, "Book Now (1-8 players)",false,null,"center",null,true,true,"#3085d6","#64af8d").then((result)=>{
        console.log(result);
        if(result){
            viewManager.bookNowAnalytics(referrer);
            window.open("booknow.html", "_self");
        }
    }).catch((result)=>{
        console.log("cancel");
        console.log(result);
        if(result.dismiss == "cancel"){
            viewManager.bookNowAnalytics("GROUP");
            window.open("app/groupbooking.html", "_self");
        }
    })
}
viewManager.bookNowVoucher = (referrer)=>{
    viewManager.bookNowAnalytics(referrer);
    window.open("booknow_voucher.html", "_self");
}

viewManager.bookNowAnalytics = (referrer)=>{
    if(config.analytics){
        gtag('event', referrer+" Book Now Clicked", {
            'event_category': "Book Now",
            'event_label': "Mobile: "+app.isMobile
        });
    }
}

viewManager.pageViewAnalytics = (eventTitle)=>{
    if(config.analytics){
        gtag('event', eventTitle + " Page Viewed", {
            'event_category': "Page View Change",
            'event_label': "Mobile: "+app.isMobile
        });
    }
}
