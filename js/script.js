$(document).ready(function () {
  $(".showun").click(function () {
    $(".img-hiddenun").toggle();
  });

  $(".showdeux").click(function () {
    $(".hidedeux").toggle();
    $(".img-hiddendeux").toggle();
  });

  $(".showtrois").click(function () {
    $(".img-hiddentrois").toggle();
  });

  $("#sendButton").click(function () {
    var names = $("#names").val();
    var email = $("#email").val();
    var message = $("#textArea").val();
    if (names === "" || email === "" || message === "") {
      alert("Please, fill the required fields!");
    } else {
      alert(
        names +
          ", we have received your message. Thank you for reaching out to us!"
      );
    }
  });
});
