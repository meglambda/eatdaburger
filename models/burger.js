// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var food = {
  selectAll: function(cb) {
    orm.selectAll("daburger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("daburger", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(vals, condition, cb) {
    orm.update("daburger", vals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("daburger", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = food;
