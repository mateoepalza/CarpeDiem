<?php

  error_reporting(0);
  require('Conexion.php');
  //require('Mail.php');

  $con = new Conexion();

  $boolean = $con->connectar();
  if($boolean){

    $sql = "INSERT INTO datPersonales(nombre,apellido,tipoDocumento,noID,sexo,fechanto,lugarnto,edad,eps,direccion,ciudad,barrio,universidad,telefono,celular,correo,invitacion) VALUES('".$_POST['nombre']."','".$_POST['apellido']."','".$_POST['tDoc']."','".$_POST['nID']."','".$_POST['sexo']."','".$_POST['fechanto']."','".$_POST['lugarnto']."','".$_POST['edad']."','".$_POST['eps']."','".$_POST['direcc']."','".$_POST['ciudad']."','".$_POST['barrio']."','".$_POST['universidad']."','".$_POST['telefono']."','".$_POST['celular']."','".$_POST['correo']."','".$_POST['jv']."')";

    $bool = $con->insert($sql);

    if($bool){

      $id = $con->getLastPK();

      $sql2 = "INSERT INTO antMedico VALUES('".$id."','".$_POST['ant_medicamento']."','".$_POST['ant_lesiones']."','".$_POST['ant_alergia']."','".$_POST['ant_recomendaciones']."','".$_POST['ant_asma']."','".$_POST['ant_intervenciones']."','".$_POST['ant_enfermedad']."','".$_POST['ant_grupo']."')";

      $bool2 = $con->insert($sql2);

      if($bool2){

        $sql3 = "INSERT INTO emerContacto VALUES('".$id."','".$_POST['emer_parentezco']."','".$_POST['emer_nombre']."','".$_POST['emer_apellido']."','".$_POST['emer_nID']."','".$_POST['emer_dir']."','".$_POST['emer_tel']."','".$_POST['emer_cel']."')";

        $bool3 = $con->insert($sql3);

        if($bool3){

          $dat['status'] = true;
          //$dat['msj'] = "todo good todo fine";
          echo json_encode($dat);

        }else{
          $dat['status'] = false;
          //$dat['msj'] = $sql3;
          echo json_encode($dat);
        }
      }else{
        $dat['status'] = false;
        //$dat['msj'] = $sql2;
        echo json_encode($dat);
      }
    }else{

      $dat['status'] = false;
      //$dat['msj'] = $sql;
      echo json_encode($dat);

    }

  }else{
    $dat['status'] = false;
    echo json_encode($dat);
  }
 ?>
