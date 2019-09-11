$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verb1Input = $("input#verb1").val();
    var nounInput = $("input#noun").val();
    var verb2Input = $("input#verb2").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb1").text(verb1Input);
    $(".noun").text(nounInput);
    $(".verb2").text(verb2Input)

    $("#story").show();

    event.preventDefault();
  });
});
