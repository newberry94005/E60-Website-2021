//App Object
let app = {};

app.allData = {};
app.previousOrientation = null;
app.isMobile = false;

// Must be configured here because we only load firebase dependencies after login
const database = firebase.database();
const storage = firebase.storage();


// WAIT FOR DOM BEFORE RUNNING MAIN FEATURES
$(document).ready(function() {
    utils.showLoading();
    // MAIN INITIALIZATION FUNCTIONS
    app.init();
	
});

app.init = ()=>{
    consoleLogger("Initializing...");
        
    // MISC SETUP 
    viewManager.startHistoryListener();
    
    // SETUP MOBILE CHECKS AND RESIZE FUNCTIONS
    setWindowChecks();

    //auth.initAuth();
    viewManager.registerView("#home");
}


// GRAB APPLICATION DATA NEEDED TO START THE APP
app.getAllData = ()=> {
    return new Promise(async (resolve,reject)=>{
        try{
            app.allData = await apiGet.getAppData();
            resolve(app.allData);
        }catch(error){
            console.log(error);
            reject(error);
        }
    })
}

// SHOW LOGIN SCREEN WHEN NOT AUTHENTICATED
app.startLoginScreen = ()=>{
    console.log("starting login screen");
    window.open(config.loginLocation,"_self");
}

///******** HELPER FUNCTIONS FOR MAIN JS  **********/

function setWindowChecks(){
    // GET INITIAL DEVICE WIDTH AND SET
    app.isMobile = utils.checkForMobile();
    utils.checkForAndroid();
    
    // START WINDOW LISTNER FOR RESPONSIVE CHANGES
    $(window).on("resize",function() {
        app.isMobile = utils.checkForMobile();
        utils.checkForAndroid();
    });
}


// HANDLE LOGGING INFORMATION
// REQUIRES LOGGING AND ENVIRONMENT GLOBAL OBJECTS
function consoleLogger(message){
    if(config.logging)
    console.log(config.environment + " Logs: "+ message);
}
