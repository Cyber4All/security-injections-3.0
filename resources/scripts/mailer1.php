<?php

$admin_email = "tylernhoward@example.com";
$email = "enjoi1485@gmail.com";
$subject = "Feedback";
$comment = "HEY";

//send email
mail($admin_email, $subject, $comment, "From:" . $email);

//Email response
echo "Thank you for contacting us!";

?>
