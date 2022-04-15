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
templates.availabilityLoaderRoom = (name)=>{
    let returnHTML = 
    `
    <div id="${name}" class="row loader_room">
        <div class="col-4 availability_pillbox">
            <div class="availability_info_loader skel_item">
                <div class="hidden_text" style="font-weight: bold;">-</div>
                <div class="hidden_text" style="font-size: 10px;">-</div>
            </div>
        </div>
        <div class="col-4 availability_pillbox">
            <div class="availability_info_loader skel_item">
                <div class="hidden_text" style="font-weight: bold;">-</div>
                <div class="hidden_text" style="font-size: 10px;">-</div>
            </div>
        </div>
        <div class="col-4 availability_pillbox">
            <div class="availability_info_loader skel_item">
                <div class="hidden_text" style="font-weight: bold;">-</div>
                <div class="hidden_text" style="font-size: 10px;">-</div>
            </div>
        </div>
        <div class="col-4 availability_pillbox">
            <div class="availability_info_loader skel_item">
                <div class="hidden_text" style="font-weight: bold;">-</div>
                <div class="hidden_text" style="font-size: 10px;">-</div>
            </div>
        </div>
        <div class="col-4 availability_pillbox">
            <div class="availability_info_loader skel_item">
                <div class="hidden_text" style="font-weight: bold;">-</div>
                <div class="hidden_text" style="font-size: 10px;">-</div>
            </div>
        </div>
        <div class="col-4 availability_pillbox">
            <div class="availability_info_loader skel_item">
                <div class="hidden_text" style="font-weight: bold;">-</div>
                <div class="hidden_text" style="font-size: 10px;">-</div>
            </div>
        </div>
        <div class="col-4 availability_pillbox">
            <div class="availability_info_loader skel_item">
                <div class="hidden_text" style="font-weight: bold;">-</div>
                <div class="hidden_text" style="font-size: 10px;">-</div>
            </div>
        </div>
        <div class="col-4 availability_pillbox">
            <div class="availability_info_loader skel_item">
                <div class="hidden_text" style="font-weight: bold;">-</div>
                <div class="hidden_text" style="font-size: 10px;">-</div>
            </div>
        </div>
        <div class="col-4 availability_pillbox">
            <div class="availability_info_loader skel_item">
                <div class="hidden_text" style="font-weight: bold;">-</div>
                <div class="hidden_text" style="font-size: 10px;">-</div>
            </div>
        </div>
    </div>

    `;
    return returnHTML;
}

templates.availabilityLoader = (name)=>{
    //<div class="skel_item skel_box" style="width:40px;"></div>
    //<div class="skel_item skel_box"></div>

    // MODIFY YOUR HTML TO MATCH THE ELEMENTS YOU'RE SKELETON LOADING
    let returnHTML = 
    `
    <div id="${name}" class="row">
        <div class="col-4 availability_pillbox">
            <div class="availability_info_loader skel_item">
                <div class="hidden_text" style="font-weight: bold;">-</div>
                <div class="hidden_text" style="font-size: 10px;">-</div>
            </div>
        </div>
        <div class="col-4 availability_pillbox">
            <div class="availability_info_loader skel_item">
                <div class="hidden_text" style="font-weight: bold;">-</div>
                <div class="hidden_text" style="font-size: 10px;">-</div>
            </div>
        </div>
        <div class="col-4 availability_pillbox">
            <div class="availability_info_loader skel_item">
                <div class="hidden_text" style="font-weight: bold;">-</div>
                <div class="hidden_text" style="font-size: 10px;">-</div>
            </div>
        </div>
        <div class="col-4 availability_pillbox">
            <div class="availability_info_loader skel_item">
                <div class="hidden_text" style="font-weight: bold;">-</div>
                <div class="hidden_text" style="font-size: 10px;">-</div>
            </div>
        </div>
        <div class="col-4 availability_pillbox">
            <div class="availability_info_loader skel_item">
                <div class="hidden_text" style="font-weight: bold;">-</div>
                <div class="hidden_text" style="font-size: 10px;">-</div>
            </div>
        </div>
        <div class="col-4 availability_pillbox">
            <div class="availability_info_loader skel_item">
                <div class="hidden_text" style="font-weight: bold;">-</div>
                <div class="hidden_text" style="font-size: 10px;">-</div>
            </div>
        </div>
    </div>

    `;
    return returnHTML;
}

templates.availabilityInfo = (time,number,max)=>{
    let returnHTML = `
        <div class="col-4 availability_pillbox">
            <div class="availability_info">
                <div style="font-weight: bold;">${time}</div>
                <div style="font-size: 10px;">${number}${max} available</div>
            </div>
        </div>
    `
    return returnHTML;
}

