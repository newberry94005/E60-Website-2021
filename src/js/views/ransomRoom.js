let ransomRoom = {};

ransomRoom.setRansomRoomPage = ()=> {
    utils.stopLoading();
    console.log("inside ransomRoom page");

    $(".bookNowLargeButtonRoom, .bookNowLargeButton").off().on("click", ()=>{
        viewManager.bookNow("RANSOM");
    })


    home.setOtherRooms();

}


