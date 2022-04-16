const apiGet = {};

// GET ALL APP DATA
apiGet.getAppData = ()=>{
    return database.ref('/roomInfo').once('value').then(function(data) {
        utils.consoleLogger("Received all data...");
        return data.val();
    }).catch( function(error) { consoleLogger(error.message) } );
}

apiGet.getHoursData = ()=>{
    return database.ref('/hoursInfo').once('value').then(function(data) {
        utils.consoleLogger("Received hours data...");
        return data.val();
    }).catch( function(error) { consoleLogger(error.message) } );
}


//*** SECURE API REQUEST THROUGH CLOUD FUNCTION ***/
apiGet.getAvailability = (productID)=>{
    let date = new Date();
    let startDateTime = moment(date).format();

    // let endDateTime = moment(startDateTime).add(3, 'd').format();
    let endDateTime = moment().endOf("day").format();

    return new Promise(function(resolve,reject){
        var callItem = functions.httpsCallable('bookeoAvailability');
        let sendObj = {
            "productID":productID,
            "startDateTime":startDateTime,
            "endDateTime":endDateTime
        };
        callItem(sendObj).then(function(result) {
            utils.consoleLogger(result.data);
            resolve(result.data);
        });
    }) 
}



 