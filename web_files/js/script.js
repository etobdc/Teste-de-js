//ÍNICIO CÓDIGO SLIDER
var tempo;
var troca = 0;
var conta = 0;
var setTempo = 2000;
function contaTempo() { 
	tempo = setInterval(muda_img,setTempo);

}
var foo = 'undefined';
function muda_img(x){
	setTempo = 5000;
	clearInterval(tempo);
	tempo = setInterval(muda_img,setTempo);
	troca++;
	conta++;
	if(typeof x == 'undefined'){
		if(troca == 1){
			document.getElementById("img1").style.visibility = "visible";
			document.getElementById("load").style.display = "none";
			document.getElementById("img1").style.opacity = "1";
			if(conta > 1){
				document.getElementById("img3").style.visibility = "";

				document.getElementById("img3").style.opacity = "0";
			}
			document.getElementById("circ_1").style.backgroundColor = "red";
			document.getElementById("circ_3").style.backgroundColor = "#9A9797";
		}else if(troca == 2){
			document.getElementById("img2").style.visibility = "visible";
			document.getElementById("img2").style.opacity = "1";
			document.getElementById("img1").style.visibility = "";

			document.getElementById("img1").style.opacity = "0";

			document.getElementById("circ_2").style.backgroundColor = "red";
			document.getElementById("circ_1").style.backgroundColor = "#9A9797";

		}else if(troca == 3){
			document.getElementById("img3").style.visibility = "visible";
			document.getElementById("img3").style.opacity = "1";
			document.getElementById("img2").style.visibility = "";

			document.getElementById("img2").style.opacity = "0";
			document.getElementById("circ_3").style.backgroundColor = "red";
			document.getElementById("circ_2").style.backgroundColor = "#9A9797";
			troca = 0;
		}
	}else{
		if(x == 1){
			console.log(x);
			document.getElementById("img1").style.visibility = "visible";
			document.getElementById("load").style.display = "none";
			document.getElementById("img1").style.opacity = "1";

			document.getElementById("img3").style.visibility = "";
			document.getElementById("img3").style.opacity = "0";

			document.getElementById("img2").style.visibility = "";
			document.getElementById("img2").style.opacity = "0";

			document.getElementById("circ_1").style.backgroundColor = "red";
			document.getElementById("circ_2").style.backgroundColor = "#9A9797";
			document.getElementById("circ_3").style.backgroundColor = "#9A9797";
			clearInterval(tempo);
			tempo = setInterval(muda_img,setTempo);
			troca = 1;
		}else if(x == 2){

			console.log(x);
			document.getElementById("img2").style.visibility = "visible";
			document.getElementById("img2").style.opacity = "1";

			document.getElementById("img1").style.visibility = "";
			document.getElementById("img1").style.opacity = "0";

			document.getElementById("img3").style.visibility = "";
			document.getElementById("img3").style.opacity = "0";

			document.getElementById("circ_2").style.backgroundColor = "red";
			document.getElementById("circ_1").style.backgroundColor = "#9A9797";
			document.getElementById("circ_3").style.backgroundColor = "#9A9797";
			clearInterval(tempo);
			tempo = setInterval(muda_img,setTempo);
			troca = 2;

		}else if(x == 3){

			console.log(x);
			document.getElementById("img3").style.visibility = "visible";
			document.getElementById("img3").style.opacity = "1";

			document.getElementById("img2").style.visibility = "";
			document.getElementById("img2").style.opacity = "0";

			document.getElementById("img1").style.visibility = "";
			document.getElementById("img1").style.opacity = "0";

			document.getElementById("circ_3").style.backgroundColor = "red";
			document.getElementById("circ_1").style.backgroundColor = "#9A9797";
			document.getElementById("circ_2").style.backgroundColor = "#9A9797";
			clearInterval(tempo);
			tempo = setInterval(muda_img,setTempo);
			troca = 0;

		}
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
function SomenteNumero(e){
	var tecla=(window.event)?event.keyCode:e.which;   
	if((tecla>47 && tecla<58)) return true;
	else{
		if (tecla==8 || tecla==0) return true;
		else  return false;
	}
}
function ordem(x){
	function ordenar(a, b){
  return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
}

if(x == 1){
	var nums = document.getElementById("nums").value;
	if(nums != ''){
		var numeros = nums.split("");		
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
}else if(x == 2){
	var nums1 = document.getElementById("nums1").value;
	var nums2 = document.getElementById("nums2").value;
	var nums3 = document.getElementById("nums3").value;
	console.log(nums1);
	console.log(nums2);
	console.log(nums3);
	if(nums1 != '' && nums2 != '' && nums3 != ''){
		var n_total = nums1+','+nums2+','+nums3;

		var numeros2 = n_total.split(",");
		var resultado2 = (numeros2.sort(ordenar))
		document.getElementById("resultado2").innerHTML = resultado2;
		document.getElementById("resultado2").style.padding = "0.5em";
		document.getElementById("resultado2").style.boxShadow = "-4px 8px 25px 2px rgba(50, 50, 50, 0.63)";
	}else{
		document.getElementById("resultado2").innerHTML = 'Por favor, Digite todos os números';
		document.getElementById("resultado2").style.padding = "0.5em";
		document.getElementById("resultado2").style.boxShadow = "-4px 8px 25px 2px rgba(50, 50, 50, 0.63)";
	}

}

}

//FIM CÓDIGO ORDENAR

//ÍNICIO DE MISTURAR
function misturar(x){
	function desordenar(a, b){
		return (Math.round(Math.random())-0.5);
	}   
	if(x == 1){
		var nums_2 = document.getElementById("nums_2").value;
		console.log(nums_2);
		if(nums_2 != ''){
			var numeros_2 = nums_2.split("");

			console.log(numeros_2);

			var resultado_2 = (numeros_2.sort(desordenar)); 
			document.getElementById("resu2").innerHTML = resultado_2;
			document.getElementById("resu2").style.padding = "0.5em";
			document.getElementById("resu2").style.boxShadow = "-4px 8px 25px 2px rgba(50, 50, 50, 0.63)";
		}else if(nums_2 == ''){
			document.getElementById("resu2").innerHTML = 'Por favor, Digite os números';
			document.getElementById("resu2").style.padding = "0.5em";
			document.getElementById("resu2").style.boxShadow = "-4px 8px 25px 2px rgba(50, 50, 50, 0.63)";
		}else if(0 > nums_2){
			document.getElementById("resu2").innerHTML = 'Por favor, Preencha todos os campos';
			document.getElementById("resu2").style.padding = "0.5em";
			document.getElementById("resu2").style.boxShadow = "-4px 8px 25px 2px rgba(50, 50, 50, 0.63)";
		}
	}else if(x == 2){
		var numero_1 = document.getElementById("numero_1").value;
		var numero_2 = document.getElementById("numero_2").value;
		var numero_3 = document.getElementById("numero_3").value;
		var numero_4 = document.getElementById("numero_4").value;
		var numero_5 = document.getElementById("numero_5").value;

		if(numero_1 != '' && numero_2 != '' && numero_3 != '' && numero_4 != '' && numero_5 != ''){
			if(numero_1 <= 100 && numero_2 <= 100 && numero_3 <= 100 && numero_4 <= 100 && numero_5 <= 100){

				var n_total = numero_1+','+numero_2+','+numero_3+','+numero_4+','+numero_5;
				console.log(n_total);


				var numeros_2 = n_total.split(",");

				console.log(numeros_2);			

				var resultado_2 = (numeros_2.sort(desordenar)); 
				document.getElementById("resu_2").innerHTML = resultado_2;
				document.getElementById("resu_2").style.padding = "0.5em";
				document.getElementById("resu_2").style.boxShadow = "-4px 8px 25px 2px rgba(50, 50, 50, 0.63)";
			}else{
				document.getElementById("resu_2").innerHTML = 'Os números devem ser menores ou iguais a 100';
				document.getElementById("resu_2").style.padding = "0.5em";
				document.getElementById("resu_2").style.boxShadow = "-4px 8px 25px 2px rgba(50, 50, 50, 0.63)";
			}
		}else{
			document.getElementById("resu_2").innerHTML = 'Por favor,Preencha todos os campos';
			document.getElementById("resu_2").style.padding = "0.5em";
			document.getElementById("resu_2").style.boxShadow = "-4px 8px 25px 2px rgba(50, 50, 50, 0.63)";
		}
	}
}


//FIM CÓDIGO MISTURAR