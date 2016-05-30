$(function(){

// функция добавления комментария на страничку
  	function addComment( object ){
  		
  		var $message = $( "#message" )
  		
  		if ( !object.text.trim() ){
  			$message.addClass( "messageError" );
  			return false;
  		} 
  		else{
  			$message.removeClass( "messageError" );
  		}
  		
	    var newLi = $( "<li/>",{ class: "comments" })
	    	.append($( "<a/>", { class: "commentsName", text: object.name, href: "#" }))
		    .append($( "<div/>", { class: "commentsDate", text: object.date }))
		    .append($( "<p/>", { class: "commentsMsg", text: object.text.trim() }))
		    .fadeIn(500);

	    $( ".commentsBlock" ).append( newLi );

	    return true;
	}

// обработка события клик по кнопке формы и комбинации клавиш Ctrl + Enter.
    $( "#commentsForm" )
    .submit( function( event ) {
    	event.preventDefault();
    	
    	addComment({
    		text: $( "#message", this ).val(),
    		name: "Виктор Петрович",
	    	date: moment().format( 'DD MMMM YYYY' )
    	});
    	
    	$( this )[0].reset();

    })
    .keypress(function ( event ) {
		
		if (( event.keyCode === 10 || event.keyCode === 13 ) && event.ctrlKey ){
 			$( this ).trigger( "submit" );			
		}
 
	});
});

