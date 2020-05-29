$(document).ready(function(){

  $("#alert-parent").on('click','.positive-alert',function(){
		$(this).remove();
	});
	$("#alert-parent").on('click','.alert',function(){
		$(this).remove();
	});

  $('#btn-enviar-reg').click(function(){
    if($('#checkTerminos').prop('checked')){
      alertingReg();
    }else{
      alertingTerms();
    }

	});

  $('.selection').change(function(){

    if($(this).val() == 'Si'){
      ($(this).next()).css({
        'display':'block'
      });
    }else{
      ($(this).next()).css({
        'display':'none'
      });
    }

  })
  $('input:radio[name=parentezco]').change(function(){
    if($(this).val() == 'Otro'){
      $('#txt-dat-ant-parentezco').css({
        'display':'block'
      });
    }else{
      $('#txt-dat-ant-parentezco').css({
        'display':'none'
      });
    }
  });
  $('select').focus(function(){
    unfocus();
  })
  $('input').focus(function(){
		unfocus();
	});

  function alertingTerms(){

  	$(".alert").remove();

  	alerta("Debe aceptar los términos y condiciones");
  	return false;


  }

  function alertingReg(){

  	$(".alert").remove();
  	/*Datos personales*/
  	var nombre = $("#dat-per-nombre").val();
  	var apellido = $("#dat-per-apellidos").val();
  	var tDoc = $("input:radio[name=tipoID]:checked").val();
  	var nID = $("#dat-per-id").val();
  	var sexo = $("input:radio[name=sexo]:checked").val();
  	var fechanto = $("#dat-per-fecha").val();
  	var lugarnto = $("#dat-per-lugarnto").val();
  	var edad = $("#dat-per-edad").val();
  	var eps = $("#dat-per-eps").val();
  	var direcc = $("#dat-per-dir").val();
  	var ciudad = $("#dat-per-ciudad").val();
  	var barrio = $("#dat-per-barrio").val();
  	var universidad = $("#dat-per-uni").val();
  	var telefono = $("#dat-per-tel").val();
  	var celular = $("#dat-per-cel").val();
  	var correo = $("#dat-per-email").val();
  	var jv = $("#dat-per-jv").val();
  	/* Antecedentes*/
    var ant_medicamento = $('#dat-ant-medicamento').val();
    var ant_lesiones = $('#dat-ant-lesiones').val();
    var ant_alergia = $('#dat-ant-alergia').val();
    var ant_recomendaciones = $('#dat-ant-recomendaciones').val();
    var ant_asma = $('#dat-ant-asma').val();
    var ant_intervenciones = $('#dat-ant-intervenciones').val();
    var ant_enfermedad = $('#dat-ant-enfermedad').val();
    var ant_grupo = $('#dat-ant-grupo').val();
      /*Antecedentes input*/

      var ant_txt_medicamento = $('#txt-dat-ant-medicamento').val();
      var ant_txt_lesiones = $('#txt-dat-ant-lesiones').val();
      var ant_txt_alergia = $('#txt-dat-ant-alergia').val();
      var ant_txt_recomendaciones = $('#txt-dat-ant-recomendaciones').val();
      var ant_txt_asma = $('#txt-dat-ant-asma').val();
      var ant_txt_intervenciones = $('#txt-dat-ant-intervenciones').val();
      var ant_txt_enfermedad = $('#txt-dat-ant-enfermedad').val();
    //var ant_sanguineo = $('#').val();

  	/*contacto de emergencia*/
  	var emer_parentezco = $("input:radio[name=parentezco]:checked").val();
  	var emer_nombre = $("#dat-emer-nombre").val();
  	var emer_apellido = $("#dat-emer-apellido").val();
  	var emer_nID = $("#dat-emer-nID").val();
  	var emer_dir = $("#dat-emer-dir").val();
  	var emer_tel = $("#dat-emer-tel").val();
  	var emer_cel = $("#dat-emer-cel").val();
    /*Contacto de emergencia input*/
      var emer_txt_parentezco = $("#txt-dat-ant-parentezco").val();


  	if(nombre == '' || nombre == null){

  		cambiarColor("dat-per-nombre");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("[^A-Za-záéíóú\\s\\ñ]+");

  		if(expression.test(nombre)){

  			cambiarColor("dat-per-nombre");
  			alerta("No se permiten caracteres especiales o numeros.");
  			return false;

  		}
  	}

  	if(apellido == '' || apellido == null){

  		cambiarColor("dat-per-apellidos");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("[^A-Za-záéíóú\\s\\ñ]+");

  		if(expression.test(apellido)){

  			cambiarColor("dat-per-apellidos");
  			alerta("No se permiten caracteres especiales o numeros.");
  			return false;

  		}
  	}

  	if(tDoc == '' || tDoc == null){

  		cambiarColor("input:radio[name=tipoID]");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("[^A-Za-z\\.]+");

  		if(expression.test(tDoc)){

  			cambiarColor("input:radio[name=tipoID]");
  			alerta("No se permiten caracteres especiales o numeros.");
  			return false;

  		}
  	}

  	if(nID == '' || nID == null){

  		cambiarColor("dat-per-id");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("[^0-9]+");

  		if(expression.test(nID)){

  			cambiarColor("dat-per-id");
  			alerta("Por favor ingrese un número de identificación valido.");
  			return false;

  		}
  	}

  	if(sexo == '' || sexo == null){

  		cambiarColor("");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("[^A-Za-z\\s]+");

  		if(expression.test(sexo)){

  			cambiarColor("input:radio[name=sexo]");
  			alerta("No se permiten caracteres especiales o numeros.");
  			return false;

  		}
  	}

  	if(fechanto == '' || fechanto == null){

  		cambiarColor("dat-per-fecha");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  /*Acaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/
  	}

  	if(lugarnto == '' || lugarnto == null){

  		cambiarColor("dat-per-lugarnto");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("[^A-Za-záéíóú\\s\\ñ]+");

  		if(expression.test(lugarnto)){

  			cambiarColor("dat-per-lugarnto");
  			alerta("No se permiten caracteres especiales o numeros.");
  			return false;

  		}
  	}

  	if(edad == '' || edad == null){

  		cambiarColor("dat-per-edad");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("[^0-9]+");

  		if(expression.test(edad)){

  			cambiarColor("dat-per-edad");
  			alerta("Por favor ingrese una edad valida.");
  			return false;

  		}else if(edad < 10){
  			cambiarColor("dat-per-edad");
  			alerta("Recuerde que la edad mínima es 11 años.");
  			return false;
  		}
  	}

  	if(eps == '' || eps == null){

  		cambiarColor("dat-per-eps");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("[^A-Za-záéíóú\\s\\ñ]+");

  		if(expression.test(eps)){

  			cambiarColor("dat-per-eps");
  			alerta("No se permiten caracteres especiales o numeros.");
  			return false;

  		}
  	}

  	if(direcc == '' || direcc == null){

  		cambiarColor("dat-per-dir");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("[^A-Za-z0-9#,.\\-ñáéíóú\\s]+");

  		if(expression.test(direcc)){

  			cambiarColor("dat-per-dir");
  			alerta("No se aceptan carácteres especiales.")
  			return false;
  		}

  	}

  	if(ciudad == '' || ciudad == null){

  		cambiarColor("dat-per-ciudad");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("[^A-Za-záéíóú\\s\\ñ]+");

  		if(expression.test(ciudad)){

  			cambiarColor("dat-per-ciudad");
  			alerta("No se permiten caracteres especiales o numeros.");
  			return false;

  		}
  	}

  	if(barrio == '' || barrio == null){

  		cambiarColor("dat-per-barrio");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("[^A-Za-záéíóú\\s\\ñ]+");

  		if(expression.test(barrio)){

  			cambiarColor("dat-per-barrio");
  			alerta("No se permiten caracteres especiales o numeros.");
  			return false;

  		}
  	}

  	if(universidad == '' || universidad == null){

  		cambiarColor("dat-per-uni");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("[^A-Za-záéíóú\\s\\ñ]+");

  		if(expression.test(universidad)){

  			cambiarColor("dat-per-uni");
  			alerta("No se permiten caracteres especiales o numeros.");
  			return false;

  		}
  	}

  	if(telefono == '' || telefono == null){

  		cambiarColor("dat-per-tel");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("[^0-9]+");

  		if(expression.test(telefono)){

  			cambiarColor("dat-per-tel");
  			alerta("Por favor ingrese un número de telefono válido.");
  			return false;

  		}
  	}
  	if(celular == '' || celular == null){

  		cambiarColor("dat-per-cel");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("[^0-9]+");

  		if(expression.test(celular)){

  			cambiarColor("dat-per-cel");
  			alerta("Por favor ingrese un número de celular válido.");
  			return false;

  		}
  	}

  	if(correo == '' || correo == null){

  		cambiarColor("dat-per-email");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$");

  		if(!expression.test(correo)){

  			cambiarColor("dat-per-email");
  			alerta("Por favor ingrese un correo válido.");
  			return false;

  		}
  	}
  	if(jv == '' || jv == null){

  		cambiarColor("dat-per-jv");
  		alerta("Campo obligatorio");
  		return false;

  	}else{
  		var expression = new RegExp("[^A-Za-z0-9ñ,.áéíóú\\?\\¿\\s]+");

  		if(expression.test(jv)){

  			cambiarColor("dat-per-jv");
  			alerta("No se permiten caracteres especiales.");
  			return false;

  		}
  	}
      /*Contacto*/

      if(ant_medicamento == '' || ant_medicamento == null || ant_medicamento == 'vacio'){

        cambiarColor("dat-ant-medicamento");
  			alerta("Campo obligatorio");
  			return false;

      }else if(ant_medicamento == 'Si'){

        if(ant_txt_medicamento == '' || ant_txt_medicamento == null){

          cambiarColor("txt-dat-ant-medicamento");
    			alerta("Campo obligatorio");
    			return false;

        }else{

          var expression = new RegExp("[^A-Za-z0-9ñ,.áéíóú\\s]+");
          if(expression.test(ant_txt_medicamento)){

            cambiarColor("txt-dat-ant-medicamento");
      			alerta("No se permiten caracteres especiales.");
      			return false;

          }else{
            ant_medicamento = ant_txt_medicamento;
          }
        }
      }

      if(ant_lesiones == '' || ant_lesiones == null || ant_lesiones == 'vacio'){

        cambiarColor("dat-ant-lesiones");
  			alerta("Campo obligatorio");
  			return false;

      }else if(ant_lesiones == 'Si'){

        if(ant_txt_lesiones == '' || ant_txt_lesiones == null){

          cambiarColor("txt-dat-ant-lesiones");
    			alerta("Campo obligatorio");
    			return false;

        }else{

          var expression = new RegExp("[^A-Za-z0-9ñ,.áéíóú\\s]+");
          if(expression.test(ant_txt_lesiones)){

            cambiarColor("txt-dat-ant-lesiones");
      			alerta("No se permiten caracteres especiales.");
      			return false;

          }else{
            ant_lesiones = ant_txt_lesiones;
          }
        }
      }

      if(ant_alergia == '' || ant_alergia == null || ant_alergia == 'vacio'){

        cambiarColor("dat-ant-alergia");
  			alerta("Campo obligatorio");
  			return false;

      }else if(ant_alergia == 'Si'){

        if(ant_txt_alergia == '' || ant_txt_alergia == null){

          cambiarColor("txt-dat-ant-alergia");
    			alerta("Campo obligatorio");
    			return false;

        }else{

          var expression = new RegExp("[^A-Za-z0-9ñ,.áéíóú\\s]+");
          if(expression.test(ant_txt_alergia)){

            cambiarColor("txt-dat-ant-alergia");
      			alerta("No se permiten caracteres especiales.");
      			return false;

          }else{
            ant_alergia = ant_txt_alergia;
          }
        }
      }

      if(ant_recomendaciones == '' || ant_recomendaciones == null || ant_recomendaciones == 'vacio'){

        cambiarColor("dat-ant-recomendaciones");
  			alerta("Campo obligatorio");
  			return false;

      }else if(ant_recomendaciones == 'Si'){

        if(ant_txt_recomendaciones == '' || ant_txt_recomendaciones == null){

          cambiarColor("txt-dat-ant-recomendaciones");
    			alerta("Campo obligatorio");
    			return false;

        }else{

          var expression = new RegExp("[^A-Za-z0-9ñ,.áéíóú\\s]+");
          if(expression.test(ant_txt_recomendaciones)){

            cambiarColor("txt-dat-ant-recomendaciones");
      			alerta("No se permiten caracteres especiales.");
      			return false;

          }else{
            ant_recomendaciones = ant_txt_recomendaciones;
          }
        }
      }

      if(ant_asma == '' || ant_asma == null || ant_asma == 'vacio'){

        cambiarColor("dat-ant-asma");
  			alerta("Campo obligatorio");
  			return false;

      }else if(ant_asma == 'Si'){

        if(ant_txt_asma == '' || ant_txt_asma == null){

          cambiarColor("txt-dat-ant-asma");
    			alerta("Campo obligatorio");
    			return false;

        }else{

          var expression = new RegExp("[^A-Za-z0-9ñ,.áéíóú\\s]+");
          if(expression.test(ant_txt_asma)){

            cambiarColor("txt-dat-ant-asma");
      			alerta("No se permiten caracteres especiales.");
      			return false;

          }else{
            ant_asma = ant_txt_asma;
          }
        }
      }

      if(ant_intervenciones == '' || ant_intervenciones == null || ant_intervenciones == 'vacio'){

        cambiarColor("dat-ant-intervenciones");
  			alerta("Campo obligatorio");
  			return false;

      }else if(ant_intervenciones == 'Si'){

        if(ant_txt_intervenciones == '' || ant_txt_intervenciones == null){

          cambiarColor("txt-dat-ant-intervenciones");
    			alerta("Campo obligatorio");
    			return false;

        }else{

          var expression = new RegExp("[^A-Za-z0-9ñ,.áéíóú\\s]+");
          if(expression.test(ant_txt_intervenciones)){

            cambiarColor("txt-dat-ant-intervenciones");
      			alerta("No se permiten caracteres especiales.");
      			return false;

          }else{
            ant_intervenciones = ant_txt_intervenciones;
          }
        }
      }


      if(ant_enfermedad == '' || ant_enfermedad == null || ant_enfermedad == 'vacio'){

        cambiarColor("dat-ant-enfermedad");
  			alerta("Campo obligatorio");
  			return false;

      }else if(ant_enfermedad == 'Si'){

        if(ant_txt_enfermedad == '' || ant_txt_enfermedad == null){

          cambiarColor("txt-dat-ant-enfermedad");
    			alerta("Campo obligatoriooooo");
    			return false;

        }else{

          var expression = new RegExp("[^A-Za-z0-9ñ,.áéíóú\\s]+");
          if(expression.test(ant_txt_enfermedad)){

            cambiarColor("txt-dat-ant-enfermedad");
      			alerta("No se permiten caracteres especiales.");
      			return false;

          }else{
            ant_enfermedad = ant_txt_enfermedad;
          }
        }
      }

      if(ant_grupo == '' || ant_grupo == null || ant_grupo == 'vacio'){

        cambiarColor("dat-ant-grupo");
  			alerta("Campo obligatorio");
  			return false;

      }

    	/*Contacto de emergencia*/


    	if(emer_parentezco == '' || emer_parentezco == null){

    		cambiarColor("input:radio[name=parentezco]");
    		alerta("Campo obligatorio");
    		return false;

    	}else if(emer_parentezco == 'Otro'){

        if(emer_txt_parentezco == '' || emer_txt_parentezco == null){

          cambiarColor("txt-dat-ant-parentezco");
          alerta("Campo obligatorio");
          return false;

        }else{
          var expression = new RegExp("[^A-Za-záéíóú\\s]+");

      		if(expression.test(emer_parentezco)){

      			cambiarColor("input:radio[name=parentezco]");
      			alerta("No se permiten caracteres especiales o numeros.");
      			return false;

      		}else{
            emer_parentezco = emer_txt_parentezco;
          }
        }

    	}

    	if(emer_nombre == '' || emer_nombre == null){

    		cambiarColor("dat-emer-nombre");
    		alerta("Campo obligatorio");
    		return false;

    	}else{
    		var expression = new RegExp("[^A-Za-záéíóú\\s\\ñ]+");

    		if(expression.test(emer_nombre)){

    			cambiarColor("dat-emer-nombre");
    			alerta("No se permiten caracteres especiales o numeros.");
    			return false;

    		}
    	}

    	if(emer_apellido == '' || emer_apellido == null){

    		cambiarColor("dat-emer-apellido");
    		alerta("Campo obligatorio");
    		return false;

    	}else{
    		var expression = new RegExp("[^A-Za-záéíóú\\s\\ñ]+");

    		if(expression.test(emer_apellido)){

    			cambiarColor("dat-emer-apellido");
    			alerta("No se permiten caracteres especiales o numeros.");
    			return false;

    		}
    	}

    	if(emer_nID == '' || emer_nID == null){

    		cambiarColor("dat-emer-nID");
    		alerta("Campo obligatorio");
    		return false;

    	}else{
    		var expression = new RegExp("[^0-9]+");

    		if(expression.test(emer_nID)){

    			cambiarColor("dat-emer-nID");
    			alerta("Por favor ingrese un número de identificación válido.");
    			return false;

    		}
    	}

    	if(emer_dir == '' || emer_dir == null){

    		cambiarColor("dat-emer-dir");
    		alerta("Campo obligatorio");
    		return false;

    	}else{
    		var expression = new RegExp("[^A-Za-z0-9#,.\\-ñáéíóú\\s]+");

    		if(expression.test(emer_dir)){

    			cambiarColor("dat-emer-dir");
    			alerta("No se aceptan carácteres especiales.")
    			return false;
    		}
    	}

    	if(emer_tel == '' || emer_tel == null){

    		cambiarColor("dat-emer-tel");
    		alerta("Campo obligatorio");
    		return false;

    	}else{
    		var expression = new RegExp("[^0-9]+");

    		if(expression.test(emer_tel)){

    			cambiarColor("dat-emer-tel");
    			alerta("Por favor ingrese un número de teléfono válido.");
    			return false;

    		}
    	}

    	if(emer_cel == '' || emer_cel == null){

    		cambiarColor("dat-emer-cel");
    		alerta("Campo obligatorio");
    		return false;

    	}else{
    		var expression = new RegExp("[^0-9]+");

    		if(expression.test(emer_cel)){

    			cambiarColor("dat-emer-cel");
    			alerta("Por favor ingrese un número de celular válido.");
    			return false;

    		}
    	}

      desactivate();

      enviarPost(nombre,apellido,tDoc,nID,sexo,fechanto,lugarnto,edad,eps,direcc,ciudad,barrio,universidad,telefono,celular,correo,jv,ant_medicamento,ant_lesiones,ant_alergia,ant_recomendaciones, ant_asma ,ant_intervenciones,ant_enfermedad,ant_grupo,emer_parentezco,emer_nombre,emer_apellido,emer_nID,emer_dir,emer_tel,emer_cel);
      return true;
    }

    function desactivate(){
      $('#btn-enviar-reg').prop('disabled',true);
    }

    function enviarPost(nombre,apellido,tDoc,nID,sexo,fechanto,lugarnto,edad,eps,direcc,ciudad,barrio,universidad,telefono,celular,correo,jv,ant_medicamento,ant_lesiones,ant_alergia,ant_recomendaciones, ant_asma ,ant_intervenciones,ant_enfermedad,ant_grupo,emer_parentezco,emer_nombre,emer_apellido,emer_nID,emer_dir,emer_tel,emer_cel){
      $.post('formReg.php',{nombre:nombre,apellido:apellido,tDoc:tDoc,nID:nID,sexo:sexo,fechanto:fechanto,lugarnto:lugarnto,edad:edad,eps:eps,direcc:direcc,ciudad:ciudad,barrio:barrio,universidad:universidad,telefono:telefono,celular:celular,correo:correo,jv:jv,ant_medicamento:ant_medicamento,ant_lesiones:ant_lesiones,ant_alergia:ant_alergia,ant_recomendaciones:ant_recomendaciones,ant_asma:ant_asma,ant_intervenciones:ant_intervenciones,ant_enfermedad:ant_enfermedad,ant_grupo:ant_grupo,emer_parentezco:emer_parentezco,emer_nombre:emer_nombre,emer_apellido:emer_apellido,emer_nID:emer_nID,emer_dir:emer_dir,emer_tel:emer_tel,emer_cel:emer_cel},function(data){
        
    		var info = JSON.parse(data);

    		if(info.status){
    			alertaPos("La información se ha guardado correctamente.");
          redirigir();
    		}else{
    			alerta("Ocurrió algo inesperado.");
          redirigir();
    		}

    	});
    }
    function redirigir(){
      setInterval(function(){
          window.location.href = "http://yosoyjv.com/";
      },3000);
    }
    function colorDefault(str){

    	$("#"+str).css({
    		border : "1px solid #999"
    	})

    }
    function cambiarColor(str){

    	$("#"+str).css({
    		border : "1px solid #dd5144"
    	})

    }
    function alertaPos(str){

    	$("#alert-parent").append("<div class='positive-alert'>"+str+"</div>");

    }
    function alerta(str){

    	$("#alert-parent").append("<div class='alert'>Error: "+str+"</div>");

    }
    function unfocus(){
      $('.alert').remove();

  		colorDefault("dat-per-nombre");
  		colorDefault("dat-per-apellidos");
  		colorDefault("dat-per-id");
  		colorDefault("dat-per-fecha");
  		colorDefault("dat-per-lugarnto");
  		colorDefault("dat-per-edad");
  		colorDefault("dat-per-eps");
  		colorDefault("dat-per-dir");
  		colorDefault("dat-per-ciudad");
  		colorDefault("dat-per-barrio");
  		colorDefault("dat-per-uni");
  		colorDefault("dat-per-tel");
  		colorDefault("dat-per-cel");
  		colorDefault("dat-per-email");
  		colorDefault("dat-per-jv");

      colorDefault('dat-ant-medicamento');
      colorDefault('dat-ant-lesiones');
      colorDefault('dat-ant-alergia');
      colorDefault('dat-ant-recomendaciones');
      colorDefault('dat-ant-asma');
      colorDefault('dat-ant-intervenciones');
      colorDefault('dat-ant-medicamento');
      colorDefault('dat-ant-enfermedad');
      colorDefault('dat-ant-grupo');
        /*Antecedentes input*/

        colorDefault('txt-dat-ant-medicamento');
        colorDefault('txt-dat-ant-lesiones');
        colorDefault('txt-dat-ant-alergia');
        colorDefault('txt-dat-ant-recomendaciones');
        colorDefault('txt-dat-ant-asma');
        colorDefault('txt-dat-ant-intervenciones');
        colorDefault('txt-dat-ant-medicamento');
        colorDefault('txt-dat-ant-enfermedad')

  		colorDefault("input:radio[name=parentezco]:checked");
  		colorDefault("dat-emer-nombre");
  		colorDefault("dat-emer-apellido");
  		colorDefault("dat-emer-nID");
  		colorDefault("dat-emer-dir");
  		colorDefault("dat-emer-tel");
  		colorDefault("dat-emer-cel");

        colorDefault('txt-dat-ant-parentezco');
    }
})
