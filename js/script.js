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

  $(".col-md-3")
    .mouseover(function () {
      $(this).css({
        opacity: ".5",
        color: "green",
        "justifyContent: ": "center",
      });
      $(this).children("span.imgun").show();
    })
    .mouseout(function () {
      $(this).css({ opacity: "4" });
      $(this).children("span.imgun").hide();
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
