<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data || empty($data['items'])) {
    echo json_encode(['status' => 'error', 'message' => 'Tray is empty']);
    exit;
}

$customerName = htmlspecialchars($data['customer']['name'] ?? 'Kabayan');
$customerEmail = htmlspecialchars($data['customer']['email'] ?? '');
$address = htmlspecialchars($data['address'] ?? 'For confirmation');
$totalAed = number_format((float)($data['totalAed'] ?? 0), 2);
$totalPhp = htmlspecialchars($data['totalPhp'] ?? '₱0.00');

$message = "Hello Kusina ni Mamu, I would like to place an order:\n\n";
$message .= "👤 *Customer:* {$customerName} ({$customerEmail})\n\n";

foreach ($data['items'] as $item) {
    $qty = (int)($item['quantity'] ?? 1);
    $name = htmlspecialchars($item['name'] ?? 'Dish');
    $price = (float)($item['price'] ?? 0);
    $sub = number_format($qty * $price, 2);
    $message .= "• *{$qty}x {$name}* - AED {$sub}\n";
    if (!empty($item['notes'])) {
        $note = htmlspecialchars($item['notes']);
        $message .= "   Note: {$note}\n";
    }
}

$message .= "\n*Total Amount: AED {$totalAed} (≈ {$totalPhp} PHP)*\n";
$message .= "📍 *Delivery Address:* {$address}\n\n";
$message .= "Please confirm order availability and delivery timeline. Maraming salamat!";

echo json_encode([
    'status' => 'success',
    'whatsappMessage' => $message
]);