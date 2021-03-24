let templates = {};

/*
    
*** DATA OBJECT USAGE EXAMPLE
    let testObj = {
        obj1:{"name":"Adam"},
        obj2:{"name":"Mara"}
    }
    $.each(testObj, function(key){
        let htmlTemplate = templates.userBox(testObj[key]);
        $("#testOutput").append(htmlTemplate);
    })

*** REGULAR USAGE EXAMPLE
    $("#header").html(templates.header());


*** SKELETON LOADING TEMPLATE EXAMPLE
    // START YOUR LOADING BY PASSING A TEMPLATE, ID, AND CONTAINER
    utils.showLoading(templates.profileContainer,"profileContainer","#homeContainer");

    // LOADING UTIL WILL ASK FOR A TEMPLATE
    // ENSURE YOU CREATE A TEMPLATE LIKE BELOW
    templates.profileContainer = (name)=>{
        
        // MODIFY YOUR HTML TO MATCH THE ELEMENTS YOU'RE SKELETON LOADING
        let returnHTML = 
        `
        <div id="${name}">
            <div class="skel_item skel_box" style="width:40px;"></div>
            <div class="skel_item skel_box"></div>
        </div>

        `;
        return returnHTML;
    }
*/


templates.loading = (loadingText)=>{
    let returnHTML = 
    `
    <div id="loadingContainer">
        <img src="${config.loadingImage}" width="50px">
        <br/>
        <div>${loadingText}</div>
    </div>

    `;
    return returnHTML;
}

templates.header = ()=>{
    let returnHTML = 
    `
    <div>
        <div id="headerContainer">
            <div id="home" class="header_item">Home</div>
        </div>
    </div>

    `;
    return returnHTML;
}


templates.footer = ()=>{
    let returnHTML = 
    `
    <div id="footerContainer">
        <div id="footerInner" class="col-md-12 row">
            <div class="col-md-4 column">Column 1</div>
            <div class="col-md-4 column">Column 2</div>
            <div class="col-md-4 column">Column 3</div>
        </div>
    </div>

    `;
    return returnHTML;
}


templates.contact = (contactText)=>{
    let returnHTML = 
    `
    <div class="contact_box">
        <div id="contactForm">
            <div id="contactText">${contactText}</div><br />
            <div class="col-12 row nomargins nopadding">
                <div class="col-sm-6"><input type="text" name="name" autocomplete="name" class="contact_input upload_input" id="contactName" tabindex="1" placeholder="Name"></div>
                <div class="col-sm-6"><input type="text" name="email" autocomplete="email" class="contact_input upload_input" id="contactEmail" tabindex="2" placeholder="Email"></div>
            </div>
                <div class="row col-12 nomargins nopadding" style="padding-bottom: 2vh;">
                    <div class="col-sm-3 reason_line">
                        <span>Reason for Contact</span>
                    </div>
                    <div class="col-sm-8 reasons" style="display:inline-flex;">
                        <div class="check_button">
                            <input type="radio" id="feedback" value="Feedback" name="contactType" hidden />
                            <label for="feedback">Feedback</label>
                        </div>
                        <div class="check_button">
                            <input type="radio" id="question" value="Question" name="contactType" hidden />
                            <label for="question">Question</label>
                        </div>
                        <div class="check_button">
                            <input type="radio" id="other" value="Other" name="contactType" hidden />
                            <label for="other">Other</label>
                        </div>
                    </div>
                </div>
            <div class="col-12">
                <textarea class="contact_input upload_input" id="contactMessage" style="height: 148px; resize: none; margin-bottom: 5vh;" tabindex="3" placeholder="Message"></textarea>
                <div style="text-align: center"><div id="sendMessageButton" class="ft_button" style="max-width: 250px;margin:0 auto;">Send Message</div></div>
            </div>
        </div>  
    </div>

    `;
    return returnHTML;
}


