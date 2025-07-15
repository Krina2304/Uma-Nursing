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
            color:rgb(106, 242, 250);
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
        die('<div class="thank-you-box"><i class="fas fa-times-circle icon" style="color:red;"></i><h2>Connection failed</h2><p>' . $conn->connect_error . '</p></div>');
    } else {
        $stmt = $conn->prepare("INSERT INTO idcontact_form (name, email, phone,program, message) VALUES (?, ?, ?, ?,?)");
        $stmt->bind_param("ssiss", $name, $email, $phone,$program, $message);
        if ($stmt->execute()) {
            echo '<div class="thank-you-box">
                    <i class="fas fa-check-circle icon"></i>
                    <h2>Thank You!</h2>
                    <p>Your message has been received.</p>
                </div>';
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