templates.availabilityInfoRoom = (time,number,max)=>{
    let returnHTML = `
        <div class="col-4 availability_pillbox">
            <div class="availability_info_room">
                <div style="font-weight: bold;">${time}</div>
                <div style="font-size: 10px;">${number}${max} available</div>
            </div>
        </div>
    `
    return returnHTML;
}


templates.homeBoxStructure = (box1, box2, box3, box4)=>{
    let returnHTML = `
    <div class="other_rooms_header">ESCAPE ADVENTURES!</div>
    
    <div class="box_row row">
        ${box1}
        ${box2}
    </div>
    <div class="box_row row">
        ${box3}
        ${box4}
    </div>
    `
    return returnHTML;
}

templates.fullAvailabilityBox = ()=>{
    let returnHTML = 
            `<div class="col-12 no_game_container">
                <div>
                    <div class="no_game_header">Don't see any times available for today?<br><br></div>
                    <div class="no_game_button">See All Availability</div>
                </div>
            </div>
            `;
    return returnHTML;
    
}
templates.fullAvailabilityBoxRoom = ()=>{
    let returnHTML = 
            `<div class="col-12 no_game_container">
                <div>
                    <div class="no_game_header_room">Don't see any times available for today?<br><br></div>
                    <div class="no_game_button_room">See All Availability</div>
                </div>
            </div>
            `;
    return returnHTML;
    
}

templates.gameBoxes = (boxID, boxName, roomName, roomInfo, roomCapacity, roomBG, roomLogo, tagline)=>{
    let returnHTML = 
    `
    <div id="${boxID}" class="box_desc col-lg-5" style="background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), ${decodeURI(roomBG)};background-size: cover; background-position: center center;">
        <div>
            <img src="${roomLogo}">
        </div>
        <div class="info_section">
            <div class="info_tagline">${tagline}</div>
            <div class="info_container">
                <div class="room_info">${roomCapacity}${roomInfo} DIFFICULTY</div>
                <div class="learn_button">MORE DETAILS &nbsp;<i class="fal fa-angle-right"></i></div>
            </div>
        </div>
        <div id="${boxName}" class="bookeo_box row">
            
        </div>
    </div>
    `
    return returnHTML;
}

templates.otherGameBoxes = (boxID, boxName, roomName, roomInfo, roomCapacity, roomBG, roomLogo, tagline)=>{
    let returnHTML = 
    `
    <div id="${boxID}" class="box_desc col-lg-4" style="background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), ${decodeURI(roomBG)};background-size: cover; background-position: center center;">
        <div>
            <img src="${roomLogo}">
        </div>
        <div class="info_section">
            <div class="info_tagline">${tagline}</div>
            <div class="info_container">
                <div class="room_info">${roomCapacity}${roomInfo} DIFFICULTY</div>
                <div class="learn_button">MORE DETAILS &nbsp;<i class="fal fa-angle-right"></i></div>
            </div>
        </div>
        <div id="${boxName}" class="bookeo_box row">
            
        </div>
    </div>
    `
    return returnHTML;
}

templates.reviews = ()=>{
    let returnHTML = 
        `
        <div class="col-lg-12 row nomargins">
            <div class="col-lg-4">
            <a href="https://www.tripadvisor.com/Attraction_Review-g54171-d8513810-Reviews-Escape_in_60-Charleston_South_Carolina.html" target="_blank">
            <img class="review_logo" src="logos/tripadvisor.svg" alt="review logo">
            <div class="review_stars">★★★★★</div>
            <div class="div_text">We had a great time. Very fun and challenging. We took our sons, 18 and 15, and we all had a great time. Highly recommended!</div>
            <div class="read_more">Read More Reviews</div>
            </a>
            </br></br>
            </div>
            <div class="col-lg-4">
            <a href="https://www.facebook.com/escape60/" target="_blank">
            <img class="review_logo" src="logos/facebook.svg" alt="review logo">
            <div class="review_stars">★★★★★</div>
            <div class="div_text">AH WE ESCAPED!!!!!! Had so much fun with this team!!!! If you haven't done Escape in 60 yet - you absolutely should!</div>
            <div class="read_more">Read More Reviews</div>
            </a>
            </br></br>
            </div>
            <div class="col-lg-4">
            <a href="https://www.google.com/maps/place/Escape+in+60/@32.7807843,-79.9307167,17z/data=!3m1!4b1!4m5!3m4!1s0x88fe7a0dc75ccce7:0x8b221dd6a094fe39!8m2!3d32.7808622!4d-79.9285356" target="_blank">
            <img class="review_logo" src="logos/google.svg" alt="review logo">
            <div class="review_stars">★★★★★</div>
            <div class="div_text">Fun and surprising. Challenging but not too hard to complete. Staff was awesome & helped us with extra clues that we much needed. </div>
            <div class="read_more">Read More Reviews</div>
            </a>
            </div>
        </div>
        `
    return returnHTML;
}

