//App Object
let app = {};

app.allData = {};
app.previousOrientation = null;
app.isMobile = false;

// Must be configured here because we only load firebase dependencies after login
const database = firebase.database();
const functions = firebase.functions();

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

    // GET APPLICATION DATA FIRST THEN LOAD HOME
    //*** TO DO
    app.getAllData().then(function(){

        calculateRoomOrder();
        setHomeRoomBoxes();
        setSanitation();
        setReviews();
        setGameDetails();

        getAPIDataForRoomBoxes();
    
    
        viewManager.registerView("#"+config.urlQuery.view);
    });
}

function setReviews(){
    $(".reviews").html(templates.reviews());
}

function setSanitation(){
    $(".sanitation").html(templates.sanitation());
}

function setGameDetails(){
    for(let item in home.roomInfo){
        let roomName = home.roomInfo[item].keyName.toLowerCase();
        $("#"+roomName+"Room").find(".room_capacity").html(home.roomInfo[item].roomCapacity);
        $("#"+roomName+"Room").find(".room_diff_info").html(home.roomInfo[item].roomInfo);
    }
}

function calculateRoomOrder(){
    home.roomOrder = [];
    Object.values(home.roomInfo).forEach(function(item){
        home.roomOrder.splice(item.roomOrder, 0, item.keyName);
    })
}

function setHomeRoomBoxes(){
    $("#gameBoxes ").html('');
    let boxItems = [];
    for(let item of home.roomOrder){
        boxItems.push(templates.gameBoxes(
            home.roomInfo[item].boxID, 
            home.roomInfo[item].boxName, 
            home.roomInfo[item].roomName, 
            home.roomInfo[item].roomInfo,
            home.roomInfo[item].roomCapacity, 
            home.roomInfo[item].backgroundImage,
            home.roomInfo[item].roomLogo,
            home.roomInfo[item].tagline
            ));
    }
    $("#gameBoxes").append(templates.homeBoxStructure(boxItems[0],boxItems[1],boxItems[2],boxItems[3]));
    
}

async function getAPIDataForRoomBoxes(){
    if(header.refreshData){
        consoleLogger("REFRESHING API DATA");
       
        
        let roomName = "davy";
        for(let item in home.roomInfo){
            roomName = home.roomInfo[item].keyName.toLowerCase();
            console.log(roomName);

            //Example: Davy Jones Product ID - 3154TMWNLY14911CC5E46
            utils.showLoading("","#"+home.roomInfo[item].boxID, templates.availabilityLoader, roomName+"Loader");
            utils.showLoading("","#"+roomName+"Room #"+home.roomInfo[item].boxID, templates.availabilityLoaderRoom, roomName+"LoaderRoom");
            $(`#${home.roomInfo[item].boxID} .bookeo_box_room`).hide();
            let tryAvailability = await apiGet.getAvailability(home.roomInfo[item].productID).then((data) =>{
                home.parseAvailability(data.data, home.roomInfo[item].keyName).then(function(parsedData){
                    home.setAvailability(parsedData, home.roomInfo[item].boxID, home.roomInfo[item].viewName, home.roomInfo[item].roomMaxAvailable);
                    utils.stopLoading(roomName+"Loader");
                    utils.stopLoading(roomName+"LoaderRoom");
                    $(`#${home.roomInfo[item].boxID} .bookeo_box_room`).fadeIn();
                })
            });

            $(`#${home.roomInfo[item].boxID} .learn_button`).off().on("click", function(e){
                e.stopPropagation();
                viewManager.registerView(home.roomInfo[item].viewName);
            })
            
            $(`#gameBoxes #${home.roomInfo[item].boxID}`).off().on("click", function(e){
                e.cancelBubble=true
                viewManager.registerView(home.roomInfo[item].viewName);
            })

        }

        header.refreshData = false;
    }else{
        for(let item in home.roomInfo){
            home.setAvailability(home.roomInfo[item].availability, home.roomInfo[item].boxID, home.roomInfo[item].viewName, home.roomInfo[item].roomMaxAvailable);
        }
    }
}


// GRAB APPLICATION DATA NEEDED TO START THE APP
app.getAllData = ()=> {
    return new Promise(async (resolve,reject)=>{
        try{
            home.roomInfo = await apiGet.getAppData();
            resolve(home.roomInfo);
        }catch(error){
            console.log(error);
            reject(error);
        }
    })
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
    if(config.logging){
        console.log(config.environment + " Logs: "+ message);
    }
}
