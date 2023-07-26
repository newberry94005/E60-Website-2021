let afterhoursRoom = {};

afterhoursRoom.setAfterhoursRoomPage = ()=> {
    utils.stopLoading();
    console.log("inside afterhoursRoom page");


    $(".bookNowLargeButtonRoom, .bookNowLargeButton").off().on("click", ()=>{
        viewManager.bookNow("AFTERHOURS");
    })

    home.setOtherRooms();

}

