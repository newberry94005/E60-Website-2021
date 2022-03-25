let egyptRoom = {};

egyptRoom.setEgyptRoomPage = ()=> {
    utils.stopLoading();
    console.log("inside egyptRoom page");

    $(".bookNowLargeButtonRoom, .bookNowLargeButton").off().on("click", ()=>{
        viewManager.bookNow("EGYPT");
    })

    home.setOtherRooms();

}


