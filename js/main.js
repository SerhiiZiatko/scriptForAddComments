$(function(){

// функция добавления комментария на страничку
  	function makeComments( object ){

  		if ( !object.text.trim() ){
  			$( "#message" ).addClass( "messageError" );
  			return false;
  		} 
  		else{
  			$( "#message" ).removeClass( "messageError" );
  		}
  			

	    var newLi = $( "<li/>",{ class: "comments" })
	    	.append($( "<a/>", { class: "commentsName", text: object.name, href: "#" }))
		    .append($( "<div/>", { class: "commentsDate", text: object.date }))
		    .append($( "<p/>", { class: "commentsMsg", text: object.text.trim() }))
		    .fadeIn(500);

	    $( ".commentsBlock" ).append( newLi );

	   	$( "#comentsForm" )[0].reset();
	}

// обработка события клик по кнопке формы
    $( "#comentsForm" ).submit( function( event ) {
    	event.preventDefault();

    	makeComments({
    		text: $( "#message", this ).val(),
    		name: "Виктор Петрович",
	    	date: moment().format( 'DD MMMM YYYY' )
    	});
    });
    	
// обработка события комбинация клавиш Ctrl + Enter
	$( "#comentsForm" ).keypress(function ( event ) {
		
		if (( event.keyCode == 10 || event.keyCode == 13 ) && event.ctrlKey ){
 			
			$( "#comentsForm" ).trigger( "submit" );			
		}
 
	});
})