templates.sanitation = ()=>{
    let returnHTML = `
    <div class="div_header">SANITATION AND SAFETY</div><br>
    <div class="div_text"> Here at Escape in 60, we have always prided ourselves on providing the best possible experience to everyone that walks in our doors. This has always meant designing unique and challenging puzzles that you won't find anywhere else, creating a room experience that you'll be talking about for weeks to come, and providing excellent service. In the time of COVID-19, we have adapted our policies to provide the safest possible experience while maintaining our high standards across the board.<br><br>
    <div class="div_header">ADJUSTMENTS FOR SAFETY</div><br>
    Some of the changes we've made to ensure your safety include: disinfecting the rooms after every game, offering the option to book a private escape experience, and ensuring staff members who have a known exposure to COVID-19 only return to work after two negative test results.<br><br>
    <div class="div_header">COMPLYING WITH GUIDELINES</div><br>
    Escape in 60 is complying with all local and state guidelines. We continue to follow the public health situation very closely to ensure the safety of our guests and staff. 
    </div>
    `
    return returnHTML;
}

templates.header = ()=>{
    let returnHTML = 
    `
    <div class="navigation">
        <div id="choiceAwardBanner"><span>Tripadvisor Travelers' Choice 2021. Top 10% of attractions worldwide!</span><img src="img/choiceLogo.png"></div>
        
        <!-- ICON Banner -->
        <!--
        <div id="annoucementBanner">
        <div style="padding:10px;display:inline-block;"><i style="font-size:30pt;" class="fal fa-user-hard-hat"></i>  </i></div>
        <div style="width:90%;display:inline-block;"><span>Escape in 60 is currently closed until Tuesday, January 19th, as we prepare for our expansion. Thank you for visiting our website and we will see you on the 19th!</span></div></div>
        -->
        <!-- IMAGE Banner -->
        <!--
        <div id="annoucementBanner">
        <div style="display:inline-block;vertical-align: middle;max-height: 80px;padding-right: 10px;"><img style="width: 100%;height: 100%;" src="img/vday.png" /></div>
        <div style="display:inline-block;font-size: 17pt;"><span>We are open Monday, February 14th from 3pm to 10pm. Come celebrate Valentine's Day with US!</span></div></div>
        -->
        <div>
            <div id="headerContainer">
                <div id="gamesButton" class="header_item">GAMES</div>
                <div id="groupsButton" class="header_item">GROUPS</div>
                <div id="whatButton" class="header_item">WHAT IS IT?</div>
                <div id="howButton" class="header_item">HOW IT WORKS</div>
                <div id="faqsButton" class="header_item">FAQs</div>
                <div id="giftcardsButton" class="header_item">GIFT CARDS</div>

                <div data-id="main" class="book_now_button book_now_home" data-value="booknow" style="z-index:99;">
                    <img style="max-height: 60px;max-width: 100%;margin-right:10px;" class="pic_shadow pic_highlight pic_highlight_selected" src="logos/escape_logo_small_white.png">
                    <span class="home_book_text">BOOK NOW</span>
                </div>

            </div>
        </div>
    </div>

    <div class="mobile_nav col-12">
        <div class="row" style="height: 100%;">
            <div class="mobile_logo col-5">
                <img style="height: 100%;" class="pic_shadow pic_highlight pic_highlight_selected" src="logos/escape_logo_small.png">
            </div>
            <div class="phone_nav col-5"><i class="fal fa-mobile-alt"></i>&nbsp;&nbsp;843-709-6266</div>
            <div class="nav_hamburger col-2"><i class="fal fa-bars"></i></div>
        </div>
    </div>
    <div id="choiceAwardBannerMobile"><span>Tripadvisor Travelers' Choice 2021!</span><img src="img/choiceLogo.png"></div>
    <!--
    <div id="annoucementBannerMobile">
        <div style="display:inline-block;vertical-align: middle;max-height: 80px;padding-right: 10px;"><img style="width: 100%;height: 100%;" src="img/vday.png" /></div>
        <div style="style="display:inline-block;font-size: 17pt;""><span>We are open Monday, February 14th from 3pm to 10pm. Come celebrate Valentine's Day with US!</span></div>
    </div>
    -->
    <div class="nav_slider">
	    <div class="nav_slider_container">
		    <!--<div class="nav_close_button"><i class="fal fa-times-circle"></i></div>-->
		    <div data-id="main" class="nav_slider_item book_now_button_mobile" style="padding: 5px 15px;" data-value="booknow">BOOK NOW</div>
		    <div id="gamesButtonMobile" class="nav_slider_item home_mobile_nav">GAMES</div>
		    <div id="groupsButtonMobile" class="nav_slider_item what_mobile_nav">GROUPS</div>
		    <div id="whatButtonMobile" class="nav_slider_item gift_mobile_nav">WHAT IS IT?</div>
		    <div id="howButtonMobile" class="nav_slider_item faq_mobile_nav">HOW IT WORKS</div>
		    <div id="faqsButtonMobile" class="nav_slider_item how_mobile_nav">FAQs</div>
            <div id="giftcardsButtonMobile" class="nav_slider_item how_mobile_nav">GIFT CARDS</div>
		    <div data-id="hours" class="nav_slider_special" style="border-top: 1px solid #ffffff40;padding-top: 25px;margin-bottom:20px;">
                <div style="font-size: 18pt;margin-bottom: 20px;">
                    <span class="nav_slider_hours"></span>
                </div>			    
		    </div>
		    <div data-id="map" class="nav_slider_special map_nav">
                <div style="margin-bottom: -10px;">
                    <a href="https://www.google.com/maps/place/Escape+in+60/@32.7807888,-79.9307167,17z/data=!4m13!1m7!3m6!1s0x88fe7a0dc77100df:0x5e5132197ee5f68!2s45+S+Market+St,+Charleston,+SC+29401!3b1!8m2!3d32.7807843!4d-79.928528!3m4!1s0x88fe7a0dc75ccce7:0x8b221dd6a094fe39!8m2!3d32.7807843!4d-79.928528" target="_blank">
                    <i class="fal fa-map-marker-alt" style="font-size: 18pt;"></i></br><span>45 Market St.  Charleston, SC</span></a>
                </div>
               			    
		    </div>
		    <div data-id="phone" class="nav_slider_special phone_nav">
                <div style="margin-bottom: -10px;">
                    <i class="fal fa-mobile-alt" style="font-size: 18pt;"></i></br><span>843-709-6266 - Text or Call</span>
                </div>			    
		    </div>
		    <div data-id="mail" class="nav_slider_special">
                <div style="margin-bottom: -10px;">
                    <a href="mailto:info@escape60.com?Subject=Contact%20Escape%20in%2060">
                    <i class="fal fa-envelope-open" style="font-size: 18pt;"></i></br><span>info@escape60.com</span></a>
                </div>		    
		    </div>
	    </div>
    </div>
    <div class="nav_slider_block"></div>
    
    `;
    return returnHTML;
}


