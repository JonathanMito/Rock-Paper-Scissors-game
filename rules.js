var box_rules = document.getElementById("rules");
var bg_active = document.getElementById("bg-active");

function displayBoxRules(display){
	if (display) {
		box_rules.style.display = bg_active.style.display = "block";
	}
	else{
		box_rules.style.display = bg_active.style.display = "none";
	}
}