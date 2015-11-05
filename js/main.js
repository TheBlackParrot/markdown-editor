//$(".wrapper").html(markdown.toHTML("### This is a test\n\n*Howdy!*\nI'm **FLOWEY**\n\n**FLOWEY** the **FLOWER**!"));

$(document).ready(function(){
	var element = $(".output");
	var height = element.parent().height() - element.parent().children(".head").height() - 16;

	// $(this)... isn't working?
	$(".output").height(height);
	$(".input textarea").height(height - $(".tools").height());


	$("#fonts").on("change", function(){
		$(".output").css("font-family", $(this).val());
	});
});

function updateOutput() {
	var element = document.getElementById("text-input");

	$(".output").html(markdown.toHTML(element.value));
}