templates.footer = (year)=>{
    let returnHTML = 
    `
    <div id="footerContainer">
        <div id="footerInner" class="col-lg-12">
            <img src="logos/escape_logo_small_white.png">
            <div class="footer_links col-lg-10 offset-lg-1 row">
                <div class="local_links col-lg-4">
                    <li class="footer_games">GAMES</li>
                    <li class="footer_groups">GROUPS</li>
                    <li class="footer_what">WHAT IS IT?</li>
                    <li class="footer_how">HOW IT WORKS</li>
                    <li class="faqs_link">FAQs</li>
                    <li class="footer_gift">GIFT CARDS</li>
                </div>
                <div class="social_links col-lg-4">
                    <span class="social_header">SOCIAL LINKS</span><br><br>
                    <a href="https://www.facebook.com/escape60/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/escapein60chs/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.tripadvisor.com/Attraction_Review-g54171-d8513810-Reviews-Escape_in_60-Charleston_South_Carolina.html" target="_blank"><i class="fab fa-tripadvisor"></i></a>
                    <a href="https://www.yelp.com/biz/escape-in-60-charleston-2" target="_blank"><i class="fab fa-yelp"></i></a>
                </div>
                <div class="hours_footer col-lg-4">
                    <div class="social_header">HOURS</div><br>
                    <div class="col-12" style="padding:0;">
                        <div class="hours_line col-12 row">
                            <div class="hours_block hours_right col-5">SUN:</div>
                            <div class="hours_block hours_left col-7">${home.hoursInfo.displayHours.sunday}</div>
                        </div>
                        <div class="hours_line col-12 row">
                            <div class="hours_block hours_right col-5">MON:</div>
                            <div class="hours_block hours_left col-7">${home.hoursInfo.displayHours.monday}</div>
                        </div>
                        <div class="hours_line col-12 row">
                            <div class="hours_block hours_right col-5">TUE:</div>
                            <div class="hours_block hours_left col-7">${home.hoursInfo.displayHours.tuesday}</div>
                        </div>
                        <div class="hours_line col-12 row">
                            <div class="hours_block hours_right col-5">WED:</div>
                            <div class="hours_block hours_left col-7">${home.hoursInfo.displayHours.wednesday}</div>
                        </div>
                        <div class="hours_line col-12 row">
                            <div class="hours_block hours_right col-5">THU:</div>
                            <div class="hours_block hours_left col-7">${home.hoursInfo.displayHours.thursday}</div>
                        </div>
                        <div class="hours_line col-12 row">
                            <div class="hours_block hours_right col-5">FRI:</div>
                            <div class="hours_block hours_left col-7">${home.hoursInfo.displayHours.friday}</div>
                        </div>
                        <div class="hours_line col-12 row">
                            <div class="hours_block hours_right col-5">SAT:</div>
                            <div class="hours_block hours_left col-7">${home.hoursInfo.displayHours.saturday}</div>
                        </div>
                        <div class="hours_line col-12 row" style="padding-top:20px;">
                            <div class="hours_block">If you are interested in a group booking (9 or more) and would like to reserve a room outside of our normal business hours, please email us at <a href="mailto:info@escape60.com?Subject=Group%20Hours">info@escape60.com</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="padding-bottom: 8vh; padding-top:4vh;">
                <span class="bookNowLargeButton">BOOK NOW</span>
            </div>
            <div class="row">
                <div class="footer_contact col-lg-4 map_nav">
                    <a href="https://www.google.com/maps/place/Escape+in+60/@32.7807888,-79.9307167,17z/data=!4m13!1m7!3m6!1s0x88fe7a0dc77100df:0x5e5132197ee5f68!2s45+S+Market+St,+Charleston,+SC+29401!3b1!8m2!3d32.7807843!4d-79.928528!3m4!1s0x88fe7a0dc75ccce7:0x8b221dd6a094fe39!8m2!3d32.7807843!4d-79.928528" target="_blank">
                    <i class="fal fa-map-marker-alt"></i><span> 45 Market St.  Charleston, SC</span></a>
                </div>
                <div class="footer_contact col-lg-4 phone_nav">
                    <i class="fal fa-mobile-alt"></i>&nbsp;<span>843-709-6266 - Text or Call</span>
                </div>
                <div class="footer_contact col-lg-4">
                    <a href="mailto:info@escape60.com?Subject=Contact%20Escape%20in%2060">
                    <i class="fal fa-envelope-open"></i><span> info@escape60.com</span></a>
                </div>
            </div>
        </div>
        <div class="copyright">
            &copy;${year} ESCAPE IN 60 ALL RIGHTS RESERVED
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
                <textarea class="contact_input upload_input" id="contactMessage" style="height: 148px; resize: none; margin-bottom: 5vh; font-family: 'Questrial', sans-serif;" tabindex="3" placeholder="Message"></textarea>
                <div style="text-align: center"><div id="sendMessageButton" class="ft_button" style="max-width: 250px;margin:0 auto;">Send Message</div></div>
            </div>
        </div>  
    </div>

    `;
    return returnHTML;
}

