$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixth', 'seventh'],
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods

	$.fn.fullpage.setAllowScrolling(true);

	slide();

});

function slide (){

	var i = 1;
	$(".menu-slide input").click(function(){
		$(".menu-slide input:nth-child("+(i)+")").removeAttr("checked");
		i = this.value;
		$("#slide").css("backgroundImage","url('Slider/1/"+i+".jpg')");
		$(".menu-slide input:nth-child("+i+")").prop('checked', true);
	});


	setInterval(function(){

		if(i>=5){
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
