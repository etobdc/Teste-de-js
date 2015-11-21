//ÍNICIO CÓDIGO SLIDER
var tempo;
var troca = 0;
function contaTempo() { 
	tempo = setInterval(muda_img,2000);
	console.log(tempo);
}
function muda_img(){
	troca++;
	if(troca == 1){
		document.getElementById("img1").style.visibility = "visible";
		document.getElementById("img1").style.opacity = "1";
		document.getElementById("img3").style.visibility = "";

		document.getElementById("img3").style.opacity = "0";
	}else if(troca == 2){
		document.getElementById("img1").style.visibility = "visible";
		document.getElementById("img2").style.opacity = "1";
		document.getElementById("img2").style.visibility = "";

		document.getElementById("img1").style.opacity = "0";

	}else if(troca == 3){
		document.getElementById("img2").style.visibility = "visible";
		document.getElementById("img3").style.opacity = "1";
		document.getElementById("img3").style.visibility = "";

		document.getElementById("img2").style.opacity = "0";
		troca = 0;
	}
}
//FIM CÓDIGO SLIDER
//ÍNICIO CÓDIGO TABS
function troca_tab(x){
	if (x == 'tab_1') {
		document.getElementById("tab_content_2").style.display = "none";
		document.getElementById("tab_content_3").style.display = "none";
		document.getElementById("tab_content_4").style.display = "none";

		document.getElementById("tab_content_1").style.display = "block";

		document.getElementById('tab_1').className = 'active tabs';

		document.getElementById('tab_2').className = ' tabs';
		document.getElementById('tab_3').className = ' tabs';
		document.getElementById('tab_4').className = ' tabs';
	}else if(x == 'tab_2'){
		document.getElementById("tab_content_1").style.display = "none";
		document.getElementById("tab_content_3").style.display = "none";
		document.getElementById("tab_content_4").style.display = "none";

		document.getElementById("tab_content_2").style.display = "block";

		document.getElementById('tab_2').className = 'active tabs';

		document.getElementById('tab_1').className = ' tabs';
		document.getElementById('tab_3').className = ' tabs';
		document.getElementById('tab_4').className = ' tabs';
	}else if(x == 'tab_3'){
		document.getElementById("tab_content_1").style.display = "none";
		document.getElementById("tab_content_2").style.display = "none";
		document.getElementById("tab_content_4").style.display = "none";

		document.getElementById("tab_content_3").style.display = "block";

		document.getElementById('tab_3').className = 'active tabs';

		document.getElementById('tab_1').className = ' tabs';
		document.getElementById('tab_2').className = ' tabs';
		document.getElementById('tab_4').className = ' tabs';
	}else if(x == 'tab_4'){
		document.getElementById("tab_content_1").style.display = "none";
		document.getElementById("tab_content_2").style.display = "none";
		document.getElementById("tab_content_3").style.display = "none";

		document.getElementById("tab_content_4").style.display= "block";

		document.getElementById('tab_4').className = 'active tabs';

		document.getElementById('tab_1').className = ' tabs';
		document.getElementById('tab_2').className = ' tabs';
		document.getElementById('tab_3').className = ' tabs';
	}
}
//FIM CÓDIGO TABS
//ÍNICIO DE ORDENAR
function ordem(){
	var nums = document.getElementById("nums").value;
	if(nums != ''){
		var numeros = nums.split("");



		function ordenar(a, b){
  return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
}

dados = numeros;
var resultado = (dados.sort(ordenar))
document.getElementById("resu").innerHTML = resultado;
document.getElementById("resu").style.padding = "0.5em";
document.getElementById("resu").style.boxShadow = "-4px 8px 25px 2px rgba(50, 50, 50, 0.63)";
}else{
	document.getElementById("resu").innerHTML = 'Por favor, Digite os números';
	document.getElementById("resu").style.padding = "0.5em";
	document.getElementById("resu").style.boxShadow = "-4px 8px 25px 2px rgba(50, 50, 50, 0.63)";
}

}

//FIM CÓDIGO ORDENAR

//ÍNICIO DE MISTURAR
function misturar(){
	var nums_2 = document.getElementById("nums_2").value;
	console.log(nums_2);
	if(nums_2 != ''){
		var numeros_2 = nums_2.split("");

		console.log(numeros_2);

		function desordenar(a, b){
			return (Math.round(Math.random())-0.5);
		}   

		var resultado_2 = (numeros_2.sort(desordenar)); 
		document.getElementById("resu2").innerHTML = resultado_2;
		document.getElementById("resu2").style.padding = "0.5em";
		document.getElementById("resu2").style.boxShadow = "-4px 8px 25px 2px rgba(50, 50, 50, 0.63)";
	}else if(nums_2 == ''){
		document.getElementById("resu2").innerHTML = 'Por favor, Digite os números';
		document.getElementById("resu2").style.padding = "0.5em";
		document.getElementById("resu2").style.boxShadow = "-4px 8px 25px 2px rgba(50, 50, 50, 0.63)";
	}else if(0 > nums_2){
		document.getElementById("resu2").innerHTML = 'Por favor, Digite números válidos';
		document.getElementById("resu2").style.padding = "0.5em";
		document.getElementById("resu2").style.boxShadow = "-4px 8px 25px 2px rgba(50, 50, 50, 0.63)";
	}
}


//FIM CÓDIGO MISTURAR