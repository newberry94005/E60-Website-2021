const utils = {};


/**** UTIL FUNCTIONS *****/

/* USAGE EXAMPLES

    // Just show basic full screen loader with animation
    utils.showLoading();


    // Show Skeleton using templates
    // Specify the template = create a new tempate and pass in the function without the "()" at the end
    // Specify the section getting loaded = DONT include the "#" or "." in this one
    // Specify the pare nt container 
    utils.showLoading(templates.bodyContainer,"bodyContainer","#homeContainer");


*/

// SHOW LOADING A SKELETON OR THE BASIC LOADER SPINNER
utils.showLoading = (loadingText="Loading...", where="body", skel = null, sectionLoading=null  )=>{
    //skel = the template function
    
    if(skel){
        // Grab the current template
        let skelFrame = skel("_"+sectionLoading);
        
        // Hide the existing real data
        $('#'+sectionLoading).hide();

        // Show the Skeleton
        $(where).append(skelFrame);
    }else{
        // Grab the loading text
        let loadingHTML = templates.loading(loadingText);
        
        // Add the loading page
        $(where).append(loadingHTML);

        // Show the loading page
        $("#loadingContainer").fadeIn();
    }
}

// CHOOSE TO STOP LOADING AND SHOW A DIV
utils.stopLoading = (skelToRemove=null, sectionToShow=null)=>{
    // Remove the loading screens
    $("#loadingContainer").fadeOut().promise().done(function(){
        $("#loadingContainer").remove();
    })

    // If there is a skel to remove, remove it
    if(skelToRemove){
        $("#_"+skelToRemove).remove();
    }
    
    // If there is something to show after, show it
    if(sectionToShow){
        $(sectionToShow).fadeIn();
    }
}

// MUST BE DESIGNED TO SHOW #VIEW THEN ?ARG?ARG?ARG FORMAT
// example http://www.app.com/app.html#home?me?you?someone
 
utils.processURL = ()=>{
    let urlObj = {view:"",args:[]};
    let viewArg = window.location.href.split("#")[1];
    let customArgs = window.location.href.split("?");
    customArgs.shift();
 
    if(viewArg){  
        urlObj.view = viewArg.split("?")[0];
    }
    if(customArgs){
        urlObj.args = customArgs;
    }

    return urlObj;
}
  
