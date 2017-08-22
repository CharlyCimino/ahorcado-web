var palabras = frasesSimpsons();
//var palabras = frasesCursoAP();
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

function frasesSimpsons ()
{
	return ["BART NO QUIERO ASUSTARTE PERO TAL VEZ EL COCO, EL COCO ESTA EN LA CASA",
		    "SOY INTELECTUAL, MUY INTELIGENTE, ¡AY QUE BONITO SOY!", 
		    "NORMALMENTE NO REZO, PERO SI ESTAS AHI, POR FAVOR, ¡SALVAME SUPERMAN!",
		    "¿QUE TE PASO VIEJO? ANTES ERAS CHEVERE",
		    "NO PUEDES ESCONDERTE DE MI, PASO VEINTITRES HORAS DIARIAS AQUI",
		    "NO VIVES DE ENSALADA",
		    "A LA GRANDE LE PUSE CUCA",
		    "HE VISTO MUCHAS BASOFIAS, PERO ESTOS SON LA MAYOR BASOFIA ENTRE LAS BASOFIAS",
		    "AY ESTA GRASA QUE NO SE QUITA",
		    "CREO QUE ODIO A MICHAEL JACKSON, NO LA VERDAD QUE CANTA BIEN Y ES NOBLE",
		    "COMPRENLO MUCHACHOS, NO ME HICE RICO FIRMANDO CHEQUES",
		    "ME QUIERO VOLVER CHANGO! MI AUTO!",
		    "NANANANANANANANA ¡BATMAN!, DIGO ¡LIDER!",
		    "COMPUTADORA MATA A FLANDERS",
		    "ESCUELA DE PAYASOS, ESO NO SE COME",
		    "SIEMPRE DUDE DE LA EXISTENCIA DE DIOS, AHORA SE QUE EXISTE... SOY YO",
		    "ES MEJOR QUEDARSE CALLADO Y PASAR POR TONTO QUE ABRIR LA BOCA Y DESPEJAR LAS DUDAS",
		    "SI YO ME MURIERA, REENCARNARIA EN MARIPOSA, NADIE SOSPECHARIA DE UNA MARIPOSA"];
}