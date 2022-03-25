let giftcards = {};

giftcards.location = "#giftcards";

giftcards.setGiftCardsPage = ()=>{

    $(giftcards.location).html(templates.giftCardsPage());
    
    console.log("inside giftcards page");

    giftcards.setGiftCardsLinks();
    
}

giftcards.setGiftCardsLinks = ()=>{
    $(".gift_card_container .bookNowLargeButton").off().on("click", ()=>{
        viewManager.bookNowVoucher("Gift Card");
    })
}