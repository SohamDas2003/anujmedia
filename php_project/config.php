<?php
/* =========================================================================
    ANUJ MEDIA — Global Site Configuration & Helpers
   ========================================================================= */

$config = [
    'company_name'  => 'Anuj Media',
    'tagline'       => 'Pan-India Digital Marketing & Growth Partner',
    'logo'          => './logo.png',                      // logo image in same folder
    'favicon'       => './favicon.png',                   // favicon image in same folder
    'whatsapp'      => '917738137483',
    'email'         => 'info@anujmedia.in',
    'admin_email'   => 'info@anujmedia.in',                // where form leads land
    'branches' => [
        ['code' => 'DEL', 'city' => 'Delhi'],
        ['code' => 'BOM', 'city' => 'Mumbai'],
        ['code' => 'IXC', 'city' => 'Chandigarh'],
    ],
];

$waLink = 'https://wa.me/' . $config['whatsapp'] . '?text=' . rawurlencode('Hi, I\'d like to talk about digital marketing for my brand.');

// Function to handle form submissions
function handleContactForm($config) {
    $formError = '';
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Honeypot — bots fill this, humans never see it
        if (!empty($_POST['website'])) {
            header('Location: ' . strtok($_SERVER['REQUEST_URI'], '?') . '?success=1#contact');
            exit;
        }

        $name    = trim($_POST['name'] ?? '');
        $phone   = trim($_POST['phone'] ?? '');
        $email   = trim($_POST['email'] ?? '');
        $city    = trim($_POST['city'] ?? '');
        $service = trim($_POST['service'] ?? '');
        $message = trim($_POST['message'] ?? '');

        if ($name === '' || $phone === '') {
            $formError = 'Please share your name and phone number.';
        } elseif ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $formError = 'Please enter a valid email address.';
        } else {
            $row = [date('Y-m-d H:i:s'), $name, $phone, $email, $city, $service, $message];

            $csvFile = __DIR__ . '/leads.csv';
            $isNew   = !file_exists($csvFile);
            if ($fp = @fopen($csvFile, 'a')) {
                if ($isNew) {
                    fputcsv($fp, ['Timestamp', 'Name', 'Phone', 'Email', 'City', 'Service', 'Message']);
                }
                fputcsv($fp, $row);
                fclose($fp);
            }

            $subject = 'New Lead — ' . $config['company_name'];
            $body    = "New enquiry from the website:\n\n"
                     . "Name: $name\nPhone: $phone\nEmail: $email\nCity: $city\nService: $service\nMessage: $message\n";
            $headers = 'From: no-reply@' . preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'localhost');
            @mail($config['admin_email'], $subject, $body, $headers);

            header('Location: ' . strtok($_SERVER['REQUEST_URI'], '?') . '?success=1#contact');
            exit;
        }
    }
    return $formError;
}
