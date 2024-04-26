$(document).ready(function(){

	const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ ]{0,30}$/,
		correo: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
		string: /^[a-zA-ZÀ-ÿ]+([a-zA-ZÀ-ÿ0-9/#\s,.-]){3,50}$/
	}

	function validarCorreo(input, div, mensaje) {
		parametro = input.val();
		let valid = expresiones.correo.test(parametro);

		if (parametro == null || parametro == "") {
			div.text(mensaje + " debe introducir datos.")
			input.addClass('input-error');
			return false
		}
		if (!valid) {
			div.text(mensaje + " debe introducir un correo válido.")
			input.addClass('input-error');
			return false

		} else {
			div.text(" ");
			input.removeClass('input-error');
			return true
		}
	}

	function validarStringLong(input, div, mensaje) {
		parametro = input.val();
		let valid = expresiones.string.test(parametro);
		if (parametro == null || parametro == "") {
			div.text(mensaje + " debe introducir datos.")
			input.addClass('input-error');
			return false
		} else if (!isNaN(parametro)) {
			div.text(mensaje + " debe llevar letras")
			input.addClass('input-error');
			return false
		} else if (parametro.length < 3) {
			div.text(mensaje + " debe introducir mínimo 3 carácteres.")
			input.addClass('input-error');
		} else if (!valid) {
			div.text(mensaje + " carácteres no validos")
			input.addClass('input-error');
		} else {
			div.text(" ");
			input.removeClass('input-error');
			return true
		}
	}

	function validarNombre(input, div, mensaje) {
		parametro = input.val();
		let valid = expresiones.nombre.test(parametro);

		if (parametro == null || parametro == "") {
			div.text(mensaje + " debe introducir datos.")
			input.addClass('input-error');
			return false
		} else if (!valid) {
			div.text(mensaje + " el nombre debe ser solo letras")
			input.addClass('input-error');
			return false
		} else if (parametro.length < 3) {
			div.text(mensaje + " el nombre debe tener mínimo 3 carácteres.")
			input.addClass('input-error');
			return false
		} else {
			div.text(" ");
			input.removeClass('input-error');
			return true
		}
	}

	function validarTelefono(input, div, mensaje) {
		parametro = input.val();
		if (parametro == null || parametro == "") {
			div.text(mensaje + " debe introducir datos.")
			input.addClass('input-error');
			return false
		} else if (isNaN(parametro)) {
			div.text(mensaje + " debe ser solo números.")
			input.addClass('input-error');
			return false
		} else if (parametro.length < 10) {
			div.text(mensaje + " debe introducir maximo 10 carácteres.")
			input.addClass('input-error');
			return false
		} else {
			div.text(" ");
			input.removeClass('input-error');
			return true
		}
	}

	$("#email").keyup(()=> {  validarCorreo($("#email"),$("#error1") , "Error de correo,") });
	$("#name").keyup(()=> {  validarNombre($("#name"),$("#error2") , "Error,") });
	$("#apellido").keyup(()=> {  validarNombre($("#apellido"),$("#error3") , "Error ,") });
	$("#telefono").keyup(()=> {  validarTelefono($("#telefono"),$("#error4") , "Error de telefono") });
	$("#iglesia").keyup(()=> {  validarStringLong($("#iglesia"),$("#error5") , "Error de iglesia") });
	$("#ciudad").keyup(()=> {  validarStringLong($("#ciudad"),$("#error6") , "Error de ciudad") });

	let name , nombre , lastname , apellido , cell , telefono , iglesia , ciudad;

	$('#registrar').click(function(e) {
		e.preventDefault();

		console.log('hola')

		 correo =  validarCorreo($("#email"),$("#error1") , "Error de correo,");
		 name =  validarNombre($("#name"),$("#error2") , "Error,");
		 lastname =  validarNombre($("#apellido"),$("#error3") , "Error ,");
		 cell =  validarTelefono($("#telefono"),$("#error4") , "Error de telefono");
		 iglesia =  validarStringLong($("#iglesia"),$("#error5") , "Error de iglesia");
		 ciudad = validarStringLong($("#ciudad"),$("#error6") , "Error de ciudad");

		if(correo && name && lastname && cell && iglesia && ciudad){
			

			email = $("#email").val();
			nombre = $("#name").val();
			apellido = $("#apellido").val();
			telefono = $("#telefono").val();
			iglesia = $("#iglesia").val();
			ciudad = $("#ciudad").val();


			$.ajax({
				type: 'POST',
				url: '../../forms/contact.php',
				dataType: 'json',
				data: { 

				},
				success(data){
				Swal.fire({
					title: "Enviado con Exito",
					text: "Presiona click en el boton!",
					icon: "success",
					showConfirmButton: true,
					confirmButtonText: "OK",
					customClass: {
						confirmButton: "btn btn-color"
					}
				})
			  }

			})

		}

	});

	

});