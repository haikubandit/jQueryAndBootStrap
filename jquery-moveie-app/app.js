//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Add list item with movie and rating from form
$('form').on('click', 'button', function(e) {
	e.preventDefault();
	const $title = $('#title').val();
	const $rating = $('#rating').val();
	$('ul').append(`<li><b>${$title}</b> is rated <b>${$rating}</b> stars  </li>`);

	// Add delete button at end of each list item
	$('ul li').append('<button>Delete</button>');
});

// remove list item when delete button is clicked
$('ul').on('click', 'button', function() {
	$(this).parent().remove();
});
