<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uma Nursing College , Unjha</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    
    <style>
        body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(to right, #f8f9fa, #e0e0e0);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            animation: fadeIn 2s ease-in-out;
        }

        .thank-you-box {
            background: white;
            border-radius: 15px;
            padding: 40px;
            text-align: center;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            animation: slideUp 1s ease-in-out;
            max-width: 400px;
             word-wrap: break-word;
             
        }

        .thank-you-box h2 {
            color:rgba(5, 5, 247, 1);
            margin-bottom: 20px;
            animation: pulse 2s infinite;
        }

        .thank-you-box p {
            font-size: 18px;
            color: #333;
        }

        .icon {
            font-size: 50px;
            color:rgba(5, 5, 247, 1);
            animation: bounce 1.5s infinite;
        }

        @keyframes fadeIn {
            from { opacity: 0 }
            to { opacity: 1 }
        }

        @keyframes slideUp {
            from {
                transform: translateY(50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
        }

        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-10px);
            }
        }
    </style>
</head>
<body>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"] ?? '';
    $email = $_POST["email"] ?? '';
    $phone = $_POST["phone"] ?? '';
    $program = $_POST["program"] ?? '';
    $message = $_POST["message"] ?? '';

    $conn = new mysqli('localhost', 'root', '', 'nursing_college');
    if ($conn->connect_error) {
        die('<div class="thank-you-box"><i class="fas fa-times-circle icon"></i><h2>Connection failed</h2><p>' . $conn->connect_error . '</p></div>');
    } else {
        $stmt = $conn->prepare("INSERT INTO contact_form (name, email, phone,program, message) VALUES (?, ?, ?, ?,?)");
        $stmt->bind_param("ssiss", $name, $email, $phone,$program, $message);
        if ($stmt->execute()) {
            echo '
<div class="thank-you-box" id="thankYouBox">
    <i class="fas fa-check-circle icon" style="color:#00ccff;"></i>
    <h2 style="color:#0000ff;">Thank You, ' . htmlspecialchars($name) . '!</h2>
    <p>We have successfully received your inquiry. Here are the details you submitted:</p>

    <div style="margin-top: 20px; background-color:#f0f6fc; padding: 20px; border-radius: 10px; text-align:left; box-shadow: inset 0 0 8px rgba(0,0,0,0.05);">
        <p><i class="fas fa-user" style="color:#007bff;"></i> <strong>Name:</strong> ' . htmlspecialchars($name) . '</p>
        <p><i class="fas fa-envelope" style="color:#007bff;"></i> <strong>Email:</strong> ' . htmlspecialchars($email) . '</p>
        <p><i class="fas fa-phone-alt" style="color:#007bff;"></i> <strong>Phone:</strong> ' . htmlspecialchars($phone) . '</p>
        <p><i class="fas fa-book" style="color:#007bff;"></i> <strong>Program:</strong> ' . htmlspecialchars($program) . '</p>
        <p><i class="fas fa-comment-dots" style="color:#007bff;"></i> <strong>Message: </strong>' . nl2br(htmlspecialchars($message)) . '</p>
    </div>

    <p style="margin-top: 20px;">We will get back to you shortly. Thank you for contacting Uma Nursing College, Unjha.</p>

     <!-- Close Button -->
    <button onclick="closeBox()" style="margin-top: 20px; padding: 10px 20px; background-color:#007bff; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px;">
        Close
    </button>
</div>

<script>
function closeBox() {
    // Redirect to contact page
    window.location.href = "contactus.html"; // change to your actual contact page URL if different
}
</script>';

        } else {
            echo '<div class="thank-you-box"><i class="fas fa-times-circle icon" style="color:red;"></i><h2>Error</h2><p>' . $stmt->error . '</p></div>';
        }
        $stmt->close();
        $conn->close();
    }
}
?>

</body>
</html>
