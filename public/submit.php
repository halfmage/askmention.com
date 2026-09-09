<?php
declare(strict_types=1);
// Analyse form endpoint: mails the request, redirects to /danke.
// Netlify attrs did nothing on the VPS (see CLAUDE.md deployment note).
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Location: /'); exit; }
if (trim((string) ($_POST['website-url'] ?? '')) !== '') { header('Location: /danke'); exit; } // honeypot
$f = fn(string $k): string => trim((string) ($_POST[$k] ?? ''));
$email = $f('email');
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { header('Location: /#analyse'); exit; }
$cfg = require '/var/www/askmention/mail-config.php';
$text = "Neue Sichtbarkeits-Analyse-Anfrage (askmention.com)\n\n"
  . "Name: " . $f('name') . "\nUnternehmen: " . $f('unternehmen') . "\nWebsite: " . $f('website')
  . "\nOrt: " . $f('ort') . "\nE-Mail: " . $email . "\nTelefon: " . $f('telefon')
  . "\n\nNachricht:\n" . $f('nachricht') . "\n";
$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 15,
  CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $cfg['resend_api_key'], 'Content-Type: application/json'],
  CURLOPT_POSTFIELDS => json_encode(['from' => 'AskMention <orders@email.halfmage.com>', 'to' => [$cfg['alert_to']], 'reply_to' => $email, 'subject' => 'ANALYSE-ANFRAGE askmention: ' . ($f('unternehmen') ?: $f('name')), 'text' => $text])]);
curl_exec($ch);
if ((int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE) >= 300) {
  @file_put_contents('/var/www/askmention/form-fail.log', gmdate('c') . ' ' . substr(json_encode($_POST), 0, 500) . "\n", FILE_APPEND);
}
header('Location: /danke');
