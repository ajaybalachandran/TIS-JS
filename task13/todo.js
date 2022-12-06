$(document).ready(function() {
    $('#add_btn').click(function() {
        var todo =  $('#todo').val();
        $('#myTable tbody').append(`<tr class="child"><td>${todo}</td></tr>`);
    });
});