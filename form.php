<?php
  //error_reporting(0);

  include('Conexion.php');
  include('mail.php');

  $con = new Conexion();
  $mail = new mail("Info Carpe Diem Bogotá - 2019", "From: carpeDiem@yosoyjvc.com" . "\r\n" ."Reply-To: carpeDiem@yosoyjvc.com");

  $boolean = $con->connectar();

  if($boolean){

    $bool = $con->insert("INSERT INTO usuario (nombre, apellido, correo, telefono) VALUES('".$_POST['nombre']."','".$_POST['apellido']."','".$_POST['email']."','".$_POST['telefono']."')");

    if($bool){
      $html = "
      <html>
        <head>
          <title>
            Info carpeDiem
          </title>
        </head>
      <body>
        <h4>¿QUIÉNES SOMOS?</h4>
        <p>Jóvenes Valerosos es una organización dedicada a potencializar habilidades humanas y el desarrollo personal desde la inteligencia emocional en niños, jóvenes y adultos. Contamos con tres años de experiencia y hemos logrado impactar la vida de más de 850 jóvenes y sus familias.</p>
        <h4>¿QUÉ ENCONTRARÁN EN CARPE DIEM?</h4>

        <ul>
          <li>Conferencias: Serán espacios de aprendizaje a cargo de conferencistas, influencers, coach y jóvenes que van a compartir sus experiencias y resultados extraordinarios para inspirar.</li>
          <li>Actividades grupales: a cargo del equipo de trabajo que harán de Carpe Diem un espacio dinámico, de mucho movimiento y activación corporal, haciendo un énfasis en la cooperación, el trabajo en equipo y la creación de estrategias de acción efectiva hacia un resultado.</li>
          <li>Experiencias de marca: habrá módulos tipo stand instalados en el evento a cargo de los patrocinadores y marcas que quieran ofrecer test a los participantes para que tengan la oportunidad de ver en persona como funciona emprender y cuáles pueden ser los resultados al hacerlo de manera consciente, constante y coherente.</li>
          <li>Presentaciones en vivo: Habrá artistas invitados, jóvenes talentos, DJ's, grupos de baile y grupos musicales que harán presentaciones en vivo durante el evento, convirtiendo la tarima de Carpe Diem en un escenario para apoyar a los talentos a darse a conocer y ganar experiencia de una manera profesional y que a su vez le dé a los participantes de Carpe Diem un espacio seguro de esparcimiento y entretenimiento con cientos de jóvenes.</li>
          <li>Entrenamiento vivencial: será el componente principal de Carpe Diem, un entrenamiento único en Colombia que llevará a los jóvenes, por medio de ejercicios experienciales a recibir herramientas de coaching, psicología, liderazgo, empoderamiento y emprendimiento, entre otras, a cargo de Javier Peñaloza Rodríguez, representante legal y coach de la empresa jóvenes valerosos SAS.</li>
        </ul>
      </body>
      ";
      $mail->setMessage($html);
      $mail->attachMail("mail/banner1.jpeg");
      $mail->attachMail("mail/banner2.jpeg");
      $mail->sendMail($_POST['email']);
      $dat['status'] = true;
      echo json_encode($dat);

    }else{

      $dat['status'] = false;
      echo json_encode($dat);

    }
  }else{

    $dat['status'] = false;
    echo json_encode($dat);

  }




?>
