var palabras = arrCodoACodo;
var imagen = document.getElementById("imagenAhorcado");
var cuadroGris = document.getElementById("resultado");
var intento = 1;

capturarTeclas();

var palabraPensada = obtenerPalabra();
var palabraOculta = ocultar(palabraPensada);

cuadroGris.innerText = palabraOculta;

function ejecutar (letraDelUsuario)
{	
	if ( intento <= 6 ) 
	{
		if ( esta(letraDelUsuario) ) 
		{
			encontrar(letraDelUsuario);
			cuadroGris.innerText = palabraOculta;
			if (palabraOculta == palabraPensada) 
			{
				dejarDeCapturar();
				setTimeout(function(){alert("Ganaste !");},500);
			}
		}
		else
		{
			imagen.src = "img/" + intento + ".png";
			intento++;
			if (intento == 7) 
			{
				dejarDeCapturar();
				setTimeout(function(){alert("Perdiste. La frase era " + palabraPensada);},500);
			}
		}
	}
}

function esta (caracter)
{
	for (var pos = 0; pos < palabraPensada.length; pos++) 
	{
		if ( palabraPensada.charAt(pos) == caracter )
		{
			return true;
		}
	}

	return false;
}

function ocultar (p)
{
	return p.replace(/[A-Z]/gi,"_");
}

function encontrar (c)
{
	var cadenaComoArreglo = palabraOculta.split("");

	for (var i = 0; i < cadenaComoArreglo.length; i++)
	{
		if (palabraPensada.charAt(i) == c)
		{
			cadenaComoArreglo[i] = c;
		}
	}

	palabraOculta = cadenaComoArreglo.join("");
}

function obtenerPalabra ()
{
	return palabras[Math.trunc(Math.random()*palabras.length)];
}

function dejarDeCapturar(){
	document.body.onkeydown = null;
}

function capturarTeclas(){
  document.body.onkeydown = (function(evento) {
  	var nroTecla = evento.which;
  	if (nroTecla >= 65 && nroTecla <= 90) 
  	{
    	console.log("e.e " + String.fromCharCode(evento.which));
    	ejecutar(String.fromCharCode(evento.which));
  	}
    evento.preventDefault();
  })
}