templates.faqs= ()=>{
    let returnHTML = `
        <div class="other_page_container col-lg-12 nopadding">
            <div class="col-lg-12 page_header">
                <span class="page_title">FAQS</span><br><br>
                <span class="page_tagline">Have some questions?</span><br><br>
                <span class="page_long_desc">No problem!  We can walk you through
                every step of the process.  If you still need assistance, please feel free to call or text us.</span><br><br>
                <span class="page_short_desc">Tap or click the questions below for answers</span>
            </div>

            <div class="col-lg-12 question_container">
                <div class="col-lg-8 offset-lg-2 nopadding" style="margin-bottom: 5vh;">
                <video style="width: 100%;" poster="img/faq_placeholder.png" preload="none" controls><source src="video/Q&A_9-5-16.mp4" type="video/mp4"></video>
                </div>
                <div class="col-lg-8 offset-lg-2 question_block">
                    <div class="down_arrow"><i class="fal fa-chevron-down"></i></div>
                    <div class="question">What is Escape in 60?</div>
                    <div class="answer">Groups of 2 – 8 try to escape a room in less than 60 minutes by finding clues, solving puzzles and completing 
                    challenges.</div>
                </div>
                <div class="col-lg-8 offset-lg-2 question_block">
                    <div class="down_arrow"><i class="fal fa-chevron-down"></i></div>
                    <div class="question">Why should I play Escape in 60?</div>
                    <div class="answer">Enjoy the adrenaline rush of mindboggling entertainment in a safe and fun environment with family 
                    or friends. Escape in 60 is a great team building group activity for all ages! All the best parts of gaming brought to life.</div>
                </div>
                <div class="col-lg-8 offset-lg-2 question_block">
                    <div class="down_arrow"><i class="fal fa-chevron-down"></i></div>
                    <div class="question">How much does it cost to play?</div>
                    <div class="answer">Each game is $32.99 per person.</div>
                </div>
                <div class="col-lg-8 offset-lg-2 question_block">
                    <div class="down_arrow"><i class="fal fa-chevron-down"></i></div>
                    <div class="question">How many people can play?</div>
                    <div class="answer">Groups may be as large as 8 people.</div>
                </div>
                <div class="col-lg-8 offset-lg-2 question_block">
                    <div class="down_arrow"><i class="fal fa-chevron-down"></i></div>
                    <div class="question">Do you accept large or corporate groups?</div>
                    <div class="answer">Yes, Escape in 60 is a great team building exercise. Groups of 9 or more please email us at 
                    <a href="mailto:info@escape60.com?subject=Large or Corporate Group Inquiry">info@escape60.com</a>.</div>
                </div>
                <div class="col-lg-8 offset-lg-2 question_block">
                    <div class="down_arrow"><i class="fal fa-chevron-down"></i></div>
                    <div class="question">Will I be grouped with other people?</div>
                    <div class="answer">Groups of less than 8 people can be paired with other groups if they do not book a private room. Private rooms are available.</div>
                </div>
                <div class="col-lg-8 offset-lg-2 question_block">
                    <div class="down_arrow"><i class="fal fa-chevron-down"></i></div>
                    <div class="question">How can I play with my friends?</div>
                    <div class="answer">You can either have each person book their slot for themselves or have one person book the number of slots 
                    that you desire for the whole group.</div>
                </div>
                <div class="col-lg-8 offset-lg-2 question_block">
                    <div class="down_arrow"><i class="fal fa-chevron-down"></i></div>
                    <div class="question">Can I play with <i>just</i> my friends?</div>
                    <div class="answer">Yes, but you will need to make sure you choose the "private room" option while booking or give us a call and we can create your booking for you.</div>
                </div>
                <div class="col-lg-8 offset-lg-2 question_block">
                    <div class="down_arrow"><i class="fal fa-chevron-down"></i></div>
                    <div class="question">Do I need to arrive early?</div>
                    <div class="answer">Please arrive 15 minutes prior to your scheduled game time and be ready to play at your reserved game time. 
                    There is a brief orientation prior to the commencement of your game.</div>
                </div>
                <div class="col-lg-8 offset-lg-2 question_block">
                    <div class="down_arrow"><i class="fal fa-chevron-down"></i></div>
                    <div class="question">How long is a game?</div>
                    <div class="answer">Each game is sixty minutes long. Plan to spend 15 minutes prior to your game for signing in, introductions 
                    and explanations. After your game is over, we will spend a few minutes to take photos and explain any unsolved mysteries.</div>
                </div>
                <div class="col-lg-8 offset-lg-2 question_block">
                    <div class="down_arrow"><i class="fal fa-chevron-down"></i></div>
                    <div class="question">Are you really locked in a room?</div>
                    <div class="answer">Yes and no. Our doors are held shut magnetically but can be opened at any time using a provided button inside the room. Moreover, safety is our top priority. If the power fails, all doors automatically open.</div>
                </div>
                <div class="col-lg-8 offset-lg-2 question_block">
                    <div class="down_arrow"><i class="fal fa-chevron-down"></i></div>
                    <div class="question">Is there an age limit to play?</div>
                    <div class="answer">Technically, no but the games can be very challenging for kids 10 and under to solve alone. However, 
                    families have successfully escaped as children often notice things that adults have missed. Players under 14 must be accompanied 
                    by a paying adult.</div>
                </div>
                <div class="col-lg-8 offset-lg-2 question_block">
                    <div class="down_arrow"><i class="fal fa-chevron-down"></i></div>
                    <div class="question">Do you offer refunds?</div>
                    <div class="answer">Our games are non-refundable; however, a reservation can be changed one time, 24 hours before the room's scheduled start time.</div>
                </div>
                <div class="col-lg-8 offset-lg-2 question_block">
                    <div class="down_arrow"><i class="fal fa-chevron-down"></i></div>
                    <div class="question">How do I book a game?</div>
                    <div class="answer">For your convenience reservations to play can be made on our website. All reservations must be paid for at the time of booking.</div>
                </div>

            </div>
            <div class="book_now_large">
                <span class="bookNowLargeButton">BOOK NOW</span>
            </div>
        </div>
    `
    return returnHTML;
}

