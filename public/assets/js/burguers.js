$(function () {
  $(".devour").on("click", function (event) {
    var id = $(this).attr("id");

    var newburguerState = {
      devoured: 1,
    };

    console.log("id button", id);

    // Send the PUT request.
    $.ajax("/api/burguers/" + id, {
      type: "PUT",
      data: newburguerState,
    }).then(function () {
      console.log("changed burguer devoured");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurguer = {
      name: $("#burgerText").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burguers", {
      type: "POST",
      data: newBurguer,
    }).then(function () {
      console.log("created new burguer");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
