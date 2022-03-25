// Configuration File
let config = {};


// Modify Configs to match current environment or requirements
config.logging = false;
config.analytics = false;

/// UPDATE TO "Prod" BEFORE DEPLOYING TO PROD
config.environment = "TEST";


config.firebaseConfig = {};
config.useAuth = true;

config.appLocation = "./index.html";
config.logo = "img/logo.png";
config.logo_alt = "img/logo_alt.png";
config.loadingImage = "img/loading.svg";

config.primaryColor = "#F44336";
config.secondaryColor = "#f9f9f9";
config.tercieryColor = "#e6e6e6";

config.urlQuery = utils.processURL();
console.log(config.urlQuery);


if(config.environment != "Prod"){
    config.logging = true;
    config.analytics = false;
    config.firebaseConfig = {
        apiKey: "AIzaSyBdaVyQ9AWdbMYxNecb1QEtlupKW8grEBo",
        authDomain: "e60website.firebaseapp.com",
        projectId: "e60website",
        storageBucket: "e60website.appspot.com",
        messagingSenderId: "477956792217",
        appId: "1:477956792217:web:3b88e391047952357ebd08"	
    };
}else{
    config.logging = false;
    config.analytics = true;
    config.firebaseConfig = {
        apiKey: "AIzaSyBdaVyQ9AWdbMYxNecb1QEtlupKW8grEBo",
        authDomain: "e60website.firebaseapp.com",
        projectId: "e60website",
        storageBucket: "e60website.appspot.com",
        messagingSenderId: "477956792217",
        appId: "1:477956792217:web:3b88e391047952357ebd08"
    };
}

// INITALIZE FIREBASE
firebase.initializeApp(config.firebaseConfig);

// Only if you configure Firebase Analytics
//const analytics = firebase.analytics();


