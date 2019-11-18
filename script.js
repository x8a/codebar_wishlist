/* Exercise 1: Wish list */
function addToList(cosita) {
    $('#items').append('<li>' + cosita + '</li>');
    $('#items').append('<span class="label pending">Pending</span>');
    updateTotal();
}

function updateTotal() {
    var pending = $('.label.pending').length;
    var success = $('.label.success').length;
    $('.total').text('Pending: ' + pending + ' Done: ' + success);
}

$(document).on('click', '#add-to-list', function() {
    addToList($('#item').val());
    $('#item').focus().val('');
});

$(document).on('click', '.label.pending', function() {
    var li_node = $(this).parent();
    $(this).remove();
    //$(this).addClass('completed');
    li_node.append('<span class="label success">Done!</span>');
    updateTotal();
});