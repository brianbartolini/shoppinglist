$(document).ready(function() {

// var e = jQuery.Event("keydown");
// e.which == 13;


$(".shoppinglistinput").keydown(function(e){
	var val = $(".shoppinglistinput").val();
	var shoppingListDiv = '<li class= "shoppingitem"><input type="checkbox" class="shoppingitem-check"></input>' + val + '<button class= "delete">Delete</button>'
	if (e.keyCode == 13) {
	$(".todo-list").append(shoppingListDiv);
	$(".shoppinglistinput").val('');
	}
})

$(".add-input").mousedown(function(){
	var val = $(".shoppinglistinput").val();
	var shoppingListDiv = '<li class= "shoppingitem"><input type="checkbox" class="shoppingitem-check"></input>' + val + '<button class= "delete">Delete</button>'
	$(".todo-list").append(shoppingListDiv);
	$(".shoppinglistinput").val('');
});


$(document).on('click', '.delete', function(){
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

