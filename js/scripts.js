$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var blanks ["person1", "person2", "animal", "exclamation", "verb1", "noun", "verb2"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});
