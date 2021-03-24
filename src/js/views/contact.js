let contact = {};

// SET TO RUN AUTOMATICALLY WHEN JS IS CALLED
contact.autoRun = true;

// SET THE LOCATION TO PLACE THE CONTACT FORM
contact.location = "#contact";

// SET THE TEXT AT THE TOP OF THE CONTACT FORM
contact.contactText = "Inquiries to Waiver Creator can be submitted via the contact form and we will get back to you as soon as possible.  Thanks for using Waiver Creator!";

// SET THE MAIN BUTTON COLOR
contact.buttonColor = 'linear-gradient(to right, rgb(7, 12, 52) 0px, rgb(38, 34, 255) 92%)';



contact.setContactPage = (where)=>{
    console.log("setting up contact page");

    // SHOW THE TEMPLATE
    $(where).html(templates.contact(contact.contactText));

    // SET THE BUTTON COLORS
    $(".ft_button").css("background", contact.buttonColor);

    //USER HAS PRESSED THE SEND BUTTON
    $("#sendMessageButton").off().on("click", function(){
        
        //NAME IS REQUIRED
        if (!($("#contactName").val())){
            contactError("NAME");
            return false;
        }
        //EMAIL IS REQUIRED
        if (!($("#contactEmail").val())){
            contactError("EMAIL");
            return false;
        }
        //MESSAGE IS REQUIRED
        if (!($("#contactMessage").val())){
            contactError("MESSAGE");
            return false;
        } 
            
        //CHECKING FOR VALID EMAIL
        if ( !utils.validateEmail( $("#contactEmail").val() ) ){
            utils.showSwal("","Your <span style='font-weight: 900;'>email address</span> is not formatted correctly.<br />Please try again.","error",true);
            return false;
        }
        
        //SUBMITTING FORM
        submitContactForm();
        
    });

}

//SWEET ALERT SHORTCUT FUNCTION
function contactError(errorText){
    utils.showSwal("Sorry","There was an error in the form.<br /><br />You forgot to fill out your <span style='font-weight: 900'>" + errorText + "</span>.<br />Please correct this and resend.","error");
}

//SUBMIT THE CONTACT FORM
function submitContactForm() {
    
    //SHOW LOAD SCREEN
    utils.showSwal("Sending Your Message",'<span style="font-size:28pt;"><i class="fas fa-sync fa-spin"></i></span>',"",false,false,'',false,'');
    
    //GRAB FORM VALUES
    let contactName = $("#contactName").val();
    let contactEmail = $("#contactEmail").val();
    let contactMessage = $("#contactMessage").val();
    let contactType = $("#contactForm").find('input[name=contactType]:checked').val(); 
    
    if(contactType == undefined || contactType == null){
        contactType = "No type selected";
    }      
    
    //AJAX POST CALL
    $.ajax({
        type: "POST",
        url: "php/email-contactForm.php",
        data: {contactName: contactName,
                contactEmail: contactEmail,
                contactMessage: contactMessage,
                contactType: contactType
        },
        success: function(msg) {
            
            utils.showSwal("Success","Thanks for your message, <span style='font-weight: 900;'>" + contactName + "</span>.<br />We will get back to you as soon as possible.","success")
            
            //CLEAR THE FORM
            clearContactForm();
            
            //REMOVE LOAD SCREEN
            $("#contactForm").fadeIn();
            
            //STATUS MESSAGE FROM PHP
            console.log(msg);
            
        },
        error: function(error){
            utils.showSwal("Sorry About This",error,"error");
        }
    });	
}

function clearContactForm(){

    $(".contact_input").each(function(){
        $(this).val(""); 
    });
            
    $(".check_button").each(function(){
        $(this).find("input").prop("checked", false);
    });
    
}

$(document).ready(function() {
    // IF AUTORUN IS ON, START THE PAGE
    if(contact.autoRun){
        contact.setContactPage(contact.location);
    }
	
});

