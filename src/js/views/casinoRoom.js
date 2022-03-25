let casinoRoom = {};

casinoRoom.setCasinoRoomPage = ()=> {
    utils.stopLoading();
    console.log("inside casinoRoom page");

    $(".bookNowLargeButtonRoom, .bookNowLargeButton").off().on("click", ()=>{
        viewManager.bookNow("CASINO");
    })

    
    home.setOtherRooms();

}


