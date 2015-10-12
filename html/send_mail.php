<?php
require '../Mail/PHPMailerAutoload.php';
    
    $from_subject=$_POST['subject'];
    $from_email=$_POST['email'];
    $from_message=$_POST['message'];
    $from_tel = $_POST['tel'];
    
    $mail = new PHPMailer;
    $mail->ContentType="text/html";
    $mail->Charset = "utf-8";
    $mail->Encoding = "base64";
    //$mail->SMTPDebug = 3;                               // Enable verbose debug output
    
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.works.naver.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'smtp@nanuly.kr';                 // SMTP username
    $mail->Password = 'VAT2015#';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to
    

    $mail->setFrom('smtp@nanuly.kr');
    $mail->addAddress('support@nanuly.kr', '나누리 소프트');     // Add a recipient

    $mail->Subject = $from_subject;
    //$mail->Body    = $from_message;
    $mail->Body = '<!DOCTYPE html><html lang="en-US"><head><meta charset="utf-8"></head><body>';
    $mail->Body .= '<table border="0" cellpadding="0" cellspacing="0" border-collapse="collapse" align="center" style="background:#EFF2F3;width:100%;margin: 0 auto;font-family:"NanumGothic","나눔바른고딕",HelveticaNeue-Light,AppleSDGothicNeo-Light,Apple SD Gothic Neo,Apple Gothic,돋움,Dotum,sans-serif;"><tbody>';
    $mail->Body .= '<tr><td style="background:#0A94FE;padding:20px;"><img src="http://blue.nanuly.com/img/img_logo.png" style="display:block;margin:0 auto;" /></td></tr>';
    $mail->Body .= '<tr><td style="text-align:center;padding:50px 10px;"><h2 style="display:inline;color:#202C38;font-size:30px;">'.$from_subject.'</h2></td></tr>';
    $mail->Body .= '<tr><td style="text-align:center;padding:0 10px;"><p style="color:#4B5664;font-size:14px;font-weight:bold;margin:0;"><pre>'.$from_message.'</pre></p></td></tr>';
    $mail->Body .= '<tr><td style="text-align:center;padding:0 10px;"><p style="color:#4B5664;font-size:14px;font-weight:bold;margin:0;"><pre>'.$from_tel.'</pre></p></td></tr>';
    $mail->Body .= '<tr><td style="text-align:center;padding:20px 10px;"><a href="mailto:'.$from_email.'" target="_blank" style="color:#0A94FE;font-size:12px;text-decoration:none;font-family:"NanumGothic","나눔바른고딕",HelveticaNeue-Light,AppleSDGothicNeo-Light,Apple SD Gothic Neo,Apple Gothic,돋움,Dotum,sans-serif;">'.$from_email.'</a></td></tr>';
    $mail->Body .= '<tr><td style="border-top:1px solid #A4C6E0;padding:10px;text-align:center;"><p style="color:#A4C6E0;font-size:12px;">ⓒ 2015 Nanuly Inc. All Rights Reserved</p></td></tr></tbody></table></body></html>';
    //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
  
    if(!$mail->send()) {
        //echo 'Message could not be sent.';
        //echo 'Mailer Error: ' . $mail->ErrorInfo;
        result(false);
    } else {
        result(true);
       // echo 'Message has been sent';
    }    
    
    function result( $isOk = false )
    {
        include('contact_ok.html');        
    }
?>