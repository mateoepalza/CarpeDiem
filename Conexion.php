<?php

class Conexion{
  private $conexion;
  private $server;
  private $user;
  private $pass;
  private $db;

  /*function __construct($server, $user, $pass, $db){
    $this->server = $server;
    $this->user = $user;
    $this->pass = $pass;
    $this->db = $db;

  }*/
  function __construct(){
    $this->server = 'localhost';
    $this->user = 'yosoyjvc_david';
    $this->pass = 'Davidlochupa1234';
    $this->db = 'yosoyjvc_carpeDiem';

    /*$this->server = 'localhost';
    $this->user = 'root';
    $this->pass = 'background=FFF';
    $this->db = 'carpeDiem';*/

  }

  function connectar(){
    $this->conexion = mysqli_connect($this->server, $this->user, $this->pass, $this->db);

    if($this->conexion){
      $this->conexion->set_charset("utf8");
      return true;
    }else{
      return false;
    }
  }

  function insert($quer){

    $result = $this->conexion->query($quer);

    if($result){
      return true;
    }else{
      return false;
    }

  }
  function getLastPK(){
    return mysqli_insert_id($this->conexion);
  }

  function setServer($server){
    $this->server = $server;
  }

  function setUser($user){
    $this->user = $user;
  }

  function setPass($pass){
    $this->pass = $pass;
  }

  function setDb($db){
    $this->db = $db;
  }

  function getServer($server){
    return $this->server;
  }

  function getUser($user){
    return $this->user;
  }

  function getPass($pass){
    return $this->pass;
  }

  function getDb($db){
    return $this->db;
  }
}


?>
