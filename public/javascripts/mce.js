/*
MCE.JS handles the tinymce input etc.pp
// */
// window.onload = function(){

// 	var btn = document.getElementById('SubmitBtn');

// 	btn.onclick = function(){
// 		//This MUST alert HTML content of editor.
// 		alert( tinyMCE.activeEditor.getContent() );
// 	}
// };

// JQuery handling of the input
$(function(){

  var url = "/news";

  $("#submitBtn").click(function(){
    //"content" will PHP variable 
    $.post(url, { "content" : tinyMCE.activeEditor.getContent() }, function(respond){

       if ( respond == ){
          alert('Content saved to file');
          return;
       } else {
          //Error message assumed
          alert(respond);
        }
    });
  });

});
