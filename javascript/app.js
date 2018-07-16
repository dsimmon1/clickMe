document.addEventListener("DOMContentLoaded", function(event) {

	var space = document.getElementById("space");
	var addedButtons = document.getElementsByClassName("addedButtons");
	var ids = [];
	var num = 1000

	function addButtons() {

		for (var i = 0; i < 40; i++) 
		{
			var button = document.createElement("button");
			var id = "button " + i;
			ids.push(id);
			button.setAttribute("Id", "button " + i);
			button.setAttribute("Class", "addedButtons");
			button.setAttribute("name", "button " + i);
			button.addEventListener("click", display);
			space.appendChild(button);
		}
		console.log(ids);
	}

	function clearButtons() {
		space.remove(addedButtons);
	}

	function slowButtons() {

		for (var i=0;i<40;i++) {
   		(function(ind) {
       	
       	setTimeout(
       		function(){console.log(document.getElementById(ids[ind]).outerHTML = "")}, 1000 + (3000 * ind));
   		
   		})(i);
}
	}

	function display() {
    	name = this.getAttribute('name');
    	alert(name);
	};

});

