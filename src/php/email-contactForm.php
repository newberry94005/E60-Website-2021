<?php
   
//POST VARIABLES FROM HTML
$name = $_POST['contactName'];
$emailFrom = $_POST['contactEmail'];
$message = $_POST['contactMessage'];

require 'plugins/class.phpmailer.php';  // grab phpmailer

$mail = new PHPMailer;

$mail->setFrom('contactform@mooredesigngroup.net');
//$mail->addAddress('lmaner@gmail.com');
//$mail->addAddress('newberry94005@hotmail.com');     // Name is optional
$mail->addBCC('lmaner@gmail.com');     // Name is optional
$mail->addBCC('newberry94005@yahoo.com');
$mail->addReplyTo($emailFrom, $name . ' - Moore Design Group Contact Form');

//$mail->addAttachment($file);         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Website Contact Form Submitted';

$emailTemplate = <<<HTML

                                
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style type="text/css">
      a[x-apple-data-detectors] {color: inherit !important;text-decoration: none !important;font-size: inherit !important;font-family: inherit !important;font-weight: inherit !important;line-height: inherit !important;}
    </style>
  </head>
  <body style="margin:0px;font-family:Open Sans, Helvetica, Arial, sans-serif;">
    <div class="hiddenHeader" style="display:none;font-size:1px;color:#fefefe;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">Notification from Moore Design Group</div>
    <div id="mainContainer" style="background-color:#f8f8f8;width:100%;">
      <div id="headItem" style="padding-bottom:20px;border-bottom:15px solid #ad0000;background:#212121;">
        <div id="headLogo" style="padding:13px;display:inline-block;">
          <img src="http://preprod.flyertap.com/MooreDesign/HTML/web/img/mdg_logo_white.png" alt="Moore Design Group Logo" style="width:75px;position:absolute;"/></div>
        <div id="headText" style="display:block;text-align:center;font-size:18pt;color:white;">Email from Website Contact</div>
      </div>
      <div id="eventInfoContainter">
        <div id="eventInfo">
          <div id="eventDetailsContainer" style="padding:15px;">
            <div id="contactName" class="event_item event_item_bottom" style="text-align:left;padding:30px;position:relative;border-bottom:1px solid #e2e2e2;">
              <img src="http://preprod.flyertap.com/MooreDesign/HTML/web/img/user_icon.png" alt="Name" style="margin-right:5%;height:40px;width:40px;vertical-align:middle;display:block;padding-bottom:10px;"/>$name</div>
            <div id="contactEmail" class="event_item event_item_bottom" style="text-align:left;padding:30px;position:relative;border-bottom:1px solid #e2e2e2;">
              <img src="http://preprod.flyertap.com/MooreDesign/HTML/web/img/email_icon.png" alt="Email Address" style="margin-right:5%;height:40px;width:40px;vertical-align:middle;display:block;padding-bottom:10px;"/>$emailFrom</div>
            <div id="contactType" class="event_item event_item_bottom" style="text-align:left;padding:30px;position:relative;border-bottom:1px solid #e2e2e2;">
              <img src="http://preprod.flyertap.com/MooreDesign/HTML/web/img/email_type.png" alt="Type of Question" style="margin-right:5%;height:40px;width:40px;vertical-align:middle;display:block;padding-bottom:10px;"/>Phone: $phone<br/>State: $state<br/>Company: $company</div>
            <div id="contactMessage" class="event_item" style="text-align:left;padding:30px;position:relative;">
              <img src="http://preprod.flyertap.com/MooreDesign/HTML/web/img/email_comment.png" alt="Message" style="margin-right:5%;height:40px;width:40px;vertical-align:middle;display:block;padding-bottom:10px;"/>$message</div>
          </div>
        </div>
      </div>
      <div id="footerContainer">
        <div id="footerLogo" style="text-align:center;margin-top:45px;">
          <img src="http://preprod.flyertap.com/MooreDesign/HTML/web/img/mdg_logo.png" alt="Moore Design Group Logo" style="height:105px;"/></div>
        <div id="footerText"></div>
      </div>
      <div id="emailInfoContainer" style="margin-top:45px;padding-bottom:50px;text-align:center;">
      </div>
    </div>
  </body>
</html>

HTML;


$mail->Body    = $emailTemplate;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

?>