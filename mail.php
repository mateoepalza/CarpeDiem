<?php

class mail{


  private $headers;
  private $subject;
  private $message;


  function __construct($subject, $headers){

    $this->subject = $subject;

    $this->headers  = "MIME-Version: 1.0" . "\r\n";
    $this->headers .= "Content-Type: multipart/mixed;";
    $this->headers .= "boundary = \"C=A=R=P=E=D=I=E=M\"" . "\r\n";
    $this->headers .= "From: CarpeDiem@yosoyjv.com";
  }

  function sendMail($to){
    $this->message .= "--C=A=R=P=E=D=I=E=M--\r\n";
    mail($to, $this->subject, $this->message, $this->headers);
  }

  function attachMail($file){
    if(!empty($file) > 0){
      if(is_file($file)){
          //$message .= "--{$mime_boundary}n";

          $this->message .=  "--C=A=R=P=E=D=I=E=M" . "\r\n";
          $this->message .= "Content-Type: application/octet-stream;";
          $this->message .= "name=".basename($file) . "\r\n";
          $this->message .= "Content-Transfer-Encoding: base64" . "\r\n";
          $this->message .= "Content-Disposition : attachment; ";
          $this->message .= "filename = " . basename($file) . "\r\n";
          $this->message .= "\r\n";

          $fp =    @fopen($file,"rb");
          $data =  @fread($fp,filesize($file));
          @fclose($fp);
          $data = chunk_split(base64_encode($data));

          $this->message .= "$data" . "\r\n";
          $this->message .= "\r\n";


      }else{
        $this->message .= "Ocurrió algo inesperado";
      }
    }else{
      $this->message .= "Ocurrió algo inesperado";
    }
  }

  function setMessage($msj){
    $this->message .= "--C=A=R=P=E=D=I=E=M" . "\r\n";
    $this->message .= "Content-Type: text/html;";
    $this->message .= "charset = 'utf-8'" . "\r\n";
    $this->message .= "\r\n";
    $this->message .= $msj;
    $this->message .= "\r\n";
  }

  function setHeaders($headers){
    $this->headers = $headers;
  }

  function setSubject($subject){
    $this->subject = $subject;
  }

  function getHeaders(){
    return $this->headers;
  }
  function getSubject(){
    return $this->subject;
  }
}

?>
