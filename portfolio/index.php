<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $toEmail = "lakshikamadhurangi12@email.com"; 
    $subject = "New Contact Form Submission";
    
    $firstName = $_POST["fname"];
    $lastName = $_POST["lname"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $fullMessage = "First Name: $firstName\n"
                 . "Last Name: $lastName\n"
                 . "Phone Number: $phone\n"
                 . "Email: $email\n\n"
                 . "Message:\n$message";
    
    $headers = "From: $email";
    
    if (mail($toEmail, $subject, $fullMessage, $headers)) {
        $response = [
            "success" => true,
            "message" => "Message sent successfully. Thank you for contacting us!"
        ];
    } else {
        $response = [
            "success" => false,
            "message" => "An error occurred while sending the message."
        ];
    }
} else {
    $response = [
        "success" => false,
        "message" => "Invalid request method."
    ];
}

header("Content-Type: application/json");
echo json_encode($response);
?>