templates.groupsPage = ()=>{
    let returnHTML = `
    
        <div class="other_page_container col-lg-12 nopadding">
            <div class="col-lg-12 page_header">
                <span class="page_title">GROUPS</span><br><br>
                <span class="page_tagline">Want to bring your whole team?</span><br><br>
                <span class="page_long_desc">Escape in 60 is a great team building experience!  Please book your next
                corporate event, church group, or anyone other type of larger group online.</span><br><br>
                <span class="page_short_desc">Click or tap the "Book Group (9+)" button to start your group booking.</span>
            </div>

            <div class="group_outer col-lg-12">
                
                <div class="group_container col-lg-8 offset-lg-2 row">
                    <div class="group_name col-lg-5">
                        <span>GROUP ESCAPE EXPERIENCE</span>
                        <span>9+ PLAYERS </span>
                    </div>
                    <div class="group_desc col-lg-7">
                        <div class="group_image">    
                            <img src="img/Pirate2-400x480.jpg">
                        </div>
                        <br><br>
                        You can call or book online for any of our available rooms. We offer group booking online to make it easy to gather your party and join us on an Escape Adventure. <br><br>Groups of more than 9 should use the "Book Group (9+)" button below to get started.
                    </div>
                </div>
                <div class="col-lg-8 offset-lg-2 contact_us">
                    Book Group (9+)
                </div>
            </div>

            <!--
            <div class="group_outer col-lg-12">
                <div class="group_container col-lg-8 offset-lg-2 row">
                    <div class="group_name col-lg-5">
                        <span>VIP ESCAPE EXPERIENCE</span>
                        <span>$38.99 per person</span>
                        <span>PLAYERS 2 - 40</span>
                    </div>
                    <div class="group_desc col-lg-7">
                        <div class="group_image">    
                            <img src="img/Pirate4-400x272.jpg">
                        </div>
                        <br><br>
                        Enjoy a VIP escape experience at Escape in 60! In addition to everything included in the Standard Escape 
                        Experience, groups will have all games start at the same time, and not according to our normal staggered 
                        schedule. Contact us for information and booking.
                    </div>
                </div>
                <div class="col-lg-8 offset-lg-2 contact_us">
                    Contact Us
                </div>
            </div>

            <div class="group_outer col-lg-12">
                <div class="group_container col-lg-8 offset-lg-2 row">
                    <div class="group_name col-lg-5">
                        <span>LARGE GROUP PACKAGES</span>
                        <span>PLAYERS 6 - 32</span>
                    </div>
                    <div class="group_desc col-lg-7">
                        <div class="group_image">    
                            <img src="img/Ransom1Sq-400x272.jpg">
                        </div>
                        <br><br>
                        <u>Celebration Package $399 for up to 8 players</u>
                        Price includes a Standard Escape Experience for each person, two pizzas for the group (one cheese and one 
                        pepperoni), drinks, and a pull apart cupcake birthday cake (2 cupcakes). Additional players are priced at $35 
                        per person. No outside food or drinks allowed.
                        <br><br>
                        <u>Team Package $599 for up to 16 people</u>
                        Price includes a VIP Escape Experience - any two rooms will start at the same time, as well as private use of 
                        our lobby for one hour before or after games. Catering available.
                        <br><br>
                        <u>Group Package $999 for up to 32 people</u>
                        Price includes a VIP Escape Experience - all rooms will start at the same time, as well as private use of 
                        our lobby for one hour before or after games. Catering available.
                    </div>
                </div>
                <div class="col-lg-8 offset-lg-2 contact_us">
                    Contact Us
                </div>
            </div>
            
            <div class="group_outer col-lg-12">
                <div class="group_container col-lg-8 offset-lg-2 row">
                    <div class="group_name col-lg-5">
                        <span>VENUE BUYOUT</span>
                        <span>For exclusive use of our upscale space please email <a href="mailto:info@escape60.com?subject=Venue%20Buyout%20Inquiry">info@escape60.com</a></span>
                        <span>PLAYERS 2 - 40</span>
                    </div>
                    <div class="group_desc col-lg-7">
                        <div class="group_image">    
                            <img src="img/Pirate5-400x272.jpg">
                        </div>
                        <br><br>
                        Exclusive use of our amazing venue! Perfect for large corporate events any time of the day. Your group will
                        have access to all FOUR escape game rooms as well as our lobby space.
                        <br><br>
                        Catering is available from local restaurants. Contact us for more information.
                    </div>
                </div>
                <div class="col-lg-8 offset-lg-2 contact_us">
                    Contact Us
                </div>
            </div>
            -->
            <div id="contact"></div>

        </div>

    `
    return returnHTML;
}