/*
// EXAMPLE OF SWAL USAGE
utils.showSwal(`Working?`,`<div>HTML Text</div>`,`info`,true,`Nevermind`,true,`Okay`).then((returnValue)=>{
        // Returns True/False
        if(returnValue){
            // They clicked confirm button
        }else{
            // They clicked "x", cancel, esc, clicked away
        }
}).catch(()=>{console.log(`Error: ${returnValue}`)}); 

*/  
utils.showSwalInput = (title,html,type,allowOutsideClick=true,showCancelButton=false,cancelButtonText="Cancel",showConfirmButton=true,confirmButtonText="Okay",inputType = "text", validationCharacterMin = 1, validationCharacterMax = 30, validationText = "Please enter a valid response.", showCloseButton=false, confirmButtonColor=config.primaryColor, cancelButtonColor=`rgb(158, 158, 158)`)=>{    
    utils.stopLoading();
    return new Promise((resolve,reject)=>{
        Swal.fire({
            title: title,
            html: html,
            icon: type,
            allowOutsideClick: allowOutsideClick,
            showCancelButton: showCancelButton,
            cancelButtonText: cancelButtonText,
            showConfirmButton: showConfirmButton,
            confirmButtonText: confirmButtonText,
            confirmButtonColor: confirmButtonColor,
            cancelButtonColor: cancelButtonColor,
            input:inputType,
            inputValidator: (value) => {
                if (!value) {
                    return validationText
                }
                if(validationCharacterMin || validationCharacterMax){
                    //Character Count
                    if(value.length < validationCharacterMin){
                        return "Please enter at least "+validationCharacterMin+" characters. You entered "+value.length+".";
                    }else if(value.length > validationCharacterMax){
                        return "Please enter no more than "+validationCharacterMax+" characters. You entered "+value.length+".";
                    }
                }
            },
            showCloseButton: showCloseButton,
            heightAuto: false
        }).then((result)=>{
            if(result.value){
                // They clicked continue button
                resolve(result.value);
            }else{
                // They selected "x", cancel, esc, or clicked away
                reject();
            }
        }).catch( (error)=> { reject(error) } );    
    })
}
  
 
utils.showSwal = (title,html,type,allowOutsideClick=true,showCancelButton=false,cancelButtonText="Cancel",showConfirmButton=true,confirmButtonText="Okay",toast=false,timer=0,position="center",background="#ffffff", backdrop=true,showCloseButton=false, confirmButtonColor=config.primaryColor, cancelButtonColor=`rgb(158, 158, 158)`)=>{    
    //utils.stopLoading();
    return new Promise((resolve,reject)=>{
        Swal.fire({
            title: title,
            html: html,
            icon: type,
            allowOutsideClick: allowOutsideClick,
            showCancelButton: showCancelButton,
            cancelButtonText: cancelButtonText,
            showConfirmButton: showConfirmButton,
            confirmButtonText: confirmButtonText,
            confirmButtonColor: confirmButtonColor,
            cancelButtonColor: cancelButtonColor,
            toast: toast,
            timer: timer,
            position: position,
            background: background,
            backdrop: backdrop,
            showCloseButton: showCloseButton,
            heightAuto: false
        }).then((result)=>{
            if(result.value){
                // They clicked continue button
                resolve(result.value);
            }else{ 
                // They selected "x", cancel, esc, or clicked away
                reject(result);
            }
        }).catch( (error)=> { reject(error) } );    
    })
}

/// Custom work with Moment JS plugin
/*
https://momentjs.com/docs/ 
*/ 

utils.momentLongDayFormat = (timeObj)=>{
    let dayFormat = moment(timeObj).format("dddd, MMMM Do YYYY");
    return dayFormat;
}
utils.momentShortDayFormat = (timeObj)=>{
    let dayFormat = moment(timeObj).format("MM/DD/YYYY");
    return dayFormat;
}
utils.momentVeryShortDayFormat = (timeObj)=>{
    let dayFormat = moment(timeObj).format("ddd h:mm a");
    return dayFormat;
}

utils.momentDayTimeFormat = (timeObj)=>{
    let dayFormat = moment(timeObj).format("dddd, MMMM Do YYYY, h:mm A");
    return dayFormat;  
}
utils.momentGetTimeFormat = (timeObj = moment().format())=>{
    var time = moment(timeObj).format("h:mm:ss A");
    return time;
}
utils.momentGetTodayDay = ()=>{
    var newDate = moment().format();
    var todayDay = newDate.toString().split("T").shift().split("-").pop();
    return todayDay;
}
utils.momentIsToday = (timeObj)=>{
    var time = moment().isSame(timeObj,"day");
    return time;
}
utils.momentIsYesterday = (timeObj)=>{
    var yesterdayDate = moment().subtract(1, 'days');
    var time = moment(yesterdayDate).isSame(timeObj,"day");
    return time;
}
utils.momentDayDifference = (time1, time2)=>{
    let days = moment(time1).diff(time2, "days");
    return days;
} 

utils.momentHourDifference = (time1, time2)=>{
    let days = moment(time1).diff(time2, "hours");
    return days;
}

utils.momentDateTimeFromNow = (timeObj)=>{
    let timeFrom = moment(timeObj).fromNow();
    return timeFrom;
}

utils.scrollToBottom = (where = "html, body")=>{
    $(where).animate({scrollTop: 2000},600);
}

// Is this device mobile or not?
utils.scrollTop = ()=>{
    if(utils.checkForMobile()){
        $("html, body").animate({scrollTop:0},300)
    }else{
        window.scrollTo(0, 0);
    }
}

utils.scrollToItem = (who, useDocumentBody=false, animationTime=300)=>{
    if(who){
        let documentBody = $(window).height();
        if(useDocumentBody){
            documentBody = $(document).height();        
        } 

        // Scroll TO ITEM
        if(utils.checkForMobile()){
            $(who).animate({scrollTop: documentBody-$(window).height() },animationTime);
        }else{
            $(who).animate({scrollTop: documentBody-$(window).height() },animationTime,"swing");
        }
    }
}


// CHECK FOR MOBILE WIDTH AND RETURN IF IT'S MOBILE
// REQUIRES WINDOW.WIDTH
utils.checkForMobile = (threshold = 415)=>{
    let isMo = false;
    if($(window).width() <= threshold){
        isMo = true;
    } 
    return isMo;
}

// CHECK FOR iPAD WIDTH AND RETURN IF IT'S Tablet
// REQUIRES WINDOW.WIDTH
utils.checkForTablet = (threshold = 1367)=>{
    let isMo = false;
    if($(window).width() <= threshold){
        isMo = true;
    }
    return isMo;
}

// CHECK FOR IOS 
utils.checkForIOS = ()=>{
    let isIOS = false;
    // Works for io12 <  and ios13 (desktop mode)
    isIOS = /iPad|iPhone|iPod/.test(navigator.platform)|| (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    return isIOS;
}

// CHECK FOR ANDROID PHONE
// REQUIRES PREVIOUS ORIENTATION GLOBAL OBJECT 
utils.checkForAndroid = ()=>{
    let isAnd = false;
    const ua = navigator.userAgent.toLowerCase();
    isAnd = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
    if(window.orientation !== app.previousOrientation){
        app.previousOrientation = window.orientation;
    }
    return isAnd;
}



// SHUFFLE AN ARRAY AND RETURN THE SHUFFLED ARRAY
utils.shuffleArray = (array)=> {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }  
    return array;
}

// ONLY DUPLICATES SIMPLE VALUES NOT KEY/VALUES THAT HAVE FUNCTIONS OR OTHER OBJECTS
utils.duplicateSimpleObject = (objectToDup) => JSON.parse(JSON.stringify(objectToDup));  

// DEEP CLONE OF ANY OBJECT USING LODASH PLUGIN
utils.duplicateComplexObject = (objectToDup)=> _.cloneDeep(objectToDup);


//UPDATE PHONE NUMBER ENTRY ON INPUT
//TAKES A CLASS OR ID
// '.example_item'
utils.setPhoneNumberEntry = (who, dot=false)=>{
    let lb = "(";
    let rb = ") ";
    let dash = "-";
    if(dot){
        dot = ".";
        lb = "";
        rb = "";
        dash = "";
    }else{
        dot = "";
    }
    $(who).on("keyup", function(){
        str = $(this).val().replace(/[^0-9]+?/g, '');
        if(str.length == 7){
            str = str.substr(0,3)+dash+dot+str.substr(3,4);
        }else if(str.length == 10){
            str = lb+str.substr(0,3)+rb+dot+str.substr(3,3)+dash+dot+str.substr(6,4);
        }else if(str.length > 10){
            str = str.substr(0,10);
            str = lb+str.substr(0,3)+rb+dot+str.substr(3,3)+dash+dot+str.substr(6,4);
        }
        $(this).val(str);
    });
}  

utils.capitalizeFirstLetterOfString = (stringToCap)=>{
    return stringToCap.charAt(0).toUpperCase() + stringToCap.slice(1);
}
 
utils.getRandomNumber = (beginRange=0, endRange=1, round=false)=>{
    let rand = beginRange + Math.random() * endRange;
    if(round){
        rand = Math.round(rand);
    }
    return rand;
}

