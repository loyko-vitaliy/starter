<?php
require_once '../vendor/autoload.php';

const EMAIL_TO = 'robert.syaglo@gmail.com';
const COPY = 'torg773@gmail.com';

const USER = 'admin@chudo-dom.store';
const PASSWORD = 'eEbyNthrO';
const SMTP = 'smtp.spaceweb.ru';
const SSL = 'SSL';
const PORT = 465;

$_POST = json_decode(file_get_contents('php://input'), true);

if ($_POST['goods'] && $_POST['customer']) {
  $loader = new Twig_Loader_Filesystem(__DIR__ . '/templates');
  $twig = new Twig_Environment($loader);

  $html = $twig->render('cart.twig', [
    'products' => $_POST['goods']['products'],
    'shipment' => $_POST['goods']['shipment'],
    'total' => $_POST['goods']['total'],
    'customer' => $_POST['customer']
  ]);

  try {
    $transport = (new Swift_SmtpTransport(SMTP, PORT, SSL))
      ->setUsername(USER)
      ->setPassword(PASSWORD);

    $mailer = new Swift_Mailer($transport);

    $message = new Swift_Message();
    $message->setSubject('Новая заявка');
    $message->setFrom([USER => USER]);
    $message->setTo([EMAIL_TO, COPY], 'Robert');
    $message->setBody($html, 'text/html');
    $result = $mailer->send($message);
    if ($result > 0) {
      print 'ok';
    }

  } catch (Exception $e) {
    print $e->getMessage();
  }
}