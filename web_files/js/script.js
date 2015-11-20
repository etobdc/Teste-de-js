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
	console.log(x);
    if (x == 'tab_1') {
    	document.getElementById("tab_content_2").style.display = "none";
    	document.getElementById("tab_content_3").style.display = "none";
    	document.getElementById("tab_content_4").style.display = "none";

    	document.getElementById("tab_content_1").style.display = "block";
    	//document.getElementById("tab_1").style.borderRight =  "none";

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