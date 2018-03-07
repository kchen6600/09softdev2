var canv = document.getElementById("slate");
var clearb = document.getElementById("clear");

var fill = "lightsteelblue";

var draw = function(e) {
	var x = e.offsetX;
	var y = e.offsetY;
	
	var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circ.setAttribute("cx", x +"");
	circ.setAttribute("cy", y+"");
	circ.setAttribute("r", "20");
	circ.setAttribute("stroke", "#000000");
	circ.setAttribute("fill", fill);
	circ.addEventListener("click", changeC)
	canv.appendChild(circ);
	
};

var changeC = function(e){
	if (fill == this.getAttribute("fill")){
		this.setAttribute("fill", '#'+Math.floor(Math.random()*16777215).toString(16));
		e.stopPropagation();
	}
	else{

		e.stopPropagation();
		slate.removeChild(e.target);
		drawRand();
	}
}

var drawRand = function(){
	var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circ.setAttribute("cx", slate.getAttribute("width")*Math.random());
	circ.setAttribute("cy", slate.getAttribute("height")*Math.random());
	circ.setAttribute("r", "20");
	circ.setAttribute("stroke", "#000000");
	circ.setAttribute("fill", fill);
	circ.addEventListener("click", changeC)
	canv.appendChild(circ);
}

canv.addEventListener('click', draw, true);

var clear = function() {
    canv.innerHTML="";
};

clearb.addEventListener('click', clear);