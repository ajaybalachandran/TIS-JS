$(document).ready(function(){
    $("#search_key").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#id_mytable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });