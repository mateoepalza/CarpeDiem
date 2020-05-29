$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
		autoScrolling:true,
		scrollHorizontally: true
	});

	$("#btn-enviar").click(function(){
		if($('#check-box').prop('checked')){
			
			var bool = alerting();

		}else{
			alertingTerms();
		}
	});



	$('input').focus(function(){
		$('.alert').remove();
		colorDefault('nombre');
		colorDefault('apellido');
		colorDefault('email');
		colorDefault('telefono');
	});

	$("#alert-parent").on('click','.positive-alert',function(){
		$(this).remove();
	});
	$("#alert-parent").on('click','.alert',function(){
		$(this).remove();
	});
	//methods

	$.fn.fullpage.setAllowScrolling(true);

	slide();

});
function alertingTerms(){

	$(".alert").remove();

	var che = $('#check-box').prop('checked');

	if(!che){
		alerta("Debe aceptar los términos y condiciones");
		return false;
	}

}
function alerting(){

	$(".alert").remove();

	var nombre = $("#nombre").val(),
			apellido = $("#apellido").val(),
			email = $("#email").val(),
			telefono = $("#telefono").val()

	if(nombre == "" || nombre == null){

		cambiarColor("nombre");
		alerta("Campo obligatorio.");
		return false;

	}else{

		var expression = new RegExp("[^A-Za-z\\s]+");

		if(expression.test(nombre)){

			cambiarColor("nombre");
			alerta("No se permiten caracteres especiales o numeros.");
			return false;

		}

	}

	if(apellido == "" || apellido == null){

		cambiarColor("apellido");
		alerta("Campo obligatorio.");
		return false;

	}else{

		var expression = new RegExp("[^A-Za-z\\s]+");

		if(expression.test(apellido)){

			cambiarColor("apellido");
			alerta("No se permiten caracteres especiales o numeros.");
			return false;

		}

	}
	if(email == "" || email == null){

		cambiarColor("email");
		alerta("Campo obligatorio.");
		return false;

	}else{

		var expression = new RegExp("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$");

		if(!expression.test(email)){

			cambiarColor("email");
			alerta("Por favor ingrese un correo válido.");
			return false;

		}

	}

	if(telefono == "" || telefono == null){

		cambiarColor("telefono");
		alerta("Campo obligatorio");
		return false;

	}else{

		var expression = new RegExp("[^0-9]+");

		if(expression.test(telefono)){

			cambiarColor("telefono");
			alerta("Por favor ingrese un número de contacto válido.");
			return false;

		}

	}
	sendPost(nombre, apellido, email, telefono);
	clean();
	return true;

}

function clean(){

	var x = ["nombre","apellido","email","telefono"];

	for(var i = 0; i < x.length; i++){

		$("#"+x[i]).val('');
	}
}


function sendPost(nombre, apellido, email, telefono){

	$.post('form.php',{nombre: nombre, apellido: apellido, email: email, telefono: telefono},function(data){
		var info = JSON.parse(data);

		if(info.status){
			alertaPos("La información se ha guardado correctamente.");
		}else{
			alerta("Ocurrió algo inesperado.");
		}

	});

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
function slide (){

	var i = 1;
	$(".menu-slide input").click(function(){
		$(".menu-slide input:nth-child("+(i)+")").removeAttr("checked");
		i = this.value;
		$("#slide").css("backgroundImage","url('Slider/1/"+i+".jpg')");
		$(".menu-slide input:nth-child("+i+")").prop('checked', true);
	});


	setInterval(function(){

		if(i>=4){
			$(".menu-slide input:nth-child("+(i)+")").removeAttr("checked");
			i=1;

			$("#slide").css("backgroundImage","url('Slider/1/"+i+".jpg')");

			$(".menu-slide input:nth-child("+i+")").prop('checked', true);
		}else{
			i++;
				$("#slide").css("backgroundImage","url('Slider/1/"+i+".jpg')");
				$(".menu-slide input:nth-child("+(i-1)+")").removeAttr("checked");
				$(".menu-slide input:nth-child("+i+")").prop('checked', true);
		}


	},5000);

}
