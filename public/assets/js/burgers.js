$(function () {
  $(".devour").on("click", function (event) {
    var id = $(this).attr("id");

    var newburgerState = {
      devoured: 1,
    };

    console.log("id button", id);

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newburgerState,
    }).then(function () {
      console.log("changed burger devoured");
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
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurguer,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
