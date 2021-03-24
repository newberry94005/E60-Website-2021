const apiGet = {};

// GET ALL APP DATA
apiGet.getAppData = ()=>{
    return database.ref('/').once('value').then(function(data) {
        consoleLogger("Received all data...");
        return data.val();
    }).catch( function(error) { consoleLogger(error.message) } );
}




 