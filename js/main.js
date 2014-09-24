function nav(){
	$('nav.main ul.nav a').on('click',function(event){
		event.preventDefault();
		var link = $(event.currentTarget).attr('href');
		$('article.main').load(link);
		var bg = link.split(".")[0]
		$('#background-image').removeClass().addClass(bg);

		// debugger;
		// var bg = link
	});
}


$(document).ready(function(){

	nav();

});