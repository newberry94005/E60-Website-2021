let home = {};

home.setHomePage = ()=> {
    utils.stopLoading();

    setMoreInfoLinks();

}

function setMoreInfoLinks(){
    $(".more_faqs_link").off().on("click", ()=>{
        viewManager.registerView("#faqs");
    })
    $(".more_booknow_link").off().on("click", ()=>{
        viewManager.bookNow("HOME INFO");
    })
    $(".more_group_link").off().on("click", ()=>{
        viewManager.registerView("#groups");
    })
}




// ***** SET THE UI FOR ALL ROOM AVAILABILITY *****
home.setAvailability = (parsedData, boxID, viewName, max)=>{
    let num = 0;
    $(`#${boxID} .bookeo_box`).html("");
    $(`#${boxID} .bookeo_box_room`).html("");

    if(parsedData){
        for(let item of parsedData){
            let time = item[1];
            let number = item[0];
            if(num < 5){
                $(`#${boxID} .bookeo_box`).append(templates.availabilityInfo(time, number, "/"+max));
                num += 1;
            }
            $(`#${boxID} .bookeo_box_room`).append(templates.availabilityInfoRoom(time, number, "/"+max));
        }

        if(parsedData.length < 1){
            $(`#${boxID} .bookeo_box`).append(templates.fullAvailabilityBox());
            $(`#${boxID} .bookeo_box_room`).append(templates.fullAvailabilityBoxRoom());
        }else if(parsedData.length < 5){
            $(`#${boxID} .bookeo_box`).append(templates.availabilityInfo("Tomorrow", "",""));
            $(`#${boxID} .bookeo_box_room`).append(templates.availabilityInfoRoom("Tomorrow", "", ""));
            $(`#${boxID} .bookeo_box`).append(templates.availabilityInfo("See all", "",""));
            $(`#${boxID} .bookeo_box_room`).append(templates.availabilityInfoRoom("See all", "", ""));
        }else{
            $(`#${boxID} .bookeo_box`).append(templates.availabilityInfo("See all", "",""));
            $(`#${boxID} .bookeo_box_room`).append(templates.availabilityInfoRoom("See all", "", ""));
        }
    }
    
    if(viewName){
        $(`#${boxID} .learn_button`).off().on("click", function(e){
            e.stopPropagation();
            viewManager.registerView(viewName);
        })
        
        $(`#gameBoxes #${boxID}, .other_rooms #${boxID}`).off().on("click", function(e){
            e.cancelBubble=true
            viewManager.registerView(viewName);
        })    
    }

    $(".availability_pillbox, .no_game_button_room, .no_game_button").off().on("click", function(e){
        e.stopPropagation();
        viewManager.bookNow("AVAILABILITY");
    });


}


// ***** PARSE ALL AVAILABILITY DATA *****
home.parseAvailability = (data, keyName)=>{
    return new Promise(async (resolve,reject)=>{
        home.roomInfo[keyName].availability = [];
        for (let item of data) {
            if(item.numSeatsAvailable > 0 ){
                home.roomInfo[keyName].availability.push([item.numSeatsAvailable, utils.momentGetTimeFormat(item.startTime)]);
            }
        }
        resolve(home.roomInfo[keyName].availability); 
    }) 
}


// SET THE OTHER ROOM SECTION IN THE INDIVIDUAL ROOM VIEW
home.setOtherRooms = ()=>{
    $(".other_room_boxes").html('');
    for(let item of home.roomOrder){
        if(home.roomInfo[item].viewName.substring(1) != viewManager.currentView){
            $(".other_room_boxes").append(templates.otherGameBoxes(
                home.roomInfo[item].boxID, 
                home.roomInfo[item].boxName, 
                home.roomInfo[item].roomName, 
                home.roomInfo[item].roomInfo,
                home.roomInfo[item].roomCapacity, 
                home.roomInfo[item].backgroundImage,
                home.roomInfo[item].roomLogo,
                home.roomInfo[item].tagline
            ));
            home.setAvailability(home.roomInfo[item].availability, home.roomInfo[item].boxID, home.roomInfo[item].viewName, home.roomInfo[item].roomMaxAvailable);
        }   
    }
}


$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 800) {
      $('.back_to_top').fadeIn();
    } else {
      $('.back_to_top').fadeOut();
    }
  });

