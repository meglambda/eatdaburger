var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var food = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  food.selectAll(function(data) {
    var hbsObject = {
      daburger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// router.post("/api/food", function(req, res) {
//   food.create([
//     "burgername", "devoured"
//   ], [
//     req.body.burgername
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
//   response.redirect('/burgered')
// });

// router.put("/api/food/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   food.updateOne({
//     devoured: true
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
//   res.redirect('/burgered');
// });

router.get("/*", function(req, res) {
  res.redirect('/burgered');
});

// Export routes for server.js to use.
module.exports = router;