templates.whatPage = ()=>{
    let returnHTML = `
    
        <div class="other_page_container col-lg-12 nopadding">
            <div class="col-lg-12 page_header">
                <span class="page_title">WHAT IS IT?</span><br><br>
                <span class="page_tagline">What is Escape In 60?</span><br><br>
                <span class="page_long_desc">Find out what we're all about.  Be sure to check out the FAQs and information about
                the specific rooms!</span><br><br>
                <span class="page_short_desc">Click the video below to see what we do</span>
            </div>

            <div class="col-lg-12">
                <div class="col-lg-8 offset-lg-2 nopadding" style="margin-bottom: 5vh;">
                <video style="width: 100%;" poster="img/what_family_image.jpg" preload="none" controls><source src="video/For Families_9-5-16.mp4" type="video/mp4"></video>
                </div>
                <div class="col-lg-8 offset-lg-2 nopadding" style="margin-bottom: 5vh;font-size: 14pt;line-height: 1.4;">
                Located in beautiful downtown Charleston SC, on the famed Market Street, Escape in 60 is the perfect stop to add some adventure to your vacation. <br><br>We also specialize in team-building experiences for corporate and large groups that will leave everyone feeling accomplished and bonded. We have 4 escape rooms that offer different stories, experiences and puzzles. Each room immerses you in an exciting scenario – from escaping a sinking pirate ship to saving your child from a kidnapper. Whether you're looking for family fun or spine-tingling shocks, we've got you covered. <br><br>Once in the room, you'll have 60 minutes to use teamwork and critical thinking to solve the puzzles and escape before your time runs out. Do you have what it takes to escape in 60? Stop in and find out!
                </div>
                <div class="book_now_large">
                    <span class="bookNowLargeButton">BOOK NOW</span>
                </div>
            </div>
        </div>

    `
    return returnHTML;
}

