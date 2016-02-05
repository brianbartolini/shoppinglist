$(document).ready(function() {

// var e = jQuery.Event("keydown");
// e.which == 13;


$(".shoppinglistinput").keydown(function(e){
	var val = $(".shoppinglistinput").val();
	var shoppingListDiv = '<li class= "shoppingitem"><input type="checkbox" class="shoppingitem-check"></input>' + val + '<i class="fa fa-trash-o"></i><i class="fa fa-arrows-v"></i>'
	if (e.keyCode == 13) {
	$(".todo-list").append(shoppingListDiv);
	$(".shoppinglistinput").val('');
	}
})

$(".fa-plus-circle").mousedown(function(){
	var val = $(".shoppinglistinput").val();
	var shoppingListDiv = '<li class= "shoppingitem"><input type="checkbox" class="shoppingitem-check"></input>' + val + '<i class="fa fa-trash-o"></i><i class="fa fa-arrows-v"></i>'
	$(".todo-list").append(shoppingListDiv);
	$(".shoppinglistinput").val('');
});


$(document).on('click', '.fa-trash-o', function(){
	$(this).parent().remove();

});

// $(document).ready(function() {
// 	$(".todolist" ).sortable({
// 		handle:'.drag',
// 		axis:'y',
// 	});
	// $(".todolist" ).disableSelection();
// });


// $(".delete").mousedown(function(){
// 	console.log("button clicked");

// })


});