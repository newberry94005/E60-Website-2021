// Configuration File
let config = {};


// Modify Configs to match current environment or requirements
config.logging = false;
config.analytics = false;

config.environment = "PreProd";
config.firebaseConfig = {};
config.useAuth = true;

config.appLocation = "./app.html";
config.logo = "img/logo.png";
config.logo_alt = "img/logo_alt.png";
config.loadingImage = "img/loading.svg";

config.primaryColor = "#F44336";
config.secondaryColor = "#f9f9f9";
config.tercieryColor = "#e6e6e6";

config.urlQuery = utils.processURL();


if(config.environment != "Prod"){
    config.logging = false;
    config.analytics = true;
    config.firebaseConfig = {
        apiKey: "AIzaSyDBsaaW6KfkCe1J9Qn5ByIFUVWq86EIP2M",
        authDomain: "wc-preprod.firebaseapp.com",
        databaseURL: "https://wc-preprod.firebaseio.com",
        projectId: "wc-preprod",
        storageBucket: "wc-preprod.appspot.com",
        messagingSenderId: "778110672403",
        appId: "1:778110672403:web:fa777e43ab2328d8dc69e6"	
    };
}else{
    config.logging = true;
    config.analytics = false;
    config.firebaseConfig = {};
}

// INITALIZE FIREBASE
firebase.initializeApp(config.firebaseConfig);

// Only if you configure Firebase Analytics
//const analytics = firebase.analytics();


