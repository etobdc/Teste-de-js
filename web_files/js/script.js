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