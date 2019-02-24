<?php
require_once '../vendor/autoload.php';

const EMAIL_TO = 'example@gmail.com';
const COPY = 'example2@gmail.com';

const USER = 'admin@example.com';
const PASSWORD = 'password';
const SMTP = 'smtp.exapmle.com';
const SSL = 'SSL';
const PORT = 465;

$_POST = json_decode(file_get_contents('php://input'), true);

if ($_POST['field']) {
  $loader = new Twig_Loader_Filesystem(__DIR__ . '/templates');
  $twig = new Twig_Environment($loader);

  $html = $twig->render('cart.twig', [
    'field' => $_POST['field'],
  ]);

  try {
    $transport = (new Swift_SmtpTransport(SMTP, PORT, SSL))
      ->setUsername(USER)
      ->setPassword(PASSWORD);

    $mailer = new Swift_Mailer($transport);

    $message = new Swift_Message();
    $message->setSubject('Новая заявка');
    $message->setFrom([USER => USER]);
    $message->setTo([EMAIL_TO, COPY]);
    $message->setBody($html, 'text/html');
    $result = $mailer->send($message);
    if ($result > 0) {
      print 'ok';
    }
  } catch (Exception $e) {
    print $e->getMessage();
  }
}