utils.getImageThumb = (image)=>{

    let breakdown = image.split("?")[0].split("%2F");
    let imageName = breakdown[breakdown.length-1];
    let finalImageName = "thumb_"+imageName;

    let pieces = "";
    for(let i=0; i<breakdown.length-1;i++){
        if(i!=0){
            pieces = pieces+"%2F"+breakdown[i];
        }else if(i == 0){
            pieces = pieces+breakdown[i];
        }
    }
    let preImage = pieces;
    let postImage = image.split("?")[1];

    return preImage+"%2F"+finalImageName+"?"+postImage;
    
}
utils.getFullImage = (image)=>{

    let breakdown = image.split("?")[0].split("%2F");
    let imageName = breakdown[breakdown.length-1];
    let finalImageName = imageName.substring(6,imageName.length);

    let pieces = "";
    for(let i=0; i<breakdown.length-1;i++){
        if(i!=0){
            pieces = pieces+"%2F"+breakdown[i];
        }else if(i == 0){
            pieces = pieces+breakdown[i];
        }
    }
    let preImage = pieces;
    let postImage = image.split("?")[1];
    
    return preImage+"%2F"+finalImageName+"?"+postImage;
}

utils.roundToTwo = (num) => {    
    return +(Math.round(num + "e+2")  + "e-2");
}

utils.validateEmail = (emailAddress)=>{
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = false;
    if( emailReg.test(emailAddress) ){
        isValid = true;
    }
    return isValid;
}

/*
EXAMPLE
    let testArray = [56,33,20,50,100,20]
    let sortedArray = utils.sortNumberArray(testArray);
*/
utils.sortNumberArray = (array,direction=1)=>{
    if(direction == 1){
        array.sort((a, b) => a - b);
    }else{
        array.sort((a, b) => b - a);
    }
    return array;
}

// SORT AN OBJECT AND GET A RETURN ARRAY WITH THE REFERENCE KEYS
// THIS WILL NOT TECHNICALLY SORT THE OBJECT, YOU MUST USE THE RETURN ARRAY AS A KEY FOR THE ORDER OF THE OBJECT
// SORT BETWEEN 1 AND 5 CRITERIA
/*
EXAMPLE USAGE
 let testObj = {
        subObj1: {
            index: 1,
            name: "Cdam",
            address: "111 Main St.",
            unqiueId: "1adam111mainst"
        },
        subObj2: {
            index: 2,
            name: "Bob",
            address: "222 Main St.",
            unqiueId: "2bob222mainst"
        },
        subObj3: {
            index: 1,
            name: "Cat",
            address: "333 Main St.", 
            unqiueId: "3cat33mainst"
        }, 
    }

    utils.sortObjectByKeyCriteria(testObj,["index","name","address"], {"index":-1}).then((keyMap)=>{
        //Use the return keyMap to display/show objects in the mapped sorting order
        // Remember, KeyMap is only an Array of Key Values from the original object.  You must put that against the original object
        keyMap.forEach((value)=>{
            let key = value;
            $("#testOutput").append(`<div>${testObj[key].name}</div>`)
        })
    }) 

*/
utils.sortNestedObjectsByKeyCriteria = (objectToSort, criteriaArrayOfStrings, objectSortDirection = null)=>{
    return new Promise((resolve, reject)=>{
        if(criteriaArrayOfStrings.length <= 5){
            let tempArray = [];
            let finalArray = [];
            let cas = criteriaArrayOfStrings;
            let osd = objectSortDirection;
            // Get the data we need to sort with
            $.each( objectToSort, function( key ) {
                let subObject = {};
                cas.forEach((item)=>{
                    subObject[item] = objectToSort[key][item]
                });
                subObject.uid = key;
                tempArray.push( subObject );
            });
            if(cas.length == 1){
                tempArray.sort(firstBy(cas[0],csd(osd,cas[0])))
            }else if(cas.length == 2){
                tempArray.sort(firstBy(cas[0],csd(osd,cas[0])).thenBy(cas[1],csd(osd,cas[1])));
            }else if(cas.length == 3){
                tempArray.sort(firstBy(cas[0],csd(osd,cas[0])).thenBy(cas[1],csd(osd,cas[1])).thenBy(cas[2],csd(osd,cas[2])));
            }else if(cas.length == 4){
                tempArray.sort(firstBy(cas[0],csd(osd,cas[0])).thenBy(cas[1],csd(osd,cas[1])).thenBy(cas[2],csd(osd,cas[2])).thenBy(cas[3],csd(osd,cas[3])));
            }else if(cas.length == 5){
                tempArray.sort(firstBy(cas[0],csd(osd,cas[0])).thenBy(cas[1],csd(osd,cas[1])).thenBy(cas[2],csd(osd,cas[2])).thenBy(cas[3],csd(osd,cas[3])).thenBy(cas[4],csd(osd,cas[4])));
            }

            //// FINAL ORDER  	
            for(let i=0; i<tempArray.length;i++){
                finalArray[i] =  tempArray[i].uid ; 
            }            
            resolve(finalArray);
        }else{
            reject("Must have 5 or less criteria to sort by");
        }
    })
}

// Check Sort Direction
function csd(objectSortDirection,key){
    let direction = 1;
    if(objectSortDirection && objectSortDirection[key]){
        direction = parseInt(objectSortDirection[key]);
    }
    return direction;
}



// Private Help Utilities ///

const firstBy = (function() {

    function identity(v){return v;}

    function ignoreCase(v){return typeof(v)==="string" ? v.toLowerCase() : v;}

    function makeCompareFunction(f, opt){
        opt = typeof(opt)==="number" ? {direction:opt} : opt||{};
        if(typeof(f)!="function"){
            var prop = f;
            // make unary function
            f = function(v1){return !!v1[prop] ? v1[prop] : "";}
        }
        if(f.length === 1) {
            // f is a unary function mapping a single item to its sort score
            var uf = f;
            var preprocess = opt.ignoreCase?ignoreCase:identity;
            f = function(v1,v2) {return preprocess(uf(v1)) < preprocess(uf(v2)) ? -1 : preprocess(uf(v1)) > preprocess(uf(v2)) ? 1 : 0;}
        }
        if(opt.direction === -1) return function(v1,v2){return -f(v1,v2)};
        return f;
    }

    /* adds a secondary compare function to the target function (`this` context)
       which is applied in case the first one returns 0 (equal)
       returns a new compare function, which has a `thenBy` method as well */
    function tb(func, opt) {
        var x = typeof(this) == "function" ? this : false;
        var y = makeCompareFunction(func, opt);
        var f = x ? function(a, b) {
                        return x(a,b) || y(a,b);
                    }
                  : y;
        f.thenBy = tb;
        return f;
    } 
return tb; 
})();

utils.setCookie = (key,value,expireMinutes) =>{
    let dateTime = moment().add(expireMinutes, 'm');
    let formated = moment(dateTime).format("ddd, D MMM YYYY HH:mm:ss UTC");
    //console.log("setting cookie");
    //console.log(`${key}=${value}; expires=${formated}; path=/`);
    document.cookie = key+'='+value+'; expires='+formated+'; path=/';
}

utils.readCookie = (key)=> {
	var nameEQ = key + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
} 
  
utils.removeCookie = (key,value) =>{
    let dateTime = moment().subtract(24, 'h');
    let formated = moment(dateTime).format("ddd, D MMM YYYY HH:mm:ss UTC");
    
    document.cookie = `${key}=${value}; expires=${formated}; path=/`;
}
// WRAP TEXT IN PRIMARY COLOR
utils.wtipc = (textToWrapInPrimaryColor)=>{
    let newItem = `<span style="color:${config.primaryColor};">${textToWrapInPrimaryColor}</span>`;
    return newItem;
} 
 

