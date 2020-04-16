$(document).ready(function () {
  $(".un p").hide();
  $(".un").click(function () {
    $(".un p").toggle();
    $(".un img").toggle();
  });

  $(".deux p").hide();
  $(".deux").click(function () {
    $(".deux p").toggle();
    $(".deux img").toggle();
  });

  $(".trois p").hide();
  $(".trois").click(function () {
    $(".trois p").toggle();
    $(".trois img").toggle();
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
