let bookNow = {};

// WAIT FOR DOM BEFORE RUNNING MAIN FEATURES
$(document).ready(function() {
    bookNow.setBookNowPage();
	
});

bookNow.setBookNowPage = ()=> {
    utils.stopLoading();

    $("#footer").fadeIn();
}


