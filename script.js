/* Exercise 1: Wish list */
function addToList(cosita) {
    $('#items').append('<li>' + cosita + '</li>');
    $('#items').append('<span class=label-pending>' + 'Pending' + '</span>');
}

$(document).on('click', '#add-to-list', function() {
    addToList($('#item').val());
    $('#item').focus().val('');
});

$(document).on('click', '.label-pending', function() {
    var li_node = $(this).parent();
    $(this).remove('.label-pending');
    //$(this).addClass('completed');
    //$(this).append('<span class=label-success>' + 'Done!' + '</span>');
});