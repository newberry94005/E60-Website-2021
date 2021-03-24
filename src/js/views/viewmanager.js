const viewManager = {}
viewManager.currentView = null;
viewManager.fadeOutTime = 400;
viewManager.fadeInTime = 400;

//REGISTER VIEW AND GO 
viewManager.registerView = (view, go=true, args)=>{
    // Set to false if you just want to register/update the URL Query but not reload the page
    console.log(utils.momentGetTimeFormat(moment().format())+": "+"Changing View To "+ view);
    history.pushState(args, '', view );
    
    if(go){
        // Wait Before Showing the Loading Screen If you Can
        viewManager.stillWaiting = setTimeout(function(){
            //console.log(utils.momentGetTimeFormat(moment().format())+": "+"View Took Too Long... Showing Additional Loading");
            utils.showLoading("Still working on it...");
        },1500);

        viewManager.hideViews();
    }
}

viewManager.hideViews = ()=>{
    // Add in all VIEWS here to fade all out
    $("#home").fadeOut(viewManager.fadeOutTime).promise().done(function(){
        //console.log(utils.momentGetTimeFormat(moment().format())+": "+"All Views Have Been Removed");
        goToView();
    });
}

// VIEW MANAGER
function goToView(){
    // Clean up old views before loading a new one
    viewManager.cleanViews();

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
       
        // Do something specific for each view you register
        if(newView === "home"){
            viewManager.currentView = "home";
            viewManager.loadView("home", home.setHomePage);
        }else{
            // If there is not a view that matches the supplied URL Query then it will default to home
            viewManager.goHome();
        }
    }else{
        viewManager.goHome();
    }
} 

viewManager.loadView = (viewToLoad, loadFunction)=>{
    //console.log(utils.momentGetTimeFormat(moment().format())+": "+"Loading View, "+viewToLoad);
    
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
    consoleLogger("Couldn't find page, returning home...");
    viewManager.currentView = "station";
    viewManager.registerView("#station");
}


