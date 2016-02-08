$(document).ready(function() {

// Adding text from shopping input by pressing enter

$(".shoppinglistinput").keydown(function(e){
	var val = $(".shoppinglistinput").val();
	var shoppingListDiv = '<li class= "shoppingitem"><input type="checkbox" class="shoppingitem-check"></input>' + val + '<i class="fa fa-trash-o"></i><i class="fa fa-arrows-v"></i>'
	if (e.keyCode == 13 && val != '') {
	$(".todo-list").append(shoppingListDiv);
	$(".shoppinglistinput").val('');
	}
})

// Adding text from shopping input by clicking on the button.

$(".fa-plus-circle").mousedown(function(){
	var val = $(".shoppinglistinput").val();
	var shoppingListDiv = '<li class= "shoppingitem"><input type="checkbox" class="shoppingitem-check"></input>' + val + '<i class="fa fa-trash-o"></i><i class="fa fa-arrows-v"></i>'
	if( val != '') {
		$(".todo-list").append(shoppingListDiv);
		$(".shoppinglistinput").val('');
}
});

// Delete shopping list item by clicking button.

// $(".fa-minus-square-o").mousedown(function(){
	$(document).on('click', '.fa-minus-square-o', function(){
	 $('.todo-list li :checked').each(function() {
		$(this).parent().remove();
	})
});


$(document).on('click', '.fa-trash-o', function(){
	$(this).parent().remove();

});

});
