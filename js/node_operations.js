 $(document).ready(function(){
 

  $('.node').on('click',function(){
  	var form = ' <div class="form" style="border :2px solid black"><label>Enter Name :</label><input id="probleminput" class="form-inline" type="text" style="display: inline;"></input></br>\
  	<label>Select Shape :</label><input id="shape" class="shape" type="check" style="display: inline;"></input></br><input type="file" id="output" onchange="loadFile(event)" >\
        <button id="problemsubmit" class="btn"  style="display: inline-block;">Submit</button></div>' ;

        $(".sample").append(form);
        $('.btn').on('click',function(){ 
			    var output = $('#imgPreview').prop('src');
			    console.log(output);

        	if ($('#probleminput').val() != null){
	        	var r= $('<li><a href="#"><img class="preview" /><span>'+ $('#probleminput').val() +'</span></a></li>');
	        		$(".sample").append(r);
        	}
        });
        $(".sample").removeClass("form");

         var loadFile = function(event) {
			    var output = document.getElementById('preview');
			    output.src = URL.createObjectURL(event.target.files[0]);
			    output.onload = function() {
			      URL.revokeObjectURL(output.src) // free memory
			    }
			  };




    });

		

});

 