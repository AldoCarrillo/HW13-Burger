var express = require("express");

var router = express.Router();

// Import the model (burguer.js) to use its database functions.
var burguer = require("../models/burguer.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burguer.all(function (data) {
    var hbsObject = {
      burguers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burguers", function (req, res) {
  burguer.create(["burguer_name", "devoured"], [req.body.name, 0], function (
    result
  ) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/burguers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burguer.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
