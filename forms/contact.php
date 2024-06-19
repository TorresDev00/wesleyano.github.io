<?php

require '../assets/vendor/PHPMailer/src/Exception.php';
require '../assets/vendor/PHPMailer/src/PHPMailer.php';
require '../assets/vendor/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$obj = new enviarCorreo();

if (isset($_POST['email'], $_POST['nombre'], $_POST['apellido'], $_POST['telefono'], $_POST['iglesia'], $_POST['ciudad'])) {
  $res = $obj->getEnviarCorreo($_POST['email'], $_POST['nombre'], $_POST['apellido'], $_POST['telefono'], $_POST['iglesia'], $_POST['ciudad']);
  die(json_encode($res));
}

class enviarCorreo
{

  private $correo;
  private $nombre;
  private $apellido;
  private $telefono;
  private $iglesia;
  private $ciudad;

  public function getEnviarCorreo($email, $nombre, $apellido, $telefono, $iglesia, $ciudad)
  {

    if (preg_match_all("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/", $email) == false) {
      $resultado = ['resultado' => 'Error', 'error' => 'Nombre invalido.'];
      return $resultado;
    }
    if (preg_match_all("/^[a-zA-ZÀ-ÿ ]{1,30}$/", $nombre) == false) {
      $resultado = ['resultado' => 'Error', 'error' => 'Apellido invalido.'];
      return $resultado;
    }
    if (preg_match_all("/^[a-zA-ZÀ-ÿ ]{1,30}$/", $apellido) == false) {
      $resultado = ['resultado' => 'Error', 'error' => 'Documento invalido.'];
      return $resultado;
    }
    if (preg_match_all("/^[0-9]{10,30}$/", $telefono) == false) {
      $resultado = ['resultado' => 'Error', 'error' => 'Telefono invalida.'];
      return $resultado;
    }
    if (preg_match_all("/^[a-zA-ZÀ-ÿ]+([a-zA-ZÀ-ÿ0-9#\s,.-]){3,50}$/", $iglesia) == false) {
      $resultado = ['resultado' => 'Error', 'error' => 'Correo invalido.'];
      return $resultado;
    }
    if (preg_match_all("/^[a-zA-ZÀ-ÿ]+([a-zA-ZÀ-ÿ0-9#\s,.-]){3,50}$/", $ciudad) == false) {
      $resultado = ['resultado' => 'Error', 'error' => 'ciudad invalida.'];
      return $resultado;
    }

    $this->correo = $email;
    $this->nombre = $nombre;
    $this->apellido = $apellido;
    $this->telefono = $telefono;
    $this->iglesia = $iglesia;
    $this->ciudad = $ciudad;

    return $this->enviarCorreo();
  }

  private function enviarCorreo()
  {
    try {

      $mail = new PHPMailer(true);

      $nombreCompleto = $this->nombre . ' ' . $this->apellido;

      $body = '<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; width: 100%;">
                  <main style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                      <header style="text-align: center; padding: 20px 0;">
                          <img src="https://torresdev00.github.io/wesleyano.github.io/assets/img/Wesleyano/logo_3.png" alt="Logo" style="max-width: 30%; height: auto;">
                          <h1 style="font-weight: lighter; font-family: \'Times New Roman\', serif; margin: 20px 0;">Preinscripción</h1>
                      </header>
                      <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                      <div style="font-size: 16px; line-height: 1.6;">
                          <p style="text-align: justify;">' . $nombreCompleto . ' se ha puesto en contacto para solicitar información detallada sobre el proceso de inscripción y los requisitos necesarios para formalizar su matrícula en la institución.</p>

                          <h4 style="margin-top: 20px; font-size: 18px;">Datos personales:</h4>
                          <ol style="padding-left: 20px;">
                              <li style="margin-bottom: 10px;">Nombre y Apellidos: ' . $nombreCompleto . '</li>
                              <li style="margin-bottom: 10px;">Teléfono: ' . $this->telefono . '</li>
                              <li style="margin-bottom: 10px;">Correo: ' . $this->correo . '</li>
                              <li style="margin-bottom: 10px;">Iglesia: ' . $this->iglesia . '</li>
                              <li style="margin-bottom: 10px;">Ciudad: ' . $this->ciudad . '</li>
                          </ol>
                      </div>
                  </main>
                  </body>';


      try {
        $mail->isSMTP();
        $mail->SMTPDebug = 0;
        $mail->Host = 'smtp.gmail.com';
        $mail->Port = 587;
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
        $mail->Username = 'ejtr18@gmail.com';
        $mail->Password = 'biowtapdsonadpcx';

        $mail->setFrom('ejtr18@gmail.com', 'Wesleyano');
        $mail->addAddress('ejtr18@gmail.com', $nombreCompleto);
        $mail->Subject = 'Preincripción';
        $mail->Body = $body;
        $mail->AltBody = 'Error: HTML no soportado.';
        $mail->CharSet = 'UTF-8';

        if (!$mail->send()) {
          return false;
        } else {
          return 'Registrado con exito';
        }
      } catch (Exception $e) {
        return "El mensaje no se ha enviado. Mailer Error: {$mail->ErrorInfo}";
      }
    } catch (Exception $e) {
      return $e;
    }
  }
}