templates.howPage = ()=>{
    let returnHTML = `
    
        <div class="other_page_container col-lg-12 nopadding">
            <div class="col-lg-12 page_header">
                <span class="page_title">HOW IT WORKS</span><br><br>
                <span class="page_tagline">How does this escape room thing work?</span><br><br>
                <span class="page_long_desc">This is a step-by-step walkthrough as to how our games are played.  Please feel free to reach
                out to us if you have any questions!</span><br><br>
                <span class="page_short_desc">See the steps below to start your adventure</span>
            </div>

            <div class="col-lg-12 row nopadding nomargins" style="display: flex;align-items: baseline;color: white;">
                <div class="step_container col-lg-3">
                    <div id="step1_img" class="how_circle_img"></div>
                    <div class="step_box" style="background: linear-gradient(320deg,#fb0000 0,#ffa300 100%);">
                        <div class="step_text">
                            <span style="font-size: 24px; font-weight: bold;">Step 1<br><br>Choose Your Escape Adventure</span>
                        </div>
                        <div class="step_desc">
                        Book and escape! <br><br>
                        All of our games have a different theme and backstory. Our exciting games range from a seafaring voyage, an ancient adventure, a casino heist, and a mystery surrounding the kidnapping of a child.
                        </div>
                    </div>
                </div>
                <div class="step_container col-lg-3">
                    <div id="step2_img" class="how_circle_img"></div>
                    <div class="step_box" style="background: linear-gradient(320deg,#04bb06 0,#05eabe 100%);">
                        <div class="step_text">
                            <span style="font-size: 24px; font-weight: bold;">Step 2<br><br>You're Locked In A Room</span>
                        </div>
                        <div class="step_desc">
                        You are given a mission and locked into a themed room.<br><br>
                        You must explore to find hints and clues. The entire team must work together and make quick decisions 
                        if you are to escape the room.
                        </div>
                    </div>
                </div>
                <div class="step_container col-lg-3">
                    <div id="step3_img" class="how_circle_img"></div>
                    <div class="step_box" style="background: linear-gradient(320deg,#0125fb 0,#bc65f5 100%);">
                        <div class="step_text">
                            <span style="font-size: 24px; font-weight: bold;">Step 3<br><br>Work To Solve Puzzles</span>
                        </div>
                        <div class="step_desc">
                        Communicate with teammates. <br><br>
                        Our most successful teams work together by playing to everyone's strengths. Some people excel at mathematical puzzles while others are observant and quick to notice patterns. Make sure to communicate with your group about what you've solved, what you're stuck on, and what you need to work through together.   
                        </div>
                    </div>
                </div>
                <div class="step_container col-lg-3">
                    <div id="step4_img" class="how_circle_img"></div>
                    <div class="step_box" style="background: linear-gradient(to top left,#b116f5 0,#ff6c6c 100%);">
                        <div class="step_text">
                            <span style="font-size: 24px; font-weight: bold;">Step 4<br><br>Escape In 60 Minutes Or Less</span>
                        </div>
                        <div class="step_desc">
                        Solve the puzzles and make it out! <br><br>
                        You may find a container that needs a passcode to open, or a lock that needs a key. If you search hard enough, you can figure out codes, open all the locks, find hidden items, and ultimately free yourself.
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                <div class="book_now_large">
                    <span class="bookNowLargeButton">BOOK NOW</span>
                </div>
                </div>
            </div>
        </div>

    `
    return returnHTML;
}

templates.giftCardsPage = ()=>{
    let returnHTML = `
    
        <div class="other_page_container gift_card_container col-lg-12 nopadding">
            <div class="col-lg-12 page_header">
                <span class="page_title">GIFT CARDS</span><br><br>
                <span class="page_tagline">Give the gift of adventure!</span><br><br>
                <span class="page_long_desc">Escape in 60 offers the best gift experience you can give! 
                These cards are good for any of our rooms and any available times.</span><br><br>
                <span class="page_short_desc">Click or tap the link below to buy online</span>
            </div>

            <div class="col-lg-12">
                <div class="gift_card_img_container" col-lg-8 offset-lg-2">
                    <img src="img/GiftCard.png">
                </div>
                <div class="col-lg-8 offset-lg-2">
                    <div style="margin: 5vh 0;">This is the fastest, easiest, and best way to get anyone ready to experience Escape in 60! 
                    Call us at 843-709-6266 or purchase online.</div>
                    <div class="book_now_large">
                        <span class="bookNowLargeButton">Purchase Online</span>
                    </div>
                </div>
            </div>
        </div>

    `
    return returnHTML;
